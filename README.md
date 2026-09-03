# Komodo MCP

Community MCP server for [Komodo](https://komo.do). It exposes the complete
native Komodo API and terminal surface through six stable MCP tools, using the
official [`komodo_client`](https://www.npmjs.com/package/komodo_client) package.

This project targets MCP protocol revision `2026-07-28` and rejects legacy
protocol traffic.

> [!IMPORTANT]
> This is a community project and is not affiliated with or endorsed by Mogh
> Technologies or the Komodo project.

## Why six tools?

Komodo's API is RPC-like and already groups operations into `read`, `write`,
and `execute`. Mirroring every RPC as a separate MCP tool would currently add
333 tools to the model context. This server keeps the complete API surface but
uses discovery plus three typed operation gateways:

| MCP tool | Purpose |
| --- | --- |
| `komodo_discover` | Search every native operation and inspect its exact TypeScript request definition |
| `komodo_read` | Call any native read operation |
| `komodo_write` | Call any native create, update, permissions, variable, secret, or delete operation |
| `komodo_execute` | Run deploy, build, lifecycle, backup, restore, prune, and destroy operations |
| `komodo_terminal` | Run a command on a server, container, Stack service, or Deployment |
| `komodo_update_wait` | Wait for a Komodo update returned by a previous execution |

The operation catalog is regenerated from the installed `komodo_client`
declarations on every build. With `komodo_client` 2.3.2 it contains 140 reads,
114 writes, and 79 executions.

## Requirements

- Node.js 20 or newer
- Komodo Core 2.3 or newer
- A dedicated Komodo service user and API key

Use the least permissions needed for your workflows. `full` mode can deploy,
delete, restore, and execute unrestricted remote commands.

## Install

```bash
git clone https://github.com/AxENSRennes/komodo-mcp.git
cd komodo-mcp
npm ci
npm run build
```

Create an API key for a dedicated service user in Komodo, then configure your
MCP host:

```json
{
  "command": "node",
  "args": ["/absolute/path/to/komodo-mcp/dist/index.js"],
  "env": {
    "KOMODO_ADDRESS": "https://komodo.example.com",
    "KOMODO_API_KEY": "K-...",
    "KOMODO_API_SECRET": "S-...",
    "KOMODO_MCP_MODE": "full"
  }
}
```

Alternatively, `bin/komodo-mcp` loads
`${XDG_CONFIG_HOME:-$HOME/.config}/komodo-mcp/credentials.env` when that file
exists. Override the location with `KOMODO_MCP_ENV_FILE`.

## Configuration

| Variable | Required | Default | Meaning |
| --- | --- | --- | --- |
| `KOMODO_ADDRESS` | yes | — | Absolute HTTP(S) URL of Komodo Core |
| `KOMODO_API_KEY` | yes | — | Komodo API key |
| `KOMODO_API_SECRET` | yes | — | Komodo API secret |
| `KOMODO_MCP_MODE` | no | `full` | `full` or `readonly` |
| `KOMODO_MCP_TIMEOUT_MS` | no | `30000` | Default upstream request timeout |
| `KOMODO_MCP_MAX_CONCURRENCY` | no | `8` | Maximum active tool calls per process |
| `KOMODO_MCP_RATE_LIMIT_PER_MINUTE` | no | `120` | Maximum tool calls started per minute |

`readonly` registers only discovery, reads, and update waiting. It does not
register write, execute, or terminal tools.

## Usage

Discover an operation before calling it:

```json
{
  "channel": "write",
  "operation": "CreateStack"
}
```

Then pass the documented request object to the matching gateway:

```json
{
  "operation": "CreateStack",
  "params": {
    "name": "example",
    "config": {}
  }
}
```

Komodo executions return update IDs. Set `wait: true` on `komodo_execute` for
one-call polling, or keep the returned ID and call `komodo_update_wait` later.
This explicit handle is safe across MCP connections and maps directly to
Komodo's own update model.

## Protocol and security choices

- Built on the official MCP TypeScript SDK v2 and stdio transport.
- Accepts only MCP `2026-07-28`; required request metadata and negotiation are
  handled by the SDK.
- Uses Zod schemas for all MCP inputs and native operation enums generated from
  the official Komodo client.
- Returns tool failures as `isError: true`, so models can correct requests.
- Returns both `structuredContent` and equivalent serialized JSON text.
- Keeps tool ordering deterministic and advertises private cache hints.
- Marks all generic write, execute, and terminal gateways as destructive
  because the annotation cannot vary by the selected native operation.
- Applies process-level rate and concurrency limits, upstream timeouts, output
  size limits for terminals, and credential/secret-field redaction.
- Runs only over local stdio and does not open a network listener. Komodo
  remains responsible for authentication, authorization, and audit history.

MCP's 2026 Tasks feature is an extension rather than a stable core primitive.
This project deliberately uses Komodo update IDs as explicit state handles and
does not depend on the experimental Tasks SDK surface.

Tool annotations are hints, not an authorization boundary. Configure your MCP
client to ask for confirmation on sensitive operations and restrict the
Komodo service user's permissions.

## CLI

This repository does not implement another CLI. Use Komodo's official `km`
CLI for humans and shell automation:

```bash
km list stacks
km deploy stack my-stack
km ssh my-server
```

## Development

```bash
npm ci
npm run check
```

Run the MCP Inspector against the compiled server:

```bash
npx @modelcontextprotocol/inspector node dist/index.js
```

`npm run generate` rebuilds `src/generated/catalog.ts` from the installed
Komodo client. Commit catalog changes together with the dependency update.

## License

GPL-3.0-only. The official Komodo TypeScript client used by this project is
licensed under GPL-3.0.

## References

- [Komodo API and clients](https://komo.do/docs/ecosystem/api)
- [Komodo CLI](https://komo.do/docs/ecosystem/cli)
- [MCP 2026-07-28 tools specification](https://modelcontextprotocol.io/specification/2026-07-28/server/tools)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
