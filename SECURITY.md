# Security Policy

## Reporting a vulnerability

Please do not open a public issue for an unpatched vulnerability. Use GitHub's
private vulnerability reporting feature on this repository instead.

Include the affected version, reproduction steps, impact, and any proposed
mitigation. Do not include live Komodo credentials or private infrastructure
details.

## Operational guidance

- Use a dedicated Komodo service user with least privilege.
- Prefer `KOMODO_MCP_MODE=readonly` when mutations are unnecessary.
- Keep API credentials in the MCP host's secret store or a mode-`0600` file.
- Require human confirmation for destructive tools in the MCP client.
- Rotate credentials immediately if they appear in logs, prompts, or tool
  output.
- Terminal stdout and stderr are returned verbatim. Do not run commands that
  print credentials or private environment variables.
