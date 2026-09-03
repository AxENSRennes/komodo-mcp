// Generated from komodo_client. Do not edit by hand.
export const operationCatalog = {
  "read": [
    {
      "name": "GetVersion",
      "summary": "Get the version of the Komodo Core API.",
      "schema": "/**\n * Get the version of the Komodo Core API.\n * Response: [GetVersionResponse].\n */\nexport interface GetVersion {\n}"
    },
    {
      "name": "GetCoreInfo",
      "summary": "Get information about the Komodo Core API configuration.",
      "schema": "/**\n * Get information about the Komodo Core API configuration.\n * Response: [GetCoreInfoResponse].\n */\nexport interface GetCoreInfo {\n}"
    },
    {
      "name": "ListSecrets",
      "summary": "List the secret keys (not values) in the core configuration file.",
      "schema": "/**\n * List the secret keys (not values) in the core configuration file.\n * Response: [ListSecretsResponse].\n */\nexport interface ListSecrets {\n    /**\n     * Accepts an optional Server or Builder target to expand the core list with\n     * providers available on that specific resource.\n     */\n    target?: ResourceTarget;\n}"
    },
    {
      "name": "ListGitProvidersFromConfig",
      "summary": "List the git providers available in Core / Periphery config files. Includes: - providers in core config - providers configured on builds, repos, syncs - providers on the optional Server or Builder",
      "schema": "/**\n * List the git providers available in Core / Periphery config files.\n * Response: [ListGitProvidersFromConfigResponse].\n *\n * Includes:\n * - providers in core config\n * - providers configured on builds, repos, syncs\n * - providers on the optional Server or Builder\n */\nexport interface ListGitProvidersFromConfig {\n    /**\n     * Accepts an optional Server or Builder target to expand the core list with\n     * providers available on that specific resource.\n     */\n    target?: ResourceTarget;\n}"
    },
    {
      "name": "ListImageRegistriesFromConfig",
      "summary": "List the image registry providers available in Core / Periphery config files. Includes: - registries in core config - registries configured on builds, deployments - registries on the optional Server or Builder Pre v2.3.0, called `ListDockerRegistriesFromConfig`",
      "schema": "/**\n * List the image registry providers available in Core / Periphery config files.\n * Response: [ListImageRegistriesFromConfigResponse].\n *\n * Includes:\n * - registries in core config\n * - registries configured on builds, deployments\n * - registries on the optional Server or Builder\n *\n * Pre v2.3.0, called `ListDockerRegistriesFromConfig`\n */\nexport interface ListImageRegistriesFromConfig {\n    /**\n     * Accepts an optional Server or Builder target to expand the core list with\n     * providers available on that specific resource.\n     */\n    target?: ResourceTarget;\n}"
    },
    {
      "name": "GetSwarmsSummary",
      "summary": "Gets a summary of data relating to all swarms.",
      "schema": "/**\n * Gets a summary of data relating to all swarms.\n * Response: [GetSwarmsSummaryResponse].\n */\nexport interface GetSwarmsSummary {\n}"
    },
    {
      "name": "GetSwarm",
      "summary": "Get a specific swarm. Response: Swarm.",
      "schema": "/** Get a specific swarm. Response: [Swarm]. */\nexport interface GetSwarm {\n    /** Id or name */\n    swarm: string;\n}"
    },
    {
      "name": "GetSwarmActionState",
      "summary": "Get current action state for the swarm. Response: SwarmActionState.",
      "schema": "/** Get current action state for the swarm. Response: [SwarmActionState]. */\nexport interface GetSwarmActionState {\n    /** Id or name */\n    swarm: string;\n}"
    },
    {
      "name": "ListSwarms",
      "summary": "List Swarms matching optional query. Response: ListSwarmsResponse.",
      "schema": "/** List Swarms matching optional query. Response: [ListSwarmsResponse]. */\nexport interface ListSwarms {\n    /** Optional structured query to filter Swarms. */\n    query?: SwarmQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n    /**\n     * Sort the results by this field.\n     * Defaults to Name. Non-Name sorts are applied in memory\n     * after querying all matching resources.\n     */\n    sort_by?: SwarmSortBy;\n    /** Reverse the sort direction. */\n    sort_desc?: boolean;\n}"
    },
    {
      "name": "ListFullSwarms",
      "summary": "List Swarms matching optional query. Response: ListFullSwarmsResponse.",
      "schema": "/** List Swarms matching optional query. Response: [ListFullSwarmsResponse]. */\nexport interface ListFullSwarms {\n    /** optional structured query to filter swarms. */\n    query?: SwarmQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n}"
    },
    {
      "name": "InspectSwarm",
      "summary": "Inspect information about the swarm.",
      "schema": "/**\n * Inspect information about the swarm.\n * Response: [SwarmInspectInfo].\n */\nexport interface InspectSwarm {\n    /** Id or name */\n    swarm: string;\n}"
    },
    {
      "name": "ListSwarmNodes",
      "summary": "List nodes part of the target Swarm.",
      "schema": "/**\n * List nodes part of the target Swarm.\n * Response: [ListSwarmNodesResponse].\n */\nexport interface ListSwarmNodes {\n    /** Id or name */\n    swarm: string;\n}"
    },
    {
      "name": "InspectSwarmNode",
      "summary": "Inspect a Swarm node.",
      "schema": "/**\n * Inspect a Swarm node.\n * Response: [SwarmNode].\n */\nexport interface InspectSwarmNode {\n    /** Id or name */\n    swarm: string;\n    /** Node id */\n    node: string;\n}"
    },
    {
      "name": "ListSwarmConfigs",
      "summary": "List configs on the target Swarm.",
      "schema": "/**\n * List configs on the target Swarm.\n * Response: [ListSwarmConfigsResponse].\n */\nexport interface ListSwarmConfigs {\n    /** Id or name */\n    swarm: string;\n}"
    },
    {
      "name": "InspectSwarmConfig",
      "summary": "Inspect a config on the target Swarm.",
      "schema": "/**\n * Inspect a config on the target Swarm.\n * Response: [InspectSwarmConfigResponse].\n */\nexport interface InspectSwarmConfig {\n    /** Id or name */\n    swarm: string;\n    /** Swarm config ID or Name */\n    config: string;\n}"
    },
    {
      "name": "ListSwarmSecrets",
      "summary": "List secrets on the target Swarm.",
      "schema": "/**\n * List secrets on the target Swarm.\n * Response: [ListSwarmSecretsResponse].\n */\nexport interface ListSwarmSecrets {\n    /** Id or name */\n    swarm: string;\n}"
    },
    {
      "name": "InspectSwarmSecret",
      "summary": "Inspect a Swarm secret.",
      "schema": "/**\n * Inspect a Swarm secret.\n * Response: [SwarmSecret].\n */\nexport interface InspectSwarmSecret {\n    /** Id or name */\n    swarm: string;\n    /** Secret id */\n    secret: string;\n}"
    },
    {
      "name": "ListSwarmStacks",
      "summary": "List stacks on the target Swarm.",
      "schema": "/**\n * List stacks on the target Swarm.\n * Response: [ListSwarmStacksResponse].\n */\nexport interface ListSwarmStacks {\n    /** Id or name */\n    swarm: string;\n}"
    },
    {
      "name": "InspectSwarmStack",
      "summary": "Inspect a stack on the target Swarm.",
      "schema": "/**\n * Inspect a stack on the target Swarm.\n * Response: [SwarmStackLists].\n */\nexport interface InspectSwarmStack {\n    /** Id or name */\n    swarm: string;\n    /** Swarm stack name */\n    stack: string;\n}"
    },
    {
      "name": "ListSwarmTasks",
      "summary": "List tasks on the target Swarm.",
      "schema": "/**\n * List tasks on the target Swarm.\n * Response: [ListSwarmTasksResponse].\n */\nexport interface ListSwarmTasks {\n    /** Id or name */\n    swarm: string;\n}"
    },
    {
      "name": "InspectSwarmTask",
      "summary": "Inspect a Swarm task.",
      "schema": "/**\n * Inspect a Swarm task.\n * Response: [SwarmTask].\n */\nexport interface InspectSwarmTask {\n    /** Id or name */\n    swarm: string;\n    /** Task id */\n    task: string;\n}"
    },
    {
      "name": "ListSwarmServices",
      "summary": "List services on the target Swarm.",
      "schema": "/**\n * List services on the target Swarm.\n * Response: [ListSwarmServicesResponse].\n */\nexport interface ListSwarmServices {\n    /** Id or name */\n    swarm: string;\n}"
    },
    {
      "name": "InspectSwarmService",
      "summary": "Inspect a Swarm service.",
      "schema": "/**\n * Inspect a Swarm service.\n * Response: [SwarmService].\n */\nexport interface InspectSwarmService {\n    /** Id or name */\n    swarm: string;\n    /** Service id */\n    service: string;\n}"
    },
    {
      "name": "GetSwarmServiceLog",
      "summary": "Get a swarm service's logs. Response: GetSwarmServiceLogResponse. Note. This call will hit the underlying server directly for most up to date log.",
      "schema": "/**\n * Get a swarm service's logs. Response: [GetSwarmServiceLogResponse].\n *\n * Note. This call will hit the underlying server directly for most up to date log.\n */\nexport interface GetSwarmServiceLog {\n    /** Id or name */\n    swarm: string;\n    /** Select the swarm service to get logs for. */\n    service: string;\n    /**\n     * The number of lines of the log tail to include.\n     * Default: 100.\n     * Max: 5000.\n     */\n    tail: U64;\n    /** Enable `--timestamps` */\n    timestamps?: boolean;\n    /** Enable `--no-task-ids` */\n    no_task_ids?: boolean;\n    /** Enable `--no-resolve` */\n    no_resolve?: boolean;\n    /** Enable `--details` */\n    details?: boolean;\n}"
    },
    {
      "name": "SearchSwarmServiceLog",
      "summary": "Search the swarm service log's tail using `grep`. All lines go to stdout. Note. This call will hit the underlying server directly for most up to date log.",
      "schema": "/**\n * Search the swarm service log's tail using `grep`. All lines go to stdout.\n * Response: [SearchSwarmServiceLogResponse].\n *\n * Note. This call will hit the underlying server directly for most up to date log.\n */\nexport interface SearchSwarmServiceLog {\n    /** Id or name */\n    swarm: string;\n    /** Select the swarm service to get logs for. */\n    service: string;\n    /** The terms to search for. */\n    terms: string[];\n    /**\n     * When searching for multiple terms, can use `AND` or `OR` combinator.\n     *\n     * - `AND`: Only include lines with **all** terms present in that line.\n     * - `OR`: Include lines that have one or more matches in the terms.\n     */\n    combinator?: SearchCombinator;\n    /** Invert the results, ie return all lines that DON'T match the terms / combinator. */\n    invert?: boolean;\n    /** Enable `--timestamps` */\n    timestamps?: boolean;\n    /** Enable `--no-task-ids` */\n    no_task_ids?: boolean;\n    /** Enable `--no-resolve` */\n    no_resolve?: boolean;\n    /** Enable `--details` */\n    details?: boolean;\n}"
    },
    {
      "name": "ListSwarmNetworks",
      "summary": "List the networks on the swarm. Response: ListSwarmNetworksResponse. This only includes the overlay networks. They will be the same across all nodes in the swarm.",
      "schema": "/**\n * List the networks on the swarm. Response: [ListSwarmNetworksResponse].\n *\n * This only includes the overlay networks.\n * They will be the same across all nodes in the swarm.\n */\nexport interface ListSwarmNetworks {\n    /** Id or name */\n    swarm: string;\n}"
    },
    {
      "name": "GetServersSummary",
      "summary": "Gets a summary of data relating to all servers.",
      "schema": "/**\n * Gets a summary of data relating to all servers.\n * Response: [GetServersSummaryResponse].\n */\nexport interface GetServersSummary {\n}"
    },
    {
      "name": "GetServer",
      "summary": "Get a specific server. Response: Server.",
      "schema": "/** Get a specific server. Response: [Server]. */\nexport interface GetServer {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "GetServerState",
      "summary": "Get the state of the target server. Response: GetServerStateResponse.",
      "schema": "/** Get the state of the target server. Response: [GetServerStateResponse]. */\nexport interface GetServerState {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "GetPeripheryInformation",
      "summary": "Get the Periphery information of the target server, including the Periphery version and public key.",
      "schema": "/**\n * Get the Periphery information of the target server,\n * including the Periphery version and public key.\n * Response: [PeripheryInformation].\n */\nexport interface GetPeripheryInformation {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "GetServerActionState",
      "summary": "Get current action state for the servers. Response: ServerActionState.",
      "schema": "/** Get current action state for the servers. Response: [ServerActionState]. */\nexport interface GetServerActionState {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "ListServers",
      "summary": "List servers matching optional query. Response: ListServersResponse.",
      "schema": "/** List servers matching optional query. Response: [ListServersResponse]. */\nexport interface ListServers {\n    /** optional structured query to filter servers. */\n    query?: ServerQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n    /**\n     * Sort the results by this field.\n     * Defaults to Name. Non-Name sorts are applied in memory\n     * after querying all matching resources.\n     */\n    sort_by?: ServerSortBy;\n    /** Reverse the sort direction. */\n    sort_desc?: boolean;\n}"
    },
    {
      "name": "ListFullServers",
      "summary": "List servers matching optional query. Response: ListFullServersResponse.",
      "schema": "/** List servers matching optional query. Response: [ListFullServersResponse]. */\nexport interface ListFullServers {\n    /** optional structured query to filter servers. */\n    query?: ServerQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n}"
    },
    {
      "name": "ListTerminals",
      "summary": "List Terminals.",
      "schema": "/**\n * List Terminals.\n * Response: [ListTerminalsResponse].\n */\nexport interface ListTerminals {\n    /** Filter the Terminals returned by the Target. */\n    target?: TerminalTarget;\n    /** Return results with resource names instead of ids. */\n    use_names?: boolean;\n    /**\n     * Filter by terminal name.\n     * Returned terminals have names which contain all terms.\n     */\n    terms?: string[];\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of terminals per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n    /**\n     * Sort the results by this field.\n     * Defaults to Name.\n     */\n    sort_by?: TerminalSortBy;\n    /** Reverse the sort direction. */\n    sort_desc?: boolean;\n}"
    },
    {
      "name": "GetContainersSummary",
      "summary": "Gets a summary of data relating to all containers. Pre v2.3.0, called `GetDockerContainersSummary`",
      "schema": "/**\n * Gets a summary of data relating to all containers.\n * Response: [GetContainersSummaryResponse].\n *\n * Pre v2.3.0, called `GetDockerContainersSummary`\n */\nexport interface GetContainersSummary {\n}"
    },
    {
      "name": "ListAllContainers",
      "summary": "List all containers on the target servers. Pre v2.3.0, called `ListAllDockerContainers`",
      "schema": "/**\n * List all containers on the target servers.\n * Response: [ListAllContainersResponse].\n *\n * Pre v2.3.0, called `ListAllDockerContainers`\n */\nexport interface ListAllContainers {\n    /** Filter by server id or name. */\n    servers?: string[];\n    /** Filter servers by tag. */\n    tags?: string[];\n    /**\n     * Filter by container name.\n     * Returned containers have names which contain all terms.\n     */\n    terms?: string[];\n    /** Filter by container state. */\n    state?: ContainerStateStatusEnum[];\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of containers per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n    /**\n     * Sort the results by this field.\n     * Defaults to Name.\n     */\n    sort_by?: ContainerSortBy;\n    /** Reverse the sort direction. */\n    sort_desc?: boolean;\n}"
    },
    {
      "name": "ListContainers",
      "summary": "List all containers on the target server. Pre v2.3.0, called `ListDockerContainers`",
      "schema": "/**\n * List all containers on the target server.\n * Response: [ListContainersResponse].\n *\n * Pre v2.3.0, called `ListDockerContainers`\n */\nexport interface ListContainers {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "InspectContainer",
      "summary": "Inspect a container on the server. Response: Container. Pre v2.3.0, called `InspectDockerContainer`",
      "schema": "/**\n * Inspect a container on the server. Response: [Container].\n *\n * Pre v2.3.0, called `InspectDockerContainer`\n */\nexport interface InspectContainer {\n    /** Id or name */\n    server: string;\n    /** The container name */\n    container: string;\n}"
    },
    {
      "name": "GetResourceMatchingContainer",
      "summary": "Find the attached resource for a container. Either Deployment or Stack. Response: GetResourceMatchingContainerResponse.",
      "schema": "/** Find the attached resource for a container. Either Deployment or Stack. Response: [GetResourceMatchingContainerResponse]. */\nexport interface GetResourceMatchingContainer {\n    /** Id or name */\n    server: string;\n    /** The container name */\n    container: string;\n}"
    },
    {
      "name": "GetContainerLog",
      "summary": "Get the container log's tail, split by stdout/stderr. Note. This call will hit the underlying server directly for most up to date log.",
      "schema": "/**\n * Get the container log's tail, split by stdout/stderr.\n * Response: [Log].\n *\n * Note. This call will hit the underlying server directly for most up to date log.\n */\nexport interface GetContainerLog {\n    /** Id or name */\n    server: string;\n    /** The container name */\n    container: string;\n    /**\n     * The number of lines of the log tail to include.\n     * Default: 100.\n     * Max: 5000.\n     */\n    tail: U64;\n    /** Enable `--timestamps` */\n    timestamps?: boolean;\n}"
    },
    {
      "name": "SearchContainerLog",
      "summary": "Search the container log's tail using `grep`. All lines go to stdout. Note. This call will hit the underlying server directly for most up to date log.",
      "schema": "/**\n * Search the container log's tail using `grep`. All lines go to stdout.\n * Response: [Log].\n *\n * Note. This call will hit the underlying server directly for most up to date log.\n */\nexport interface SearchContainerLog {\n    /** Id or name */\n    server: string;\n    /** The container name */\n    container: string;\n    /** The terms to search for. */\n    terms: string[];\n    /**\n     * When searching for multiple terms, can use `AND` or `OR` combinator.\n     *\n     * - `AND`: Only include lines with **all** terms present in that line.\n     * - `OR`: Include lines that have one or more matches in the terms.\n     */\n    combinator?: SearchCombinator;\n    /** Invert the results, ie return all lines that DON'T match the terms / combinator. */\n    invert?: boolean;\n    /** Enable `--timestamps` */\n    timestamps?: boolean;\n}"
    },
    {
      "name": "ListComposeProjects",
      "summary": "List all compose projects on the target server.",
      "schema": "/**\n * List all compose projects on the target server.\n * Response: [ListComposeProjectsResponse].\n */\nexport interface ListComposeProjects {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "ListNetworks",
      "summary": "List the container networks on the server. Response: ListNetworksResponse. Pre v2.3.0, called `ListDockerNetworks`",
      "schema": "/**\n * List the container networks on the server. Response: [ListNetworksResponse].\n *\n * Pre v2.3.0, called `ListDockerNetworks`\n */\nexport interface ListNetworks {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "InspectNetwork",
      "summary": "Inspect a container network on the server. Response: InspectNetworkResponse. Pre v2.3.0, called `InspectDockerNetwork`",
      "schema": "/**\n * Inspect a container network on the server. Response: [InspectNetworkResponse].\n *\n * Pre v2.3.0, called `InspectDockerNetwork`\n */\nexport interface InspectNetwork {\n    /** Id or name */\n    server: string;\n    /** The network name */\n    network: string;\n}"
    },
    {
      "name": "ListImages",
      "summary": "List the container images locally cached on the target server. Pre v2.3.0, called `ListDockerImages`",
      "schema": "/**\n * List the container images locally cached on the target server.\n * Response: [ListImagesResponse].\n *\n * Pre v2.3.0, called `ListDockerImages`\n */\nexport interface ListImages {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "InspectImage",
      "summary": "Inspect a container image on the server. Response: Image. Pre v2.3.0, called `InspectDockerImage`",
      "schema": "/**\n * Inspect a container image on the server. Response: [Image].\n *\n * Pre v2.3.0, called `InspectDockerImage`\n */\nexport interface InspectImage {\n    /** Id or name */\n    server: string;\n    /** The image name */\n    image: string;\n}"
    },
    {
      "name": "ListImageHistory",
      "summary": "Get image history from the server. Response: ListImageHistoryResponse. Pre v2.3.0, called `ListDockerImageHistory`",
      "schema": "/**\n * Get image history from the server. Response: [ListImageHistoryResponse].\n *\n * Pre v2.3.0, called `ListDockerImageHistory`\n */\nexport interface ListImageHistory {\n    /** Id or name */\n    server: string;\n    /** The image name */\n    image: string;\n}"
    },
    {
      "name": "ListVolumes",
      "summary": "List all container volumes on the target server. Pre v2.3.0, called `ListDockerVolumes`",
      "schema": "/**\n * List all container volumes on the target server.\n * Response: [ListVolumesResponse].\n *\n * Pre v2.3.0, called `ListDockerVolumes`\n */\nexport interface ListVolumes {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "InspectVolume",
      "summary": "Inspect a container volume on the server. Response: Volume. Pre v2.3.0, called `InspectDockerVolume`",
      "schema": "/**\n * Inspect a container volume on the server. Response: [Volume].\n *\n * Pre v2.3.0, called `InspectDockerVolume`\n */\nexport interface InspectVolume {\n    /** Id or name */\n    server: string;\n    /** The volume name */\n    volume: string;\n}"
    },
    {
      "name": "GetSystemInformation",
      "summary": "Get the system information of the target server.",
      "schema": "/**\n * Get the system information of the target server.\n * Response: [SystemInformation].\n */\nexport interface GetSystemInformation {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "GetSystemStats",
      "summary": "Get the system stats on the target server. Response: SystemStats. Note. This does not hit the server directly. The stats come from an in memory cache on the core, which hits the server periodically to keep it up to date.",
      "schema": "/**\n * Get the system stats on the target server. Response: [SystemStats].\n *\n * Note. This does not hit the server directly. The stats come from an\n * in memory cache on the core, which hits the server periodically\n * to keep it up to date.\n */\nexport interface GetSystemStats {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "GetHistoricalServerStats",
      "summary": "Paginated endpoint serving historical (timeseries) server stats for graphing.",
      "schema": "/**\n * Paginated endpoint serving historical (timeseries) server stats for graphing.\n * Response: [GetHistoricalServerStatsResponse].\n */\nexport interface GetHistoricalServerStats {\n    /** Id or name */\n    server: string;\n    /** The granularity of the data. */\n    granularity: Timelength;\n    /**\n     * Page of historical data. Default is 0, which is the most recent data.\n     * Use with the `next_page` field of the response.\n     */\n    page?: number;\n}"
    },
    {
      "name": "ListSystemProcesses",
      "summary": "List the processes running on the target server. Note. This does not hit the server directly. The procedures come from an in memory cache on the core, which hits the server periodically to keep it up to date.",
      "schema": "/**\n * List the processes running on the target server.\n * Response: [ListSystemProcessesResponse].\n *\n * Note. This does not hit the server directly. The procedures come from an\n * in memory cache on the core, which hits the server periodically\n * to keep it up to date.\n */\nexport interface ListSystemProcesses {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "GetStacksSummary",
      "summary": "Gets a summary of data relating to all syncs.",
      "schema": "/**\n * Gets a summary of data relating to all syncs.\n * Response: [GetStacksSummaryResponse].\n */\nexport interface GetStacksSummary {\n}"
    },
    {
      "name": "GetStack",
      "summary": "Get a specific stack. Response: Stack.",
      "schema": "/** Get a specific stack. Response: [Stack]. */\nexport interface GetStack {\n    /** Id or name */\n    stack: string;\n}"
    },
    {
      "name": "GetStackActionState",
      "summary": "Get current action state for the stack. Response: StackActionState.",
      "schema": "/** Get current action state for the stack. Response: [StackActionState]. */\nexport interface GetStackActionState {\n    /** Id or name */\n    stack: string;\n}"
    },
    {
      "name": "GetStackLog",
      "summary": "Get a stack's logs. Filter down included services. Response: GetStackLogResponse. Note. This call will hit the underlying server directly for most up to date log.",
      "schema": "/**\n * Get a stack's logs. Filter down included services. Response: [GetStackLogResponse].\n *\n * Note. This call will hit the underlying server directly for most up to date log.\n */\nexport interface GetStackLog {\n    /** Id or name */\n    stack: string;\n    /**\n     * Filter the logs to only ones from specific services.\n     * If empty, will include logs from all services.\n     */\n    services: string[];\n    /**\n     * The number of lines of the log tail to include.\n     * Default: 100.\n     * Max: 5000.\n     */\n    tail: U64;\n    /** Enable `--timestamps` */\n    timestamps?: boolean;\n}"
    },
    {
      "name": "SearchStackLog",
      "summary": "Search the stack log's tail using `grep`. All lines go to stdout. Note. This call will hit the underlying server directly for most up to date log.",
      "schema": "/**\n * Search the stack log's tail using `grep`. All lines go to stdout.\n * Response: [SearchStackLogResponse].\n *\n * Note. This call will hit the underlying server directly for most up to date log.\n */\nexport interface SearchStackLog {\n    /** Id or name */\n    stack: string;\n    /**\n     * Filter the logs to only ones from specific services.\n     * If empty, will include logs from all services.\n     */\n    services: string[];\n    /** The terms to search for. */\n    terms: string[];\n    /**\n     * When searching for multiple terms, can use `AND` or `OR` combinator.\n     *\n     * - `AND`: Only include lines with **all** terms present in that line.\n     * - `OR`: Include lines that have one or more matches in the terms.\n     */\n    combinator?: SearchCombinator;\n    /** Invert the results, ie return all lines that DON'T match the terms / combinator. */\n    invert?: boolean;\n    /** Enable `--timestamps` */\n    timestamps?: boolean;\n}"
    },
    {
      "name": "InspectStackContainer",
      "summary": "Inspect a docker container associated with a Stack.",
      "schema": "/**\n * Inspect a docker container associated with a Stack.\n * Response: [Container].\n */\nexport interface InspectStackContainer {\n    /** Id or name */\n    stack: string;\n    /** The service name to inspect */\n    service: string;\n}"
    },
    {
      "name": "InspectStackSwarmService",
      "summary": "Inspect a swarm service associated with a Stack.",
      "schema": "/**\n * Inspect a swarm service associated with a Stack.\n * Response: [SwarmService].\n */\nexport interface InspectStackSwarmService {\n    /** Id or name */\n    stack: string;\n    /** The service name to inspect */\n    service: string;\n}"
    },
    {
      "name": "ListStacks",
      "summary": "List stacks matching optional query. Response: ListStacksResponse.",
      "schema": "/** List stacks matching optional query. Response: [ListStacksResponse]. */\nexport interface ListStacks {\n    /** optional structured query to filter stacks. */\n    query?: StackQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n    /**\n     * Sort the results by this field.\n     * Defaults to Name. Non-Name sorts are applied in memory\n     * after querying all matching resources.\n     */\n    sort_by?: StackSortBy;\n    /** Reverse the sort direction. */\n    sort_desc?: boolean;\n}"
    },
    {
      "name": "ListFullStacks",
      "summary": "List stacks matching optional query. Response: ListFullStacksResponse.",
      "schema": "/** List stacks matching optional query. Response: [ListFullStacksResponse]. */\nexport interface ListFullStacks {\n    /** optional structured query to filter stacks. */\n    query?: StackQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n}"
    },
    {
      "name": "ListStackServices",
      "summary": "Lists a specific stacks services (the containers). Response: ListStackServicesResponse.",
      "schema": "/** Lists a specific stacks services (the containers). Response: [ListStackServicesResponse]. */\nexport interface ListStackServices {\n    /** Id or name */\n    stack: string;\n}"
    },
    {
      "name": "ListAllStackServices",
      "summary": "List all stack services part of the target stacks.",
      "schema": "/**\n * List all stack services part of the target stacks.\n * Response: [ListStackServicesResponse].\n */\nexport interface ListAllStackServices {\n    /** Filter by stack name. */\n    stacks?: string[];\n    /** Filter stacks by tag. */\n    tags?: string[];\n    /**\n     * Filter by service name.\n     * Returned services have names which contain all terms.\n     */\n    terms?: string[];\n    /** Filter by service state. */\n    state?: StackServiceState[];\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of services per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n}"
    },
    {
      "name": "ListCommonStackExtraArgs",
      "summary": "Gets a list of existing values used as extra args across other stacks. Useful to offer suggestions. Response: ListCommonStackExtraArgsResponse",
      "schema": "/**\n * Gets a list of existing values used as extra args across other stacks.\n * Useful to offer suggestions. Response: [ListCommonStackExtraArgsResponse]\n */\nexport interface ListCommonStackExtraArgs {\n    /** optional structured query to filter stacks. */\n    query?: StackQuery;\n}"
    },
    {
      "name": "ListCommonStackBuildExtraArgs",
      "summary": "Gets a list of existing values used as build extra args across other stacks. Useful to offer suggestions. Response: ListCommonStackBuildExtraArgsResponse",
      "schema": "/**\n * Gets a list of existing values used as build extra args across other stacks.\n * Useful to offer suggestions. Response: [ListCommonStackBuildExtraArgsResponse]\n */\nexport interface ListCommonStackBuildExtraArgs {\n    /** optional structured query to filter stacks. */\n    query?: StackQuery;\n}"
    },
    {
      "name": "GetDeploymentsSummary",
      "summary": "Gets a summary of data relating to all deployments.",
      "schema": "/**\n * Gets a summary of data relating to all deployments.\n * Response: [GetDeploymentsSummaryResponse].\n */\nexport interface GetDeploymentsSummary {\n}"
    },
    {
      "name": "GetDeployment",
      "summary": "Get a specific deployment by name or id. Response: Deployment.",
      "schema": "/** Get a specific deployment by name or id. Response: [Deployment]. */\nexport interface GetDeployment {\n    /** Id or name */\n    deployment: string;\n}"
    },
    {
      "name": "GetDeploymentContainer",
      "summary": "Get the container, including image / status, of the target deployment. Note. This does not hit the server directly. The status comes from an in memory cache on the core, which hits the server periodically to keep it up to date.",
      "schema": "/**\n * Get the container, including image / status, of the target deployment.\n * Response: [GetDeploymentContainerResponse].\n *\n * Note. This does not hit the server directly. The status comes from an\n * in memory cache on the core, which hits the server periodically\n * to keep it up to date.\n */\nexport interface GetDeploymentContainer {\n    /** Id or name */\n    deployment: string;\n}"
    },
    {
      "name": "GetDeploymentActionState",
      "summary": "Get current action state for the deployment.",
      "schema": "/**\n * Get current action state for the deployment.\n * Response: [DeploymentActionState].\n */\nexport interface GetDeploymentActionState {\n    /** Id or name */\n    deployment: string;\n}"
    },
    {
      "name": "GetDeploymentStats",
      "summary": "Get the deployment container's stats using `docker stats`. Note. This call will hit the underlying server directly for most up to date stats.",
      "schema": "/**\n * Get the deployment container's stats using `docker stats`.\n * Response: [GetDeploymentStatsResponse].\n *\n * Note. This call will hit the underlying server directly for most up to date stats.\n */\nexport interface GetDeploymentStats {\n    /** Id or name */\n    deployment: string;\n}"
    },
    {
      "name": "GetDeploymentLog",
      "summary": "Get the deployment log's tail, split by stdout/stderr. Note. This call will hit the underlying server directly for most up to date log.",
      "schema": "/**\n * Get the deployment log's tail, split by stdout/stderr.\n * Response: [Log].\n *\n * Note. This call will hit the underlying server directly for most up to date log.\n */\nexport interface GetDeploymentLog {\n    /** Id or name */\n    deployment: string;\n    /**\n     * The number of lines of the log tail to include.\n     * Default: 100.\n     * Max: 5000.\n     */\n    tail: U64;\n    /** Enable `--timestamps` */\n    timestamps?: boolean;\n}"
    },
    {
      "name": "SearchDeploymentLog",
      "summary": "Search the deployment log's tail using `grep`. All lines go to stdout. Note. This call will hit the underlying server directly for most up to date log.",
      "schema": "/**\n * Search the deployment log's tail using `grep`. All lines go to stdout.\n * Response: [Log].\n *\n * Note. This call will hit the underlying server directly for most up to date log.\n */\nexport interface SearchDeploymentLog {\n    /** Id or name */\n    deployment: string;\n    /** The terms to search for. */\n    terms: string[];\n    /**\n     * When searching for multiple terms, can use `AND` or `OR` combinator.\n     *\n     * - `AND`: Only include lines with **all** terms present in that line.\n     * - `OR`: Include lines that have one or more matches in the terms.\n     */\n    combinator?: SearchCombinator;\n    /** Invert the results, ie return all lines that DON'T match the terms / combinator. */\n    invert?: boolean;\n    /** Enable `--timestamps` */\n    timestamps?: boolean;\n}"
    },
    {
      "name": "InspectDeploymentContainer",
      "summary": "Inspect the docker container associated with the Deployment.",
      "schema": "/**\n * Inspect the docker container associated with the Deployment.\n * Response: [Container].\n */\nexport interface InspectDeploymentContainer {\n    /** Id or name */\n    deployment: string;\n}"
    },
    {
      "name": "InspectDeploymentSwarmService",
      "summary": "Inspect the swarm service associated with the Deployment.",
      "schema": "/**\n * Inspect the swarm service associated with the Deployment.\n * Response: [SwarmService].\n */\nexport interface InspectDeploymentSwarmService {\n    /** Id or name */\n    deployment: string;\n}"
    },
    {
      "name": "ListDeployments",
      "summary": "List deployments matching optional query.",
      "schema": "/**\n * List deployments matching optional query.\n * Response: [ListDeploymentsResponse].\n */\nexport interface ListDeployments {\n    /** optional structured query to filter deployments. */\n    query?: DeploymentQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n    /**\n     * Sort the results by this field.\n     * Defaults to Name. Non-Name sorts are applied in memory\n     * after querying all matching resources.\n     */\n    sort_by?: DeploymentSortBy;\n    /** Reverse the sort direction. */\n    sort_desc?: boolean;\n}"
    },
    {
      "name": "ListFullDeployments",
      "summary": "List deployments matching optional query.",
      "schema": "/**\n * List deployments matching optional query.\n * Response: [ListFullDeploymentsResponse].\n */\nexport interface ListFullDeployments {\n    /** optional structured query to filter deployments. */\n    query?: DeploymentQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n}"
    },
    {
      "name": "ListCommonDeploymentExtraArgs",
      "summary": "Gets a list of existing values used as extra args across other deployments. Useful to offer suggestions. Response: ListCommonDeploymentExtraArgsResponse",
      "schema": "/**\n * Gets a list of existing values used as extra args across other deployments.\n * Useful to offer suggestions. Response: [ListCommonDeploymentExtraArgsResponse]\n */\nexport interface ListCommonDeploymentExtraArgs {\n    /** optional structured query to filter deployments. */\n    query?: DeploymentQuery;\n}"
    },
    {
      "name": "GetBuildsSummary",
      "summary": "Gets a summary of data relating to all builds.",
      "schema": "/**\n * Gets a summary of data relating to all builds.\n * Response: [GetBuildsSummaryResponse].\n */\nexport interface GetBuildsSummary {\n}"
    },
    {
      "name": "GetBuild",
      "summary": "Get a specific build. Response: Build.",
      "schema": "/** Get a specific build. Response: [Build]. */\nexport interface GetBuild {\n    /** Id or name */\n    build: string;\n}"
    },
    {
      "name": "GetBuildActionState",
      "summary": "Get current action state for the build. Response: BuildActionState.",
      "schema": "/** Get current action state for the build. Response: [BuildActionState]. */\nexport interface GetBuildActionState {\n    /** Id or name */\n    build: string;\n}"
    },
    {
      "name": "GetBuildMonthlyStats",
      "summary": "Gets summary and timeseries breakdown of the last months build count / time for charting. Note. This method is paginated. One page is 30 days of data. Query for older pages by incrementing the page, starting at 0.",
      "schema": "/**\n * Gets summary and timeseries breakdown of the last months build count / time for charting.\n * Response: [GetBuildMonthlyStatsResponse].\n *\n * Note. This method is paginated. One page is 30 days of data.\n * Query for older pages by incrementing the page, starting at 0.\n */\nexport interface GetBuildMonthlyStats {\n    /**\n     * Query for older data by incrementing the page.\n     * `page: 0` is the default, and will return the most recent data.\n     */\n    page?: number;\n}"
    },
    {
      "name": "ListBuilds",
      "summary": "List builds matching optional query. Response: ListBuildsResponse.",
      "schema": "/** List builds matching optional query. Response: [ListBuildsResponse]. */\nexport interface ListBuilds {\n    /** optional structured query to filter builds. */\n    query?: BuildQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n    /**\n     * Sort the results by this field.\n     * Defaults to Name. Non-Name sorts are applied in memory\n     * after querying all matching resources.\n     */\n    sort_by?: BuildSortBy;\n    /** Reverse the sort direction. */\n    sort_desc?: boolean;\n}"
    },
    {
      "name": "ListFullBuilds",
      "summary": "List builds matching optional query. Response: ListFullBuildsResponse.",
      "schema": "/** List builds matching optional query. Response: [ListFullBuildsResponse]. */\nexport interface ListFullBuilds {\n    /** optional structured query to filter builds. */\n    query?: BuildQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n}"
    },
    {
      "name": "ListBuildVersions",
      "summary": "Retrieve versions of the build that were built in the past and available for deployment, sorted by most recent first.",
      "schema": "/**\n * Retrieve versions of the build that were built in the past and available for deployment,\n * sorted by most recent first.\n * Response: [ListBuildVersionsResponse].\n */\nexport interface ListBuildVersions {\n    /** Id or name */\n    build: string;\n    /** Filter to only include versions matching this major version. */\n    major?: number;\n    /** Filter to only include versions matching this minor version. */\n    minor?: number;\n    /** Filter to only include versions matching this patch version. */\n    patch?: number;\n    /** Limit the number of included results. Default is no limit. */\n    limit?: I64;\n}"
    },
    {
      "name": "ListCommonBuildExtraArgs",
      "summary": "Gets a list of existing values used as extra args across other builds. Useful to offer suggestions. Response: ListCommonBuildExtraArgsResponse",
      "schema": "/**\n * Gets a list of existing values used as extra args across other builds.\n * Useful to offer suggestions. Response: [ListCommonBuildExtraArgsResponse]\n */\nexport interface ListCommonBuildExtraArgs {\n    /** optional structured query to filter builds. */\n    query?: BuildQuery;\n}"
    },
    {
      "name": "GetReposSummary",
      "summary": "Gets a summary of data relating to all repos.",
      "schema": "/**\n * Gets a summary of data relating to all repos.\n * Response: [GetReposSummaryResponse].\n */\nexport interface GetReposSummary {\n}"
    },
    {
      "name": "GetRepo",
      "summary": "Get a specific repo. Response: Repo.",
      "schema": "/** Get a specific repo. Response: [Repo]. */\nexport interface GetRepo {\n    /** Id or name */\n    repo: string;\n}"
    },
    {
      "name": "GetRepoActionState",
      "summary": "Get current action state for the repo. Response: RepoActionState.",
      "schema": "/** Get current action state for the repo. Response: [RepoActionState]. */\nexport interface GetRepoActionState {\n    /** Id or name */\n    repo: string;\n}"
    },
    {
      "name": "ListRepos",
      "summary": "List repos matching optional query. Response: ListReposResponse.",
      "schema": "/** List repos matching optional query. Response: [ListReposResponse]. */\nexport interface ListRepos {\n    /** optional structured query to filter repos. */\n    query?: RepoQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n    /**\n     * Sort the results by this field.\n     * Defaults to Name. Non-Name sorts are applied in memory\n     * after querying all matching resources.\n     */\n    sort_by?: RepoSortBy;\n    /** Reverse the sort direction. */\n    sort_desc?: boolean;\n}"
    },
    {
      "name": "ListFullRepos",
      "summary": "List repos matching optional query. Response: ListFullReposResponse.",
      "schema": "/** List repos matching optional query. Response: [ListFullReposResponse]. */\nexport interface ListFullRepos {\n    /** optional structured query to filter repos. */\n    query?: RepoQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n}"
    },
    {
      "name": "GetProceduresSummary",
      "summary": "Gets a summary of data relating to all procedures.",
      "schema": "/**\n * Gets a summary of data relating to all procedures.\n * Response: [GetProceduresSummaryResponse].\n */\nexport interface GetProceduresSummary {\n}"
    },
    {
      "name": "GetProcedure",
      "summary": "Get a specific procedure. Response: Procedure.",
      "schema": "/** Get a specific procedure. Response: [Procedure]. */\nexport interface GetProcedure {\n    /** Id or name */\n    procedure: string;\n}"
    },
    {
      "name": "GetProcedureActionState",
      "summary": "Get current action state for the procedure. Response: ProcedureActionState.",
      "schema": "/** Get current action state for the procedure. Response: [ProcedureActionState]. */\nexport interface GetProcedureActionState {\n    /** Id or name */\n    procedure: string;\n}"
    },
    {
      "name": "ListProcedures",
      "summary": "List procedures matching optional query. Response: ListProceduresResponse.",
      "schema": "/** List procedures matching optional query. Response: [ListProceduresResponse]. */\nexport interface ListProcedures {\n    /** optional structured query to filter procedures. */\n    query?: ProcedureQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n    /**\n     * Sort the results by this field.\n     * Defaults to Name. Non-Name sorts are applied in memory\n     * after querying all matching resources.\n     */\n    sort_by?: ProcedureSortBy;\n    /** Reverse the sort direction. */\n    sort_desc?: boolean;\n}"
    },
    {
      "name": "ListFullProcedures",
      "summary": "List procedures matching optional query. Response: ListFullProceduresResponse.",
      "schema": "/** List procedures matching optional query. Response: [ListFullProceduresResponse]. */\nexport interface ListFullProcedures {\n    /** optional structured query to filter procedures. */\n    query?: ProcedureQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n}"
    },
    {
      "name": "GetActionsSummary",
      "summary": "Gets a summary of data relating to all actions.",
      "schema": "/**\n * Gets a summary of data relating to all actions.\n * Response: [GetActionsSummaryResponse].\n */\nexport interface GetActionsSummary {\n}"
    },
    {
      "name": "GetAction",
      "summary": "Get a specific action. Response: Action.",
      "schema": "/** Get a specific action. Response: [Action]. */\nexport interface GetAction {\n    /** Id or name */\n    action: string;\n}"
    },
    {
      "name": "GetActionActionState",
      "summary": "Get current action state for the action. Response: ActionActionState.",
      "schema": "/** Get current action state for the action. Response: [ActionActionState]. */\nexport interface GetActionActionState {\n    /** Id or name */\n    action: string;\n}"
    },
    {
      "name": "ListActions",
      "summary": "List actions matching optional query. Response: ListActionsResponse.",
      "schema": "/** List actions matching optional query. Response: [ListActionsResponse]. */\nexport interface ListActions {\n    /** optional structured query to filter actions. */\n    query?: ActionQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n    /**\n     * Sort the results by this field.\n     * Defaults to Name. Non-Name sorts are applied in memory\n     * after querying all matching resources.\n     */\n    sort_by?: ActionSortBy;\n    /** Reverse the sort direction. */\n    sort_desc?: boolean;\n}"
    },
    {
      "name": "ListFullActions",
      "summary": "List actions matching optional query. Response: ListFullActionsResponse.",
      "schema": "/** List actions matching optional query. Response: [ListFullActionsResponse]. */\nexport interface ListFullActions {\n    /** optional structured query to filter actions. */\n    query?: ActionQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n}"
    },
    {
      "name": "ListSchedules",
      "summary": "List configured schedules.",
      "schema": "/**\n * List configured schedules.\n * Response: [ListSchedulesResponse].\n */\nexport interface ListSchedules {\n    /** Pass Vec of tag ids or tag names */\n    tags?: string[];\n    /** 'All' or 'Any' */\n    tag_behavior?: TagQueryBehavior;\n    /**\n     * Filter by target name.\n     * Returned schedules have names which contain all terms.\n     */\n    terms?: string[];\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of schedules per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n    /**\n     * Sort the results by this field.\n     * Defaults to Name.\n     */\n    sort_by?: ScheduleSortBy;\n    /** Reverse the sort direction. */\n    sort_desc?: boolean;\n}"
    },
    {
      "name": "GetResourceSyncsSummary",
      "summary": "Gets a summary of data relating to all syncs.",
      "schema": "/**\n * Gets a summary of data relating to all syncs.\n * Response: [GetResourceSyncsSummaryResponse].\n */\nexport interface GetResourceSyncsSummary {\n}"
    },
    {
      "name": "GetResourceSync",
      "summary": "Get a specific sync. Response: ResourceSync.",
      "schema": "/** Get a specific sync. Response: [ResourceSync]. */\nexport interface GetResourceSync {\n    /** Id or name */\n    sync: string;\n}"
    },
    {
      "name": "GetResourceSyncActionState",
      "summary": "Get current action state for the sync. Response: ResourceSyncActionState.",
      "schema": "/** Get current action state for the sync. Response: [ResourceSyncActionState]. */\nexport interface GetResourceSyncActionState {\n    /** Id or name */\n    sync: string;\n}"
    },
    {
      "name": "ListResourceSyncs",
      "summary": "List syncs matching optional query. Response: ListResourceSyncsResponse.",
      "schema": "/** List syncs matching optional query. Response: [ListResourceSyncsResponse]. */\nexport interface ListResourceSyncs {\n    /** optional structured query to filter syncs. */\n    query?: ResourceSyncQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n    /**\n     * Sort the results by this field.\n     * Defaults to Name. Non-Name sorts are applied in memory\n     * after querying all matching resources.\n     */\n    sort_by?: ResourceSyncSortBy;\n    /** Reverse the sort direction. */\n    sort_desc?: boolean;\n}"
    },
    {
      "name": "ListFullResourceSyncs",
      "summary": "List syncs matching optional query. Response: ListFullResourceSyncsResponse.",
      "schema": "/** List syncs matching optional query. Response: [ListFullResourceSyncsResponse]. */\nexport interface ListFullResourceSyncs {\n    /** optional structured query to filter syncs. */\n    query?: ResourceSyncQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n}"
    },
    {
      "name": "GetBuildersSummary",
      "summary": "Gets a summary of data relating to all builders.",
      "schema": "/**\n * Gets a summary of data relating to all builders.\n * Response: [GetBuildersSummaryResponse].\n */\nexport interface GetBuildersSummary {\n}"
    },
    {
      "name": "GetBuilder",
      "summary": "Get a specific builder by id or name. Response: Builder.",
      "schema": "/** Get a specific builder by id or name. Response: [Builder]. */\nexport interface GetBuilder {\n    /** Id or name */\n    builder: string;\n}"
    },
    {
      "name": "ListBuilders",
      "summary": "List builders matching structured query. Response: ListBuildersResponse.",
      "schema": "/** List builders matching structured query. Response: [ListBuildersResponse]. */\nexport interface ListBuilders {\n    query?: BuilderQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n    /**\n     * Sort the results by this field.\n     * Defaults to Name. Non-Name sorts are applied in memory\n     * after querying all matching resources.\n     */\n    sort_by?: BuilderSortBy;\n    /** Reverse the sort direction. */\n    sort_desc?: boolean;\n}"
    },
    {
      "name": "ListFullBuilders",
      "summary": "List builders matching structured query. Response: ListFullBuildersResponse.",
      "schema": "/** List builders matching structured query. Response: [ListFullBuildersResponse]. */\nexport interface ListFullBuilders {\n    query?: BuilderQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n}"
    },
    {
      "name": "GetAlertersSummary",
      "summary": "Gets a summary of data relating to all alerters.",
      "schema": "/**\n * Gets a summary of data relating to all alerters.\n * Response: [GetAlertersSummaryResponse].\n */\nexport interface GetAlertersSummary {\n}"
    },
    {
      "name": "GetAlerter",
      "summary": "Get a specific alerter. Response: Alerter.",
      "schema": "/** Get a specific alerter. Response: [Alerter]. */\nexport interface GetAlerter {\n    /** Id or name */\n    alerter: string;\n}"
    },
    {
      "name": "ListAlerters",
      "summary": "List alerters matching optional query. Response: ListAlertersResponse.",
      "schema": "/** List alerters matching optional query. Response: [ListAlertersResponse]. */\nexport interface ListAlerters {\n    /** Structured query to filter alerters. */\n    query?: AlerterQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n    /**\n     * Sort the results by this field.\n     * Defaults to Name. Non-Name sorts are applied in memory\n     * after querying all matching resources.\n     */\n    sort_by?: AlerterSortBy;\n    /** Reverse the sort direction. */\n    sort_desc?: boolean;\n}"
    },
    {
      "name": "ListFullAlerters",
      "summary": "List full alerters matching optional query. Response: ListFullAlertersResponse.",
      "schema": "/** List full alerters matching optional query. Response: [ListFullAlertersResponse]. */\nexport interface ListFullAlerters {\n    /** Structured query to filter alerters. */\n    query?: AlerterQuery;\n    /**\n     * Retrieve more results by incrementing the page.\n     * `page: 0` is default.\n     */\n    page?: U64;\n    /**\n     * Set the limit for number of resources per-page.\n     * If not provided, uses the Core config\n     * `default_pagination_limit` (default: 30).\n     *\n     * Passing `limit: 0` returns all results (unlimited).\n     *\n     * Note: the page logic relies on this being consistent\n     * across queries for more pages.\n     */\n    limit?: U64;\n}"
    },
    {
      "name": "ExportAllResourcesToToml",
      "summary": "Get sync toml for all resources which the user has permissions to view.",
      "schema": "/**\n * Get sync toml for all resources which the user has permissions to view.\n * Response: [TomlResponse].\n */\nexport interface ExportAllResourcesToToml {\n    /**\n     * Whether to include any resources (servers, stacks, etc.)\n     * in the exported contents.\n     * Default: `true`\n     */\n    include_resources: boolean;\n    /**\n     * Filter resources by tag.\n     * Accepts tag name or id. Empty array will not filter by tag.\n     */\n    tags?: string[];\n    /**\n     * Whether to include variables in the exported contents.\n     * Default: false\n     */\n    include_variables?: boolean;\n    /**\n     * Whether to include user groups in the exported contents.\n     * Default: false\n     */\n    include_user_groups?: boolean;\n    /**\n     * Pass an existing [ResourcesToml] to preserve\n     * the meta configuration.\n     */\n    existing?: ResourcesToml;\n}"
    },
    {
      "name": "ExportResourcesToToml",
      "summary": "Get sync toml for specific resources, variables, and user groups.",
      "schema": "/**\n * Get sync toml for specific resources, variables, and user groups.\n * Response: [TomlResponse].\n */\nexport interface ExportResourcesToToml {\n    /** The targets to include in the export. */\n    targets?: ResourceTarget[];\n    /** The user group names or ids to include in the export. */\n    user_groups?: string[];\n    /** Whether to include variables */\n    include_variables?: boolean;\n    /**\n     * Pass an existing [ResourcesToml] to preserve\n     * the meta configuration.\n     */\n    existing?: ResourcesToml;\n}"
    },
    {
      "name": "GetTag",
      "summary": "Get data for a specific tag. Response Tag.",
      "schema": "/** Get data for a specific tag. Response [Tag]. */\nexport interface GetTag {\n    /** Id or name */\n    tag: string;\n}"
    },
    {
      "name": "ListTags",
      "summary": "List data for tags matching optional mongo query.",
      "schema": "/**\n * List data for tags matching optional mongo query.\n * Response: [ListTagsResponse].\n */\nexport interface ListTags {\n    query?: MongoDocument;\n}"
    },
    {
      "name": "GetUsername",
      "summary": "Gets the username of a specific user.",
      "schema": "/**\n * Gets the username of a specific user.\n * Response: [GetUsernameResponse]\n */\nexport interface GetUsername {\n    /** The id of the user. */\n    user_id: string;\n}"
    },
    {
      "name": "GetPermission",
      "summary": "Gets the calling user's permission level on a specific resource. Factors in any UserGroup's permissions they may be a part of.",
      "schema": "/**\n * Gets the calling user's permission level on a specific resource.\n * Factors in any UserGroup's permissions they may be a part of.\n * Response: [PermissionLevel]\n */\nexport interface GetPermission {\n    /** The target to get user permission on. */\n    target: ResourceTarget;\n}"
    },
    {
      "name": "FindUser",
      "summary": "**Admin only.** Find a user.",
      "schema": "/**\n * **Admin only.**\n * Find a user.\n * Response: [FindUserResponse]\n */\nexport interface FindUser {\n    /** Id or username */\n    user: string;\n}"
    },
    {
      "name": "ListUsers",
      "summary": "**Admin only.** Gets list of Komodo users.",
      "schema": "/**\n * **Admin only.**\n * Gets list of Komodo users.\n * Response: [ListUsersResponse]\n */\nexport interface ListUsers {\n    /**\n     * Service user query options:\n     * - Include (default)\n     * - Exclude\n     * - Only\n     */\n    service_users?: ServiceUserQueryBehavior;\n}"
    },
    {
      "name": "ListApiKeys",
      "summary": "Gets list of api keys for the calling user.",
      "schema": "/**\n * Gets list of api keys for the calling user.\n * Response: [ListApiKeysResponse]\n */\nexport interface ListApiKeys {\n}"
    },
    {
      "name": "ListApiKeysForServiceUser",
      "summary": "**Admin only.** Gets list of api keys for the user. Will still fail if you call for a user_id that isn't a service user.",
      "schema": "/**\n * **Admin only.**\n * Gets list of api keys for the user.\n * Will still fail if you call for a user_id that isn't a service user.\n * Response: [ListApiKeysForServiceUserResponse]\n */\nexport interface ListApiKeysForServiceUser {\n    /** Id or username */\n    user: string;\n}"
    },
    {
      "name": "ListPermissions",
      "summary": "List permissions for the calling user. Does not include any permissions on UserGroups they may be a part of.",
      "schema": "/**\n * List permissions for the calling user.\n * Does not include any permissions on UserGroups they may be a part of.\n * Response: [ListPermissionsResponse]\n */\nexport interface ListPermissions {\n}"
    },
    {
      "name": "ListUserTargetPermissions",
      "summary": "List permissions for a specific user. **Admin only**.",
      "schema": "/**\n * List permissions for a specific user. **Admin only**.\n * Response: [ListUserTargetPermissionsResponse]\n */\nexport interface ListUserTargetPermissions {\n    /** Specify either a user or a user group. */\n    user_target: UserTarget;\n}"
    },
    {
      "name": "GetUserGroup",
      "summary": "Get a specific user group by name or id.",
      "schema": "/**\n * Get a specific user group by name or id.\n * Response: [UserGroup].\n */\nexport interface GetUserGroup {\n    /** Name or Id */\n    user_group: string;\n}"
    },
    {
      "name": "ListUserGroups",
      "summary": "List all user groups which user can see. Response: ListUserGroupsResponse. Admins can see all user groups, and users can see user groups to which they belong.",
      "schema": "/**\n * List all user groups which user can see. Response: [ListUserGroupsResponse].\n *\n * Admins can see all user groups,\n * and users can see user groups to which they belong.\n */\nexport interface ListUserGroups {\n}"
    },
    {
      "name": "GetUpdate",
      "summary": "Get all data for the target update.",
      "schema": "/**\n * Get all data for the target update.\n * Response: [Update].\n */\nexport interface GetUpdate {\n    /** The update id. */\n    id: string;\n}"
    },
    {
      "name": "ListUpdates",
      "summary": "Paginated endpoint for updates matching optional query. More recent updates will be returned first.",
      "schema": "/**\n * Paginated endpoint for updates matching optional query.\n * More recent updates will be returned first.\n */\nexport interface ListUpdates {\n    /** An optional mongo query to filter the updates. */\n    query?: MongoDocument;\n    /**\n     * Page of updates. Default is 0, which is the most recent data.\n     * Use with the `next_page` field of the response.\n     */\n    page?: number;\n}"
    },
    {
      "name": "ListAlerts",
      "summary": "Get a paginated list of alerts sorted by timestamp descending.",
      "schema": "/**\n * Get a paginated list of alerts sorted by timestamp descending.\n * Response: [ListAlertsResponse].\n */\nexport interface ListAlerts {\n    /**\n     * Pass a custom mongo query to filter the alerts.\n     *\n     * ## Example JSON\n     * ```json\n     * {\n     * \"resolved\": \"false\",\n     * \"level\": \"CRITICAL\",\n     * \"$or\": [\n     * {\n     * \"target\": {\n     * \"type\": \"Server\",\n     * \"id\": \"6608bf89cb2a12b257ab6c09\"\n     * }\n     * },\n     * {\n     * \"target\": {\n     * \"type\": \"Server\",\n     * \"id\": \"660a5f60b74f90d5dae45fa3\"\n     * }\n     * }\n     * ]\n     * }\n     * ```\n     * This will filter to only include open alerts that have CRITICAL level on those two servers.\n     */\n    query?: MongoDocument;\n    /**\n     * Retrieve older results by incrementing the page.\n     * `page: 0` is default, and returns the most recent results.\n     */\n    page?: U64;\n}"
    },
    {
      "name": "GetAlert",
      "summary": "Get an alert: Response: Alert.",
      "schema": "/** Get an alert: Response: [Alert]. */\nexport interface GetAlert {\n    id: string;\n}"
    },
    {
      "name": "GetVariable",
      "summary": "List all available global variables. Note. For non admin users making this call, secret variables will have their values obscured.",
      "schema": "/**\n * List all available global variables.\n * Response: [Variable]\n *\n * Note. For non admin users making this call,\n * secret variables will have their values obscured.\n */\nexport interface GetVariable {\n    /** The name of the variable to get. */\n    name: string;\n}"
    },
    {
      "name": "ListVariables",
      "summary": "List all available global variables. Note. For non admin users making this call, secret variables will have their values obscured.",
      "schema": "/**\n * List all available global variables.\n * Response: [ListVariablesResponse]\n *\n * Note. For non admin users making this call,\n * secret variables will have their values obscured.\n */\nexport interface ListVariables {\n}"
    },
    {
      "name": "GetGitProviderAccount",
      "summary": "Get a specific git provider account.",
      "schema": "/**\n * Get a specific git provider account.\n * Response: [GetGitProviderAccountResponse].\n */\nexport interface GetGitProviderAccount {\n    id: string;\n}"
    },
    {
      "name": "ListGitProviderAccounts",
      "summary": "List git provider accounts matching optional query.",
      "schema": "/**\n * List git provider accounts matching optional query.\n * Response: [ListGitProviderAccountsResponse].\n */\nexport interface ListGitProviderAccounts {\n    /** Optionally filter by accounts with a specific domain. */\n    domain?: string;\n    /** Optionally filter by accounts with a specific username. */\n    username?: string;\n}"
    },
    {
      "name": "GetImageRegistryAccount",
      "summary": "Get a specific image registry account. Pre v2.3.0, called `GetDockerRegistryAccount`",
      "schema": "/**\n * Get a specific image registry account.\n * Response: [GetImageRegistryAccountResponse].\n *\n * Pre v2.3.0, called `GetDockerRegistryAccount`\n */\nexport interface GetImageRegistryAccount {\n    id: string;\n}"
    },
    {
      "name": "ListImageRegistryAccounts",
      "summary": "List image registry accounts matching optional query. Pre v2.3.0, called `ListDockerRegistryAccounts`",
      "schema": "/**\n * List image registry accounts matching optional query.\n * Response: [ListImageRegistryAccountsResponse].\n *\n * Pre v2.3.0, called `ListDockerRegistryAccounts`\n */\nexport interface ListImageRegistryAccounts {\n    /** Optionally filter by accounts with a specific domain. */\n    domain?: string;\n    /** Optionally filter by accounts with a specific username. */\n    username?: string;\n}"
    },
    {
      "name": "ListOnboardingKeys",
      "summary": "**Admin only.** Gets list of onboarding keys.",
      "schema": "/**\n * **Admin only.** Gets list of onboarding keys.\n * Response: [ListOnboardingKeysResponse]\n */\nexport interface ListOnboardingKeys {\n}"
    }
  ],
  "write": [
    {
      "name": "UpdateResourceMeta",
      "summary": "Update a resources common meta fields. - description - template - tags",
      "schema": "/**\n * Update a resources common meta fields.\n * - description\n * - template\n * - tags\n * Response: [NoData].\n */\nexport interface UpdateResourceMeta {\n    /** The target resource to set update meta. */\n    target: ResourceTarget;\n    /**\n     * New description to set,\n     * or null for no update\n     */\n    description?: string;\n    /**\n     * New template value (true or false),\n     * or null for no update\n     */\n    template?: boolean;\n    /**\n     * The exact tags to set,\n     * or null for no update\n     */\n    tags?: string[];\n}"
    },
    {
      "name": "CreateSwarm",
      "summary": "Create a Swarm. Response: Swarm.",
      "schema": "/** Create a Swarm. Response: [Swarm]. */\nexport interface CreateSwarm {\n    /** The name given to newly created swarm. */\n    name: string;\n    /** Optional partial config to initialize the swarm with. */\n    config?: _PartialSwarmConfig;\n}"
    },
    {
      "name": "CopySwarm",
      "summary": "Creates a new Swarm with given `name` and the configuration of the Swarm at the given `id`. Response: Swarm.",
      "schema": "/**\n * Creates a new Swarm with given `name` and the configuration\n * of the Swarm at the given `id`. Response: [Swarm].\n */\nexport interface CopySwarm {\n    /** The name of the new swarm. */\n    name: string;\n    /** The id of the swarm to copy. */\n    id: string;\n}"
    },
    {
      "name": "DeleteSwarm",
      "summary": "Deletes the Swarm at the given id, and returns the deleted Swarm.",
      "schema": "/**\n * Deletes the Swarm at the given id, and returns the deleted Swarm.\n * Response: [Swarm]\n */\nexport interface DeleteSwarm {\n    /** The id or name of the swarm to delete. */\n    id: string;\n}"
    },
    {
      "name": "UpdateSwarm",
      "summary": "Update the Swarm at the given id, and return the updated Swarm. Note. If the attached server for the Swarm changes, the Swarm will be deleted / cleaned up on the old server. Note. This method updates only the fields which are set in the _PartialSwarmConfig, effectively merging diffs into the final document. This is helpful when multiple users are using the same resources concurrently by ensuring no unintentional field changes occur from out of date local state.",
      "schema": "/**\n * Update the Swarm at the given id, and return the updated Swarm.\n * Response: [Swarm].\n *\n * Note. If the attached server for the Swarm changes,\n * the Swarm will be deleted / cleaned up on the old server.\n *\n * Note. This method updates only the fields which are set in the [_PartialSwarmConfig],\n * effectively merging diffs into the final document.\n * This is helpful when multiple users are using\n * the same resources concurrently by ensuring no unintentional\n * field changes occur from out of date local state.\n */\nexport interface UpdateSwarm {\n    /** The id of the swarm to update. */\n    id: string;\n    /** The partial config update to apply. */\n    config: _PartialSwarmConfig;\n}"
    },
    {
      "name": "RenameSwarm",
      "summary": "Rename the Swarm at id to the given name.",
      "schema": "/**\n * Rename the Swarm at id to the given name.\n * Response: [Update].\n */\nexport interface RenameSwarm {\n    /** The id or name of the Swarm to rename. */\n    id: string;\n    /** The new name. */\n    name: string;\n}"
    },
    {
      "name": "CreateServer",
      "summary": "Create a server. Response: Server.",
      "schema": "/** Create a server. Response: [Server]. */\nexport interface CreateServer {\n    /** The name given to newly created server. */\n    name: string;\n    /** Optional partial config to initialize the server with. */\n    config?: _PartialServerConfig;\n    /** Initial public key to assign to Server. */\n    public_key?: string;\n}"
    },
    {
      "name": "CopyServer",
      "summary": "Creates a new server with given `name` and the configuration of the server at the given `id`. Response: Server.",
      "schema": "/**\n * Creates a new server with given `name` and the configuration\n * of the server at the given `id`. Response: [Server].\n */\nexport interface CopyServer {\n    /** The name of the new server. */\n    name: string;\n    /** The id of the server to copy. */\n    id: string;\n    /** Initial public key to assign to Server. */\n    public_key?: string;\n}"
    },
    {
      "name": "DeleteServer",
      "summary": "Deletes the server at the given id, and returns the deleted server.",
      "schema": "/**\n * Deletes the server at the given id, and returns the deleted server.\n * Response: [Server]\n */\nexport interface DeleteServer {\n    /** The id or name of the server to delete. */\n    id: string;\n}"
    },
    {
      "name": "UpdateServer",
      "summary": "Update the server at the given id, and return the updated server. Note. This method updates only the fields which are set in the _PartialServerConfig, effectively merging diffs into the final document. This is helpful when multiple users are using the same resources concurrently by ensuring no unintentional field changes occur from out of date local state.",
      "schema": "/**\n * Update the server at the given id, and return the updated server.\n * Response: [Server].\n *\n * Note. This method updates only the fields which are set in the [_PartialServerConfig],\n * effectively merging diffs into the final document.\n * This is helpful when multiple users are using\n * the same resources concurrently by ensuring no unintentional\n * field changes occur from out of date local state.\n */\nexport interface UpdateServer {\n    /** The id or name of the server to update. */\n    id: string;\n    /** The partial config update to apply. */\n    config: _PartialServerConfig;\n}"
    },
    {
      "name": "RenameServer",
      "summary": "Rename an Server to the given name.",
      "schema": "/**\n * Rename an Server to the given name.\n * Response: [Update].\n */\nexport interface RenameServer {\n    /** The id or name of the Server to rename. */\n    id: string;\n    /** The new name. */\n    name: string;\n}"
    },
    {
      "name": "CreateNetwork",
      "summary": "Create a docker network on the server. `docker network create {name}`",
      "schema": "/**\n * Create a docker network on the server.\n * Response: [Update]\n *\n * `docker network create {name}`\n */\nexport interface CreateNetwork {\n    /** Server Id or name */\n    server: string;\n    /** The name of the network to create. */\n    name: string;\n}"
    },
    {
      "name": "UpdateServerPublicKey",
      "summary": "Updates the Server with an explicit Public Key.",
      "schema": "/**\n * Updates the Server with an explicit Public Key.\n * Response: [Update]\n */\nexport interface UpdateServerPublicKey {\n    /** Server Id or name */\n    server: string;\n    /** Spki base64 public key */\n    public_key: string;\n}"
    },
    {
      "name": "RotateServerKeys",
      "summary": "Rotates the private / public keys for the server.",
      "schema": "/**\n * Rotates the private / public keys for the server.\n * Response: [Update]\n */\nexport interface RotateServerKeys {\n    /** Server Id or name */\n    server: string;\n}"
    },
    {
      "name": "CreateTerminal",
      "summary": "Create a Terminal. Requires minimum Read + Terminal permission on the target Resource.",
      "schema": "/**\n * Create a Terminal.\n * Requires minimum Read + Terminal permission on the target Resource.\n * Response: [Terminal]\n */\nexport interface CreateTerminal {\n    /**\n     * A name for the Terminal session.\n     * If not specified, a default will be given.\n     */\n    name?: string;\n    /** The target to create terminal for */\n    target: TerminalTarget;\n    /**\n     * The shell command (eg `bash`) to init the shell.\n     *\n     * Default:\n     * - Server: Configured on each Periphery\n     * - ContainerExec: `sh`\n     * - Attach: unused\n     */\n    command?: string;\n    /**\n     * For container terminals, choose 'exec' or 'attach'.\n     *\n     * Default\n     * - Server: ignored\n     * - Container / Stack / Deployment: `exec`\n     */\n    mode?: ContainerTerminalMode;\n    /** Default: `Never` */\n    recreate?: TerminalRecreateMode;\n}"
    },
    {
      "name": "DeleteTerminal",
      "summary": "Delete a terminal.",
      "schema": "/**\n * Delete a terminal.\n * Response: [NoData]\n */\nexport interface DeleteTerminal {\n    /** Server / Container / Stack / Deployment */\n    target: TerminalTarget;\n    /** The name of the Terminal to delete. */\n    terminal: string;\n}"
    },
    {
      "name": "DeleteAllTerminals",
      "summary": "Delete all Terminals on the Server.",
      "schema": "/**\n * Delete all Terminals on the Server.\n * Response: [NoData]\n */\nexport interface DeleteAllTerminals {\n    /** Server Id or name */\n    server: string;\n}"
    },
    {
      "name": "BatchDeleteAllTerminals",
      "summary": "Delete all terminals on many or all Servers.",
      "schema": "/**\n * Delete all terminals on many or all Servers.\n * Response: [NoData]\n */\nexport interface BatchDeleteAllTerminals {\n    /** Optional structured query to filter servers. */\n    query?: ServerQuery;\n}"
    },
    {
      "name": "CreateStack",
      "summary": "Create a stack. Response: Stack.",
      "schema": "/** Create a stack. Response: [Stack]. */\nexport interface CreateStack {\n    /** The name given to newly created stack. */\n    name: string;\n    /** Optional partial config to initialize the stack with. */\n    config?: _PartialStackConfig;\n}"
    },
    {
      "name": "CopyStack",
      "summary": "Creates a new stack with given `name` and the configuration of the stack at the given `id`. Response: Stack.",
      "schema": "/**\n * Creates a new stack with given `name` and the configuration\n * of the stack at the given `id`. Response: [Stack].\n */\nexport interface CopyStack {\n    /** The name of the new stack. */\n    name: string;\n    /** The id of the stack to copy. */\n    id: string;\n}"
    },
    {
      "name": "DeleteStack",
      "summary": "Deletes the stack at the given id, and returns the deleted stack.",
      "schema": "/**\n * Deletes the stack at the given id, and returns the deleted stack.\n * Response: [Stack]\n */\nexport interface DeleteStack {\n    /** The id or name of the stack to delete. */\n    id: string;\n}"
    },
    {
      "name": "UpdateStack",
      "summary": "Update the stack at the given id, and return the updated stack. Note. If the attached server for the stack changes, the stack will be deleted / cleaned up on the old server. Note. This method updates only the fields which are set in the _PartialStackConfig, merging diffs into the final document. This is helpful when multiple users are using the same resources concurrently by ensuring no unintentional field changes occur from out of date local state.",
      "schema": "/**\n * Update the stack at the given id, and return the updated stack.\n * Response: [Stack].\n *\n * Note. If the attached server for the stack changes,\n * the stack will be deleted / cleaned up on the old server.\n *\n * Note. This method updates only the fields which are set in the [_PartialStackConfig],\n * merging diffs into the final document.\n * This is helpful when multiple users are using\n * the same resources concurrently by ensuring no unintentional\n * field changes occur from out of date local state.\n */\nexport interface UpdateStack {\n    /** The id of the Stack to update. */\n    id: string;\n    /** The partial config update to apply. */\n    config: _PartialStackConfig;\n}"
    },
    {
      "name": "RenameStack",
      "summary": "Rename the stack at id to the given name. Response: Update.",
      "schema": "/** Rename the stack at id to the given name. Response: [Update]. */\nexport interface RenameStack {\n    /** The id of the stack to rename. */\n    id: string;\n    /** The new name. */\n    name: string;\n}"
    },
    {
      "name": "WriteStackFileContents",
      "summary": "Update file contents in Files on Server or Git Repo mode. Response: Update.",
      "schema": "/** Update file contents in Files on Server or Git Repo mode. Response: [Update]. */\nexport interface WriteStackFileContents {\n    /** The name or id of the target Stack. */\n    stack: string;\n    /**\n     * The file path relative to the stack run directory,\n     * or absolute path.\n     */\n    file_path: string;\n    /** The contents to write. */\n    contents: string;\n}"
    },
    {
      "name": "RefreshStackCache",
      "summary": "Trigger a refresh of the cached compose file contents. Refreshes: - Whether the remote file is missing - The latest json, and for repos, the remote contents, hash, and message.",
      "schema": "/**\n * Trigger a refresh of the cached compose file contents.\n * Refreshes:\n * - Whether the remote file is missing\n * - The latest json, and for repos, the remote contents, hash, and message.\n */\nexport interface RefreshStackCache {\n    /** Id or name */\n    stack: string;\n}"
    },
    {
      "name": "CheckStackForUpdate",
      "summary": "Checks for new images. Response: CheckStackForUpdateResponse",
      "schema": "/** Checks for new images. Response: [CheckStackForUpdateResponse] */\nexport interface CheckStackForUpdate {\n    /** Name or id */\n    stack: string;\n    /**\n     * Normally resources with 'auto_update' will be\n     * redeployed immediately if updates are found.\n     * With this enabled, convert this into an UpdateAvailable alert.\n     */\n    skip_auto_update?: boolean;\n    /**\n     * If check triggers auto deploy,\n     * whether this call should wait on the auto deploy,\n     * or run it in the background.\n     */\n    wait_for_auto_update?: boolean;\n    /**\n     * Usually will refresh the stack cache before checking for updates.\n     * Skip with this option.\n     */\n    skip_cache_refresh?: boolean;\n}"
    },
    {
      "name": "BatchCheckStackForUpdate",
      "summary": "Checks for new images. Response: BatchCheckStackForUpdateResponse",
      "schema": "/** Checks for new images. Response: [BatchCheckStackForUpdateResponse] */\nexport interface BatchCheckStackForUpdate {\n    /**\n     * Id or name or wildcard pattern or regex.\n     * Supports multiline and comma delineated combinations of the above.\n     *\n     * Example:\n     * ```text\n     * # match all foo-* stacks\n     * foo-*\n     * # add some more\n     * extra-stack-1, extra-stack-2\n     * ```\n     */\n    pattern: string;\n    /**\n     * Filter matches by tag.\n     * If empty, skips tag filtering.\n     */\n    tags?: string[];\n    /**\n     * Normally resources with 'auto_update' will be\n     * redeployed immediately if updates are found.\n     * With this enabled, convert this into an UpdateAvailable alert.\n     */\n    skip_auto_update?: boolean;\n    /**\n     * If check triggers auto deploy,\n     * whether this call should wait on the auto deploy,\n     * or run it in the background.\n     */\n    wait_for_auto_update?: boolean;\n    /**\n     * Usually will refresh the stack cache before checking for updates.\n     * Skip with this option.\n     */\n    skip_cache_refresh?: boolean;\n}"
    },
    {
      "name": "CreateDeployment",
      "summary": "Create a deployment. Response: Deployment.",
      "schema": "/** Create a deployment. Response: [Deployment]. */\nexport interface CreateDeployment {\n    /** The name given to newly created deployment. */\n    name: string;\n    /** Optional partial config to initialize the deployment with. */\n    config?: _PartialDeploymentConfig;\n}"
    },
    {
      "name": "CopyDeployment",
      "summary": "Creates a new deployment with given `name` and the configuration of the deployment at the given `id`. Response: Deployment",
      "schema": "/**\n * Creates a new deployment with given `name` and the configuration\n * of the deployment at the given `id`. Response: [Deployment]\n */\nexport interface CopyDeployment {\n    /** The name of the new deployment. */\n    name: string;\n    /** The id of the deployment to copy. */\n    id: string;\n}"
    },
    {
      "name": "CreateDeploymentFromContainer",
      "summary": "Create a Deployment from an existing container. Response: Deployment.",
      "schema": "/** Create a Deployment from an existing container. Response: [Deployment]. */\nexport interface CreateDeploymentFromContainer {\n    /** The name or id of the existing container. */\n    name: string;\n    /** The server id or name on which container exists. */\n    server: string;\n}"
    },
    {
      "name": "DeleteDeployment",
      "summary": "Deletes the deployment at the given id, and returns the deleted deployment. Note. If the associated container is running, it will be deleted as part of the deployment clean up.",
      "schema": "/**\n * Deletes the deployment at the given id, and returns the deleted deployment.\n * Response: [Deployment].\n *\n * Note. If the associated container is running, it will be deleted as part of\n * the deployment clean up.\n */\nexport interface DeleteDeployment {\n    /** The id or name of the deployment to delete. */\n    id: string;\n}"
    },
    {
      "name": "UpdateDeployment",
      "summary": "Update the deployment at the given id, and return the updated deployment. Note. If the attached server for the deployment changes, the deployment will be deleted / cleaned up on the old server. Note. This method updates only the fields which are set in the _PartialDeploymentConfig, effectively merging diffs into the final document. This is helpful when multiple users are using the same resources concurrently by ensuring no unintentional field changes occur from out of date local state.",
      "schema": "/**\n * Update the deployment at the given id, and return the updated deployment.\n * Response: [Deployment].\n *\n * Note. If the attached server for the deployment changes,\n * the deployment will be deleted / cleaned up on the old server.\n *\n * Note. This method updates only the fields which are set in the [_PartialDeploymentConfig],\n * effectively merging diffs into the final document.\n * This is helpful when multiple users are using\n * the same resources concurrently by ensuring no unintentional\n * field changes occur from out of date local state.\n */\nexport interface UpdateDeployment {\n    /** The deployment id to update. */\n    id: string;\n    /** The partial config update. */\n    config: _PartialDeploymentConfig;\n}"
    },
    {
      "name": "RenameDeployment",
      "summary": "Rename the deployment at id to the given name. Response: Update. Note. If a container is created for the deployment, it will be renamed using `docker rename ...`.",
      "schema": "/**\n * Rename the deployment at id to the given name. Response: [Update].\n *\n * Note. If a container is created for the deployment, it will be renamed using\n * `docker rename ...`.\n */\nexport interface RenameDeployment {\n    /** The id of the deployment to rename. */\n    id: string;\n    /** The new name. */\n    name: string;\n}"
    },
    {
      "name": "CheckDeploymentForUpdate",
      "summary": "Checks for newer image than what is deployed. Response: CheckDeploymentForUpdateResponse",
      "schema": "/** Checks for newer image than what is deployed. Response: [CheckDeploymentForUpdateResponse] */\nexport interface CheckDeploymentForUpdate {\n    /** Name or id */\n    deployment: string;\n    /**\n     * Normally resources with 'auto_update' will be\n     * redeployed immediately if updates are found.\n     * With this enabled, convert this into an UpdateAvailable alert.\n     */\n    skip_auto_update?: boolean;\n    /**\n     * If check triggers auto deploy,\n     * whether this call should wait on the auto deploy,\n     * or run it in the background.\n     */\n    wait_for_auto_update?: boolean;\n}"
    },
    {
      "name": "BatchCheckDeploymentForUpdate",
      "summary": "Checks for newer image than what is deployed. Response: BatchCheckDeploymentForUpdateResponse",
      "schema": "/** Checks for newer image than what is deployed. Response: [BatchCheckDeploymentForUpdateResponse] */\nexport interface BatchCheckDeploymentForUpdate {\n    /**\n     * Id or name or wildcard pattern or regex.\n     * Supports multiline and comma delineated combinations of the above.\n     *\n     * Example:\n     * ```text\n     * # match all foo-* deployments\n     * foo-*\n     * # add some more\n     * extra-deployment-1, extra-deployment-2\n     * ```\n     */\n    pattern: string;\n    /**\n     * Filter matches by tag.\n     * If empty, skips tag filtering.\n     */\n    tags?: string[];\n    /**\n     * Normally resources with 'auto_update' will be\n     * redeployed immediately if updates are found.\n     * With this enabled, convert this into an UpdateAvailable alert.\n     */\n    skip_auto_update?: boolean;\n    /**\n     * If check triggers auto deploy,\n     * whether this call should wait on the auto deploy,\n     * or run it in the background.\n     */\n    wait_for_auto_update?: boolean;\n}"
    },
    {
      "name": "CreateBuild",
      "summary": "Create a build. Response: Build.",
      "schema": "/** Create a build. Response: [Build]. */\nexport interface CreateBuild {\n    /** The name given to newly created build. */\n    name: string;\n    /** Optional partial config to initialize the build with. */\n    config?: _PartialBuildConfig;\n}"
    },
    {
      "name": "CopyBuild",
      "summary": "Creates a new build with given `name` and the configuration of the build at the given `id`. Response: Build.",
      "schema": "/**\n * Creates a new build with given `name` and the configuration\n * of the build at the given `id`. Response: [Build].\n */\nexport interface CopyBuild {\n    /** The name of the new build. */\n    name: string;\n    /** The id of the build to copy. */\n    id: string;\n}"
    },
    {
      "name": "DeleteBuild",
      "summary": "Deletes the build at the given id, and returns the deleted build.",
      "schema": "/**\n * Deletes the build at the given id, and returns the deleted build.\n * Response: [Build]\n */\nexport interface DeleteBuild {\n    /** The id or name of the build to delete. */\n    id: string;\n}"
    },
    {
      "name": "UpdateBuild",
      "summary": "Update the build at the given id, and return the updated build. Note. This method updates only the fields which are set in the _PartialBuildConfig, effectively merging diffs into the final document. This is helpful when multiple users are using the same resources concurrently by ensuring no unintentional field changes occur from out of date local state.",
      "schema": "/**\n * Update the build at the given id, and return the updated build.\n * Response: [Build].\n *\n * Note. This method updates only the fields which are set in the [_PartialBuildConfig],\n * effectively merging diffs into the final document.\n * This is helpful when multiple users are using\n * the same resources concurrently by ensuring no unintentional\n * field changes occur from out of date local state.\n */\nexport interface UpdateBuild {\n    /** The id or name of the build to update. */\n    id: string;\n    /** The partial config update to apply. */\n    config: _PartialBuildConfig;\n}"
    },
    {
      "name": "RenameBuild",
      "summary": "Rename the Build at id to the given name.",
      "schema": "/**\n * Rename the Build at id to the given name.\n * Response: [Update].\n */\nexport interface RenameBuild {\n    /** The id or name of the Build to rename. */\n    id: string;\n    /** The new name. */\n    name: string;\n}"
    },
    {
      "name": "WriteBuildFileContents",
      "summary": "Update dockerfile contents in Files on Server or Git Repo mode. Response: Update.",
      "schema": "/** Update dockerfile contents in Files on Server or Git Repo mode. Response: [Update]. */\nexport interface WriteBuildFileContents {\n    /** The name or id of the target Build. */\n    build: string;\n    /** The dockerfile contents to write. */\n    contents: string;\n}"
    },
    {
      "name": "RefreshBuildCache",
      "summary": "Trigger a refresh of the cached latest hash and message.",
      "schema": "/** Trigger a refresh of the cached latest hash and message. */\nexport interface RefreshBuildCache {\n    /** Id or name */\n    build: string;\n}"
    },
    {
      "name": "CreateRepo",
      "summary": "Create a repo. Response: Repo.",
      "schema": "/** Create a repo. Response: [Repo]. */\nexport interface CreateRepo {\n    /** The name given to newly created repo. */\n    name: string;\n    /** Optional partial config to initialize the repo with. */\n    config?: _PartialRepoConfig;\n}"
    },
    {
      "name": "CopyRepo",
      "summary": "Creates a new repo with given `name` and the configuration of the repo at the given `id`. Response: Repo.",
      "schema": "/**\n * Creates a new repo with given `name` and the configuration\n * of the repo at the given `id`. Response: [Repo].\n */\nexport interface CopyRepo {\n    /** The name of the new repo. */\n    name: string;\n    /** The id of the repo to copy. */\n    id: string;\n}"
    },
    {
      "name": "DeleteRepo",
      "summary": "Deletes the repo at the given id, and returns the deleted repo.",
      "schema": "/**\n * Deletes the repo at the given id, and returns the deleted repo.\n * Response: [Repo]\n */\nexport interface DeleteRepo {\n    /** The id or name of the repo to delete. */\n    id: string;\n}"
    },
    {
      "name": "UpdateRepo",
      "summary": "Update the repo at the given id, and return the updated repo. Note. If the attached server for the repo changes, the repo will be deleted / cleaned up on the old server. Note. This method updates only the fields which are set in the _PartialRepoConfig, effectively merging diffs into the final document. This is helpful when multiple users are using the same resources concurrently by ensuring no unintentional field changes occur from out of date local state.",
      "schema": "/**\n * Update the repo at the given id, and return the updated repo.\n * Response: [Repo].\n *\n * Note. If the attached server for the repo changes,\n * the repo will be deleted / cleaned up on the old server.\n *\n * Note. This method updates only the fields which are set in the [_PartialRepoConfig],\n * effectively merging diffs into the final document.\n * This is helpful when multiple users are using\n * the same resources concurrently by ensuring no unintentional\n * field changes occur from out of date local state.\n */\nexport interface UpdateRepo {\n    /** The id of the repo to update. */\n    id: string;\n    /** The partial config update to apply. */\n    config: _PartialRepoConfig;\n}"
    },
    {
      "name": "RenameRepo",
      "summary": "Rename the Repo at id to the given name.",
      "schema": "/**\n * Rename the Repo at id to the given name.\n * Response: [Update].\n */\nexport interface RenameRepo {\n    /** The id or name of the Repo to rename. */\n    id: string;\n    /** The new name. */\n    name: string;\n}"
    },
    {
      "name": "RefreshRepoCache",
      "summary": "Trigger a refresh of the cached latest hash and message.",
      "schema": "/** Trigger a refresh of the cached latest hash and message. */\nexport interface RefreshRepoCache {\n    /** Id or name */\n    repo: string;\n}"
    },
    {
      "name": "CreateProcedure",
      "summary": "Create a procedure. Response: Procedure.",
      "schema": "/** Create a procedure. Response: [Procedure]. */\nexport interface CreateProcedure {\n    /** The name given to newly created build. */\n    name: string;\n    /** Optional partial config to initialize the procedure with. */\n    config?: _PartialProcedureConfig;\n}"
    },
    {
      "name": "CopyProcedure",
      "summary": "Creates a new procedure with given `name` and the configuration of the procedure at the given `id`. Response: Procedure.",
      "schema": "/**\n * Creates a new procedure with given `name` and the configuration\n * of the procedure at the given `id`. Response: [Procedure].\n */\nexport interface CopyProcedure {\n    /** The name of the new procedure. */\n    name: string;\n    /** The id of the procedure to copy. */\n    id: string;\n}"
    },
    {
      "name": "DeleteProcedure",
      "summary": "Deletes the procedure at the given id, and returns the deleted procedure.",
      "schema": "/**\n * Deletes the procedure at the given id, and returns the deleted procedure.\n * Response: [Procedure]\n */\nexport interface DeleteProcedure {\n    /** The id or name of the procedure to delete. */\n    id: string;\n}"
    },
    {
      "name": "UpdateProcedure",
      "summary": "Update the procedure at the given id, and return the updated procedure. Note. This method updates only the fields which are set in the _PartialProcedureConfig, effectively merging diffs into the final document. This is helpful when multiple users are using the same resources concurrently by ensuring no unintentional field changes occur from out of date local state.",
      "schema": "/**\n * Update the procedure at the given id, and return the updated procedure.\n * Response: [Procedure].\n *\n * Note. This method updates only the fields which are set in the [_PartialProcedureConfig],\n * effectively merging diffs into the final document.\n * This is helpful when multiple users are using\n * the same resources concurrently by ensuring no unintentional\n * field changes occur from out of date local state.\n */\nexport interface UpdateProcedure {\n    /** The id of the procedure to update. */\n    id: string;\n    /** The partial config update. */\n    config: _PartialProcedureConfig;\n}"
    },
    {
      "name": "RenameProcedure",
      "summary": "Rename the Procedure at id to the given name.",
      "schema": "/**\n * Rename the Procedure at id to the given name.\n * Response: [Update].\n */\nexport interface RenameProcedure {\n    /** The id or name of the Procedure to rename. */\n    id: string;\n    /** The new name. */\n    name: string;\n}"
    },
    {
      "name": "CreateAction",
      "summary": "Create an action. Response: Action.",
      "schema": "/** Create an action. Response: [Action]. */\nexport interface CreateAction {\n    /** The name given to newly created action. */\n    name: string;\n    /** Optional partial config to initialize the action with. */\n    config?: _PartialActionConfig;\n}"
    },
    {
      "name": "CopyAction",
      "summary": "Creates a new action with given `name` and the configuration of the action at the given `id`. Response: Action.",
      "schema": "/**\n * Creates a new action with given `name` and the configuration\n * of the action at the given `id`. Response: [Action].\n */\nexport interface CopyAction {\n    /** The name of the new action. */\n    name: string;\n    /** The id of the action to copy. */\n    id: string;\n}"
    },
    {
      "name": "DeleteAction",
      "summary": "Deletes the action at the given id, and returns the deleted action.",
      "schema": "/**\n * Deletes the action at the given id, and returns the deleted action.\n * Response: [Action]\n */\nexport interface DeleteAction {\n    /** The id or name of the action to delete. */\n    id: string;\n}"
    },
    {
      "name": "UpdateAction",
      "summary": "Update the action at the given id, and return the updated action. Note. This method updates only the fields which are set in the _PartialActionConfig, effectively merging diffs into the final document. This is helpful when multiple users are using the same resources concurrently by ensuring no unintentional field changes occur from out of date local state.",
      "schema": "/**\n * Update the action at the given id, and return the updated action.\n * Response: [Action].\n *\n * Note. This method updates only the fields which are set in the [_PartialActionConfig],\n * effectively merging diffs into the final document.\n * This is helpful when multiple users are using\n * the same resources concurrently by ensuring no unintentional\n * field changes occur from out of date local state.\n */\nexport interface UpdateAction {\n    /** The id of the action to update. */\n    id: string;\n    /** The partial config update to apply. */\n    config: _PartialActionConfig;\n}"
    },
    {
      "name": "RenameAction",
      "summary": "Rename the Action at id to the given name.",
      "schema": "/**\n * Rename the Action at id to the given name.\n * Response: [Update].\n */\nexport interface RenameAction {\n    /** The id or name of the Action to rename. */\n    id: string;\n    /** The new name. */\n    name: string;\n}"
    },
    {
      "name": "CreateResourceSync",
      "summary": "Create a sync. Response: ResourceSync.",
      "schema": "/** Create a sync. Response: [ResourceSync]. */\nexport interface CreateResourceSync {\n    /** The name given to newly created sync. */\n    name: string;\n    /** Optional partial config to initialize the sync with. */\n    config?: _PartialResourceSyncConfig;\n}"
    },
    {
      "name": "CopyResourceSync",
      "summary": "Creates a new sync with given `name` and the configuration of the sync at the given `id`. Response: ResourceSync.",
      "schema": "/**\n * Creates a new sync with given `name` and the configuration\n * of the sync at the given `id`. Response: [ResourceSync].\n */\nexport interface CopyResourceSync {\n    /** The name of the new sync. */\n    name: string;\n    /** The id of the sync to copy. */\n    id: string;\n}"
    },
    {
      "name": "DeleteResourceSync",
      "summary": "Deletes the sync at the given id, and returns the deleted sync.",
      "schema": "/**\n * Deletes the sync at the given id, and returns the deleted sync.\n * Response: [ResourceSync]\n */\nexport interface DeleteResourceSync {\n    /** The id or name of the sync to delete. */\n    id: string;\n}"
    },
    {
      "name": "UpdateResourceSync",
      "summary": "Update the sync at the given id, and return the updated sync. Note. This method updates only the fields which are set in the _PartialResourceSyncConfig, effectively merging diffs into the final document. This is helpful when multiple users are using the same resources concurrently by ensuring no unintentional field changes occur from out of date local state.",
      "schema": "/**\n * Update the sync at the given id, and return the updated sync.\n * Response: [ResourceSync].\n *\n * Note. This method updates only the fields which are set in the [_PartialResourceSyncConfig],\n * effectively merging diffs into the final document.\n * This is helpful when multiple users are using\n * the same resources concurrently by ensuring no unintentional\n * field changes occur from out of date local state.\n */\nexport interface UpdateResourceSync {\n    /** The id of the sync to update. */\n    id: string;\n    /** The partial config update to apply. */\n    config: _PartialResourceSyncConfig;\n}"
    },
    {
      "name": "RenameResourceSync",
      "summary": "Rename the ResourceSync at id to the given name.",
      "schema": "/**\n * Rename the ResourceSync at id to the given name.\n * Response: [Update].\n */\nexport interface RenameResourceSync {\n    /** The id or name of the ResourceSync to rename. */\n    id: string;\n    /** The new name. */\n    name: string;\n}"
    },
    {
      "name": "CommitSync",
      "summary": "Exports matching resources, and writes to the target sync's resource file. Response: Update Note. Will fail if the Sync is not `managed`.",
      "schema": "/**\n * Exports matching resources, and writes to the target sync's resource file. Response: [Update]\n *\n * Note. Will fail if the Sync is not `managed`.\n */\nexport interface CommitSync {\n    /** Id or name */\n    sync: string;\n}"
    },
    {
      "name": "WriteSyncFileContents",
      "summary": "Write to the sync toml file contents. Response: Update.",
      "schema": "/** Write to the sync toml file contents. Response: [Update]. */\nexport interface WriteSyncFileContents {\n    /** The name or id of the target Sync. */\n    sync: string;\n    /**\n     * If this file was under a resource folder, this will be the folder.\n     * Otherwise, it should be empty string.\n     */\n    resource_path: string;\n    /** The file path relative to the resource path. */\n    file_path: string;\n    /** The contents to write. */\n    contents: string;\n}"
    },
    {
      "name": "RefreshResourceSyncPending",
      "summary": "Trigger a refresh of the computed diff logs for view. Response: ResourceSync",
      "schema": "/** Trigger a refresh of the computed diff logs for view. Response: [ResourceSync] */\nexport interface RefreshResourceSyncPending {\n    /** Id or name */\n    sync: string;\n}"
    },
    {
      "name": "CreateBuilder",
      "summary": "Create a builder. Response: Builder.",
      "schema": "/** Create a builder. Response: [Builder]. */\nexport interface CreateBuilder {\n    /** The name given to newly created builder. */\n    name: string;\n    /** Optional partial config to initialize the builder with. */\n    config?: PartialBuilderConfig;\n}"
    },
    {
      "name": "CopyBuilder",
      "summary": "Creates a new builder with given `name` and the configuration of the builder at the given `id`. Response: Builder",
      "schema": "/**\n * Creates a new builder with given `name` and the configuration\n * of the builder at the given `id`. Response: [Builder]\n */\nexport interface CopyBuilder {\n    /** The name of the new builder. */\n    name: string;\n    /** The id of the builder to copy. */\n    id: string;\n}"
    },
    {
      "name": "DeleteBuilder",
      "summary": "Deletes the builder at the given id, and returns the deleted builder.",
      "schema": "/**\n * Deletes the builder at the given id, and returns the deleted builder.\n * Response: [Builder]\n */\nexport interface DeleteBuilder {\n    /** The id or name of the builder to delete. */\n    id: string;\n}"
    },
    {
      "name": "UpdateBuilder",
      "summary": "Update the builder at the given id, and return the updated builder. Note. This method updates only the fields which are set in the PartialBuilderConfig, effectively merging diffs into the final document. This is helpful when multiple users are using the same resources concurrently by ensuring no unintentional field changes occur from out of date local state.",
      "schema": "/**\n * Update the builder at the given id, and return the updated builder.\n * Response: [Builder].\n *\n * Note. This method updates only the fields which are set in the [PartialBuilderConfig],\n * effectively merging diffs into the final document.\n * This is helpful when multiple users are using\n * the same resources concurrently by ensuring no unintentional\n * field changes occur from out of date local state.\n */\nexport interface UpdateBuilder {\n    /** The id of the builder to update. */\n    id: string;\n    /** The partial config update to apply. */\n    config: PartialBuilderConfig;\n}"
    },
    {
      "name": "RenameBuilder",
      "summary": "Rename the Builder at id to the given name.",
      "schema": "/**\n * Rename the Builder at id to the given name.\n * Response: [Update].\n */\nexport interface RenameBuilder {\n    /** The id or name of the Builder to rename. */\n    id: string;\n    /** The new name. */\n    name: string;\n}"
    },
    {
      "name": "CreateAlerter",
      "summary": "Create an alerter. Response: Alerter.",
      "schema": "/** Create an alerter. Response: [Alerter]. */\nexport interface CreateAlerter {\n    /** The name given to newly created alerter. */\n    name: string;\n    /** Optional partial config to initialize the alerter with. */\n    config?: _PartialAlerterConfig;\n}"
    },
    {
      "name": "CopyAlerter",
      "summary": "Creates a new alerter with given `name` and the configuration of the alerter at the given `id`. Response: Alerter.",
      "schema": "/**\n * Creates a new alerter with given `name` and the configuration\n * of the alerter at the given `id`. Response: [Alerter].\n */\nexport interface CopyAlerter {\n    /** The name of the new alerter. */\n    name: string;\n    /** The id of the alerter to copy. */\n    id: string;\n}"
    },
    {
      "name": "DeleteAlerter",
      "summary": "Deletes the alerter at the given id, and returns the deleted alerter.",
      "schema": "/**\n * Deletes the alerter at the given id, and returns the deleted alerter.\n * Response: [Alerter]\n */\nexport interface DeleteAlerter {\n    /** The id or name of the alerter to delete. */\n    id: string;\n}"
    },
    {
      "name": "UpdateAlerter",
      "summary": "Update the alerter at the given id, and return the updated alerter. Response: Alerter. Note. This method updates only the fields which are set in the PartialAlerterConfigcrate::entities::alerter::PartialAlerterConfig, effectively merging diffs into the final document. This is helpful when multiple users are using the same resources concurrently by ensuring no unintentional field changes occur from out of date local state.",
      "schema": "/**\n * Update the alerter at the given id, and return the updated alerter. Response: [Alerter].\n *\n * Note. This method updates only the fields which are set in the [PartialAlerterConfig][crate::entities::alerter::PartialAlerterConfig],\n * effectively merging diffs into the final document. This is helpful when multiple users are using\n * the same resources concurrently by ensuring no unintentional\n * field changes occur from out of date local state.\n */\nexport interface UpdateAlerter {\n    /** The id of the alerter to update. */\n    id: string;\n    /** The partial config update to apply. */\n    config: _PartialAlerterConfig;\n}"
    },
    {
      "name": "RenameAlerter",
      "summary": "Rename the Alerter at id to the given name.",
      "schema": "/**\n * Rename the Alerter at id to the given name.\n * Response: [Update].\n */\nexport interface RenameAlerter {\n    /** The id or name of the Alerter to rename. */\n    id: string;\n    /** The new name. */\n    name: string;\n}"
    },
    {
      "name": "CreateOnboardingKey",
      "summary": "**Admin only.** Create a Server onboarding key. Note. The 'periphery_public_key' on default Server config will be overridden with the actual public key once its generated by Periphery as part of the onboarding flow.",
      "schema": "/**\n * **Admin only.** Create a Server onboarding key.\n * Response: [CreateOnboardingKeyResponse].\n *\n * Note. The 'periphery_public_key' on default Server config will\n * be overridden with the actual public key once its generated by Periphery\n * as part of the onboarding flow.\n */\nexport interface CreateOnboardingKey {\n    /** The name for the creation key */\n    name: string;\n    /**\n     * A unix timestamp in millseconds specifying api key expire time.\n     * Default is 0, which means no expiry.\n     */\n    expires?: I64;\n    /**\n     * Optionally specify an existing private key, otherwise\n     * generate fresh key. This key is not stored directly,\n     * only the public key.\n     */\n    private_key?: string;\n    /** Default tags to apply to Servers created using this key. */\n    tags?: string[];\n    /**\n     * Allows the Onboarding Key to be used to:\n     *\n     * 1. Enable a disabled Server\n     * 2. Remove Server 'address' configuration, allowing Periphery -> Core connection.\n     * 3. Update existing Server's public keys.\n     */\n    privileged?: boolean;\n    /** Optional. New Servers copy this Server's config. */\n    copy_server?: string;\n    /** Optional. Whether to also create a Builder for the Server. */\n    create_builder?: boolean;\n}"
    },
    {
      "name": "UpdateOnboardingKey",
      "summary": "**Admin only.** Update an onboarding key.",
      "schema": "/**\n * **Admin only.** Update an onboarding key.\n * Response: The updated [OnboardingKey].\n */\nexport interface UpdateOnboardingKey {\n    /** The onboarding public key. */\n    public_key: string;\n    /** Update the key enabled state. */\n    enabled?: boolean;\n    /** Update the key name */\n    name?: string;\n    /** Update the onboarding key expire time. */\n    expires?: I64;\n    /** Update the tags */\n    tags?: string[];\n    /**\n     * Allows the Onboarding Key to be used to:\n     *\n     * 1. Enable a disabled Server\n     * 2. Remove Server 'address' configuration, allowing Periphery -> Core connection.\n     * 3. Update existing Server's public keys.\n     */\n    privileged?: boolean;\n    /** Update the copy server */\n    copy_server?: string;\n    /** Update whether to create Builder */\n    create_builder?: boolean;\n}"
    },
    {
      "name": "DeleteOnboardingKey",
      "summary": "**Admin only.** Delete an onboarding key.",
      "schema": "/**\n * **Admin only.** Delete an onboarding key.\n * Response: The deleted [OnboardingKey].\n */\nexport interface DeleteOnboardingKey {\n    public_key: string;\n}"
    },
    {
      "name": "PushRecentlyViewed",
      "summary": "Push a resource to the front of the users 10 most recently viewed resources.",
      "schema": "/**\n * Push a resource to the front of the users 10 most recently viewed resources.\n * Response: [NoData].\n */\nexport interface PushRecentlyViewed {\n    /** The target to push. */\n    resource: ResourceTarget;\n}"
    },
    {
      "name": "SetLastSeenUpdate",
      "summary": "Set the time the calling user most recently opened the UI updates dropdown. Used for unseen notification dot.",
      "schema": "/**\n * Set the time the calling user most recently opened the UI updates dropdown.\n * Used for unseen notification dot.\n * Response: [NoData]\n */\nexport interface SetLastSeenUpdate {\n}"
    },
    {
      "name": "CreateLocalUser",
      "summary": "**Admin only.** Create a local user. Note. Not to be confused with /auth/SignUpLocalUser. This method requires admin user credentials, and can bypass disabled user registration.",
      "schema": "/**\n * **Admin only.** Create a local user.\n * Response: [User].\n *\n * Note. Not to be confused with /auth/SignUpLocalUser.\n * This method requires admin user credentials, and can\n * bypass disabled user registration.\n */\nexport interface CreateLocalUser {\n    /** The username for the local user. */\n    username: string;\n    /** A password for the local user. */\n    password: string;\n}"
    },
    {
      "name": "DeleteUser",
      "summary": "**Admin only**. Delete a user. Admins can delete any non-admin user. Only Super Admin can delete an admin. No users can delete a Super Admin user. User cannot delete themselves.",
      "schema": "/**\n * **Admin only**. Delete a user.\n * Admins can delete any non-admin user.\n * Only Super Admin can delete an admin.\n * No users can delete a Super Admin user.\n * User cannot delete themselves.\n * Response: [NoData].\n */\nexport interface DeleteUser {\n    /** User id or username */\n    user: string;\n}"
    },
    {
      "name": "CreateServiceUser",
      "summary": "**Admin only.** Create a service user.",
      "schema": "/**\n * **Admin only.** Create a service user.\n * Response: [User].\n */\nexport interface CreateServiceUser {\n    /** The username for the service user. */\n    username: string;\n    /** A description for the service user. */\n    description: string;\n}"
    },
    {
      "name": "UpdateServiceUserDescription",
      "summary": "**Admin only.** Update a service user's description.",
      "schema": "/**\n * **Admin only.** Update a service user's description.\n * Response: [User].\n */\nexport interface UpdateServiceUserDescription {\n    /** The service user's username */\n    username: string;\n    /** A new description for the service user. */\n    description: string;\n}"
    },
    {
      "name": "CreateApiKeyForServiceUser",
      "summary": "**Admin only**. Create an api key for a service user.",
      "schema": "/**\n * **Admin only**. Create an api key for a service user.\n * Response: [CreateApiKeyResponse].\n */\nexport interface CreateApiKeyForServiceUser {\n    /** Must be service user */\n    user_id: string;\n    /** The name for the api key */\n    name: string;\n    /**\n     * A unix timestamp in millseconds specifying api key expire time.\n     * Default is 0, which means no expiry.\n     */\n    expires?: I64;\n}"
    },
    {
      "name": "DeleteApiKeyForServiceUser",
      "summary": "**Admin only.** Delete an api key for a service user.",
      "schema": "/**\n * **Admin only.** Delete an api key for a service user.\n * Response: [NoData].\n */\nexport interface DeleteApiKeyForServiceUser {\n    key: string;\n}"
    },
    {
      "name": "CreateUserGroup",
      "summary": "*Admin only.** Create a user group. Response: UserGroup",
      "schema": "/** **Admin only.** Create a user group. Response: [UserGroup] */\nexport interface CreateUserGroup {\n    /** The name to assign to the new UserGroup */\n    name: string;\n}"
    },
    {
      "name": "RenameUserGroup",
      "summary": "*Admin only.** Rename a user group. Response: UserGroup",
      "schema": "/** **Admin only.** Rename a user group. Response: [UserGroup] */\nexport interface RenameUserGroup {\n    /** The id of the UserGroup */\n    id: string;\n    /** The new name for the UserGroup */\n    name: string;\n}"
    },
    {
      "name": "DeleteUserGroup",
      "summary": "*Admin only.** Delete a user group. Response: UserGroup",
      "schema": "/** **Admin only.** Delete a user group. Response: [UserGroup] */\nexport interface DeleteUserGroup {\n    /** The id of the UserGroup */\n    id: string;\n}"
    },
    {
      "name": "AddUserToUserGroup",
      "summary": "*Admin only.** Add a user to a user group. Response: UserGroup",
      "schema": "/** **Admin only.** Add a user to a user group. Response: [UserGroup] */\nexport interface AddUserToUserGroup {\n    /** The name or id of UserGroup that user should be added to. */\n    user_group: string;\n    /** The id or username of the user to add */\n    user: string;\n}"
    },
    {
      "name": "RemoveUserFromUserGroup",
      "summary": "*Admin only.** Remove a user from a user group. Response: UserGroup",
      "schema": "/** **Admin only.** Remove a user from a user group. Response: [UserGroup] */\nexport interface RemoveUserFromUserGroup {\n    /** The name or id of UserGroup that user should be removed from. */\n    user_group: string;\n    /** The id or username of the user to remove */\n    user: string;\n}"
    },
    {
      "name": "SetUsersInUserGroup",
      "summary": "**Admin only.** Completely override the users in the group.",
      "schema": "/**\n * **Admin only.** Completely override the users in the group.\n * Response: [UserGroup]\n */\nexport interface SetUsersInUserGroup {\n    /** Id or name. */\n    user_group: string;\n    /** The user ids or usernames to hard set as the group's users. */\n    users: string[];\n}"
    },
    {
      "name": "SetEveryoneUserGroup",
      "summary": "**Admin only.** Set `everyone` property of User Group.",
      "schema": "/**\n * **Admin only.** Set `everyone` property of User Group.\n * Response: [UserGroup]\n */\nexport interface SetEveryoneUserGroup {\n    /** Id or name. */\n    user_group: string;\n    /** Whether this user group applies to everyone. */\n    everyone: boolean;\n}"
    },
    {
      "name": "UpdateUserAdmin",
      "summary": "**Super Admin only.** Update's whether a user is admin.",
      "schema": "/**\n * **Super Admin only.** Update's whether a user is admin.\n * Response: [NoData].\n */\nexport interface UpdateUserAdmin {\n    /** The target user. */\n    user_id: string;\n    /** Whether user should be admin. */\n    admin: boolean;\n}"
    },
    {
      "name": "UpdateUserBasePermissions",
      "summary": "**Admin only.** Update a user's \"base\" permissions, eg. \"enabled\".",
      "schema": "/**\n * **Admin only.** Update a user's \"base\" permissions, eg. \"enabled\".\n * Response: [NoData].\n */\nexport interface UpdateUserBasePermissions {\n    /** The target user. */\n    user_id: string;\n    /** If specified, will update users enabled state. */\n    enabled?: boolean;\n    /** If specified, will update user's ability to create servers. */\n    create_servers?: boolean;\n    /** If specified, will update user's ability to create builds. */\n    create_builds?: boolean;\n}"
    },
    {
      "name": "UpdatePermissionOnResourceType",
      "summary": "**Admin only.** Update a user or user groups base permission level on a resource type.",
      "schema": "/**\n * **Admin only.** Update a user or user groups base permission level on a resource type.\n * Response: [NoData].\n */\nexport interface UpdatePermissionOnResourceType {\n    /** Specify the user or user group. */\n    user_target: UserTarget;\n    /** The resource type: eg. Server, Build, Deployment, etc. */\n    resource_type: ResourceTarget[\"type\"];\n    /** The base permission level. */\n    permission: PermissionLevelAndSpecifics | PermissionLevel;\n}"
    },
    {
      "name": "UpdatePermissionOnTarget",
      "summary": "**Admin only.** Update a user or user groups permission on a resource.",
      "schema": "/**\n * **Admin only.** Update a user or user groups permission on a resource.\n * Response: [NoData].\n */\nexport interface UpdatePermissionOnTarget {\n    /** Specify the user or user group. */\n    user_target: UserTarget;\n    /** Specify the target resource. */\n    resource_target: ResourceTarget;\n    /** Specify the permission level. */\n    permission: PermissionLevelAndSpecifics | PermissionLevel;\n}"
    },
    {
      "name": "CreateTag",
      "summary": "Create a tag. Response: Tag.",
      "schema": "/** Create a tag. Response: [Tag]. */\nexport interface CreateTag {\n    /** The name of the tag. */\n    name: string;\n    /** Tag color. Default: Slate. */\n    color?: TagColor;\n}"
    },
    {
      "name": "DeleteTag",
      "summary": "Delete a tag, and return the deleted tag. Response: Tag. Note. Will also remove this tag from all attached resources.",
      "schema": "/**\n * Delete a tag, and return the deleted tag. Response: [Tag].\n *\n * Note. Will also remove this tag from all attached resources.\n */\nexport interface DeleteTag {\n    /** The id of the tag to delete. */\n    id: string;\n}"
    },
    {
      "name": "RenameTag",
      "summary": "Rename a tag at id. Response: Tag.",
      "schema": "/** Rename a tag at id. Response: [Tag]. */\nexport interface RenameTag {\n    /** The id of the tag to rename. */\n    id: string;\n    /** The new name of the tag. */\n    name: string;\n}"
    },
    {
      "name": "UpdateTagColor",
      "summary": "Update color for tag. Response: Tag.",
      "schema": "/** Update color for tag. Response: [Tag]. */\nexport interface UpdateTagColor {\n    /** The name or id of the tag to update. */\n    tag: string;\n    /** The new color for the tag. */\n    color: TagColor;\n}"
    },
    {
      "name": "CreateVariable",
      "summary": "*Admin only.** Create variable. Response: Variable.",
      "schema": "/** **Admin only.** Create variable. Response: [Variable]. */\nexport interface CreateVariable {\n    /** The name of the variable to create. */\n    name: string;\n    /** The initial value of the variable. defualt: \"\". */\n    value?: string;\n    /** The initial value of the description. default: \"\". */\n    description?: string;\n    /** Whether to make this a secret variable. */\n    is_secret?: boolean;\n}"
    },
    {
      "name": "UpdateVariableValue",
      "summary": "*Admin only.** Update variable value. Response: Variable.",
      "schema": "/** **Admin only.** Update variable value. Response: [Variable]. */\nexport interface UpdateVariableValue {\n    /** The name of the variable to update. */\n    name: string;\n    /** The value to set. */\n    value: string;\n}"
    },
    {
      "name": "UpdateVariableDescription",
      "summary": "*Admin only.** Update variable description. Response: Variable.",
      "schema": "/** **Admin only.** Update variable description. Response: [Variable]. */\nexport interface UpdateVariableDescription {\n    /** The name of the variable to update. */\n    name: string;\n    /** The description to set. */\n    description: string;\n}"
    },
    {
      "name": "UpdateVariableIsSecret",
      "summary": "*Admin only.** Update whether variable is secret. Response: Variable.",
      "schema": "/** **Admin only.** Update whether variable is secret. Response: [Variable]. */\nexport interface UpdateVariableIsSecret {\n    /** The name of the variable to update. */\n    name: string;\n    /** Whether variable is secret. */\n    is_secret: boolean;\n}"
    },
    {
      "name": "DeleteVariable",
      "summary": "*Admin only.** Delete a variable. Response: Variable.",
      "schema": "/** **Admin only.** Delete a variable. Response: [Variable]. */\nexport interface DeleteVariable {\n    name: string;\n}"
    },
    {
      "name": "CreateGitProviderAccount",
      "summary": "**Admin only.** Create a git provider account.",
      "schema": "/**\n * **Admin only.** Create a git provider account.\n * Response: [GitProviderAccount].\n */\nexport interface CreateGitProviderAccount {\n    /**\n     * The initial account config. Anything in the _id field will be ignored,\n     * as this is generated on creation.\n     */\n    account: _PartialGitProviderAccount;\n}"
    },
    {
      "name": "UpdateGitProviderAccount",
      "summary": "**Admin only.** Update a git provider account.",
      "schema": "/**\n * **Admin only.** Update a git provider account.\n * Response: [GitProviderAccount].\n */\nexport interface UpdateGitProviderAccount {\n    /** The id of the git provider account to update. */\n    id: string;\n    /** The partial git provider account. */\n    account: _PartialGitProviderAccount;\n}"
    },
    {
      "name": "DeleteGitProviderAccount",
      "summary": "**Admin only.** Delete a git provider account.",
      "schema": "/**\n * **Admin only.** Delete a git provider account.\n * Response: [DeleteGitProviderAccountResponse].\n */\nexport interface DeleteGitProviderAccount {\n    /** The id of the git provider to delete */\n    id: string;\n}"
    },
    {
      "name": "CreateImageRegistryAccount",
      "summary": "**Admin only.** Create an image registry account. Pre v2.3.0, called `CreateDockerRegistryAccount`",
      "schema": "/**\n * **Admin only.** Create an image registry account.\n * Response: [ImageRegistryAccount].\n *\n * Pre v2.3.0, called `CreateDockerRegistryAccount`\n */\nexport interface CreateImageRegistryAccount {\n    account: _PartialImageRegistryAccount;\n}"
    },
    {
      "name": "UpdateImageRegistryAccount",
      "summary": "**Admin only.** Update a image registry account. Pre v2.3.0, called `UpdateDockerRegistryAccount`",
      "schema": "/**\n * **Admin only.** Update a image registry account.\n * Response: [ImageRegistryAccount].\n *\n * Pre v2.3.0, called `UpdateDockerRegistryAccount`\n */\nexport interface UpdateImageRegistryAccount {\n    /** The id of the image registry to update */\n    id: string;\n    /** The partial image registry account. */\n    account: _PartialImageRegistryAccount;\n}"
    },
    {
      "name": "DeleteImageRegistryAccount",
      "summary": "**Admin only.** Delete an image registry account. Pre v2.3.0, called `DeleteDockerRegistryAccount`",
      "schema": "/**\n * **Admin only.** Delete an image registry account.\n * Response: [ImageRegistryAccount].\n *\n * Pre v2.3.0, called `DeleteDockerRegistryAccount`\n */\nexport interface DeleteImageRegistryAccount {\n    /** The id of the image registry account to delete */\n    id: string;\n}"
    },
    {
      "name": "CloseAlert",
      "summary": "**Admin only.** Close the Alert at the given id.",
      "schema": "/**\n * **Admin only.** Close the Alert at the given id.\n * Response: [NoData]\n */\nexport interface CloseAlert {\n    /** The id of the Alert to close. */\n    id: string;\n}"
    }
  ],
  "execute": [
    {
      "name": "DeployStack",
      "summary": "Deploys the target stack. `docker compose up`. Response: Update",
      "schema": "/** Deploys the target stack. `docker compose up`. Response: [Update] */\nexport interface DeployStack {\n    /** Id or name */\n    stack: string;\n    /**\n     * Filter to only deploy specific services.\n     * If empty, will deploy all services.\n     *\n     * Note. For Swarm mode Stacks, this field is not supported and will be ignored.\n     */\n    services?: string[];\n    /**\n     * Override the default termination max time.\n     * Only used if the stack needs to be taken down first.\n     */\n    stop_time?: number;\n}"
    },
    {
      "name": "BatchDeployStack",
      "summary": "Deploys multiple Stacks in parallel that match pattern. Response: BatchExecutionResponse.",
      "schema": "/** Deploys multiple Stacks in parallel that match pattern. Response: [BatchExecutionResponse]. */\nexport interface BatchDeployStack {\n    /**\n     * Id or name or wildcard pattern or regex.\n     * Supports multiline and comma delineated combinations of the above.\n     *\n     * Example:\n     * ```text\n     * # match all foo-* stacks\n     * foo-*\n     * # add some more\n     * extra-stack-1, extra-stack-2\n     * ```\n     */\n    pattern: string;\n    /**\n     * Filter matches by tag.\n     * If empty, skips tag filtering.\n     */\n    tags?: string[];\n}"
    },
    {
      "name": "DeployStackIfChanged",
      "summary": "Checks deployed contents vs latest contents, and only if any changes found will `docker compose up`. Response: Update",
      "schema": "/**\n * Checks deployed contents vs latest contents,\n * and only if any changes found\n * will `docker compose up`. Response: [Update]\n */\nexport interface DeployStackIfChanged {\n    /** Id or name */\n    stack: string;\n    /**\n     * Override the default termination max time.\n     * Only used if the stack needs to be taken down first.\n     */\n    stop_time?: number;\n}"
    },
    {
      "name": "BatchDeployStackIfChanged",
      "summary": "Deploys multiple Stacks if changed in parallel that match pattern. Response: BatchExecutionResponse.",
      "schema": "/** Deploys multiple Stacks if changed in parallel that match pattern. Response: [BatchExecutionResponse]. */\nexport interface BatchDeployStackIfChanged {\n    /**\n     * Id or name or wildcard pattern or regex.\n     * Supports multiline and comma delineated combinations of the above.\n     *\n     * Example:\n     * ```text\n     * # match all foo-* stacks\n     * foo-*\n     * # add some more\n     * extra-stack-1, extra-stack-2\n     * ```\n     */\n    pattern: string;\n    /**\n     * Filter matches by tag.\n     * If empty, skips tag filtering.\n     */\n    tags?: string[];\n}"
    },
    {
      "name": "PullStack",
      "summary": "Pulls images for the target stack. `docker compose pull`. Response: Update",
      "schema": "/** Pulls images for the target stack. `docker compose pull`. Response: [Update] */\nexport interface PullStack {\n    /** Id or name */\n    stack: string;\n    /**\n     * Filter to only pull specific services.\n     * If empty, will pull all services.\n     */\n    services?: string[];\n}"
    },
    {
      "name": "BatchPullStack",
      "summary": "Pulls multiple Stacks in parallel that match pattern. Response: BatchExecutionResponse.",
      "schema": "/** Pulls multiple Stacks in parallel that match pattern. Response: [BatchExecutionResponse]. */\nexport interface BatchPullStack {\n    /**\n     * Id or name or wildcard pattern or regex.\n     * Supports multiline and comma delineated combinations of the above.\n     *\n     * Example:\n     * ```text\n     * # match all foo-* stacks\n     * foo-*\n     * # add some more\n     * extra-stack-1, extra-stack-2\n     * ```\n     */\n    pattern: string;\n    /**\n     * Filter matches by tag.\n     * If empty, skips tag filtering.\n     */\n    tags?: string[];\n}"
    },
    {
      "name": "StartStack",
      "summary": "Starts the target stack. `docker compose start`. Response: Update",
      "schema": "/** Starts the target stack. `docker compose start`. Response: [Update] */\nexport interface StartStack {\n    /** Id or name */\n    stack: string;\n    /**\n     * Filter to only start specific services.\n     * If empty, will start all services.\n     */\n    services?: string[];\n}"
    },
    {
      "name": "RestartStack",
      "summary": "Restarts the target stack. `docker compose restart`. Response: Update",
      "schema": "/** Restarts the target stack. `docker compose restart`. Response: [Update] */\nexport interface RestartStack {\n    /** Id or name */\n    stack: string;\n    /**\n     * Filter to only restart specific services.\n     * If empty, will restart all services.\n     */\n    services?: string[];\n}"
    },
    {
      "name": "StopStack",
      "summary": "Stops the target stack. `docker compose stop`. Response: Update",
      "schema": "/** Stops the target stack. `docker compose stop`. Response: [Update] */\nexport interface StopStack {\n    /** Id or name */\n    stack: string;\n    /** Override the default termination max time. */\n    stop_time?: number;\n    /**\n     * Filter to only stop specific services.\n     * If empty, will stop all services.\n     */\n    services?: string[];\n}"
    },
    {
      "name": "PauseStack",
      "summary": "Pauses the target stack. `docker compose pause`. Response: Update",
      "schema": "/** Pauses the target stack. `docker compose pause`. Response: [Update] */\nexport interface PauseStack {\n    /** Id or name */\n    stack: string;\n    /**\n     * Filter to only pause specific services.\n     * If empty, will pause all services.\n     */\n    services?: string[];\n}"
    },
    {
      "name": "UnpauseStack",
      "summary": "Unpauses the target stack. `docker compose unpause`. Response: Update. Note. This is the only way to restart a paused container.",
      "schema": "/**\n * Unpauses the target stack. `docker compose unpause`. Response: [Update].\n *\n * Note. This is the only way to restart a paused container.\n */\nexport interface UnpauseStack {\n    /** Id or name */\n    stack: string;\n    /**\n     * Filter to only unpause specific services.\n     * If empty, will unpause all services.\n     */\n    services?: string[];\n}"
    },
    {
      "name": "DestroyStack",
      "summary": "Destoys the target stack. `docker compose down`. Response: Update",
      "schema": "/** Destoys the target stack. `docker compose down`. Response: [Update] */\nexport interface DestroyStack {\n    /** Id or name */\n    stack: string;\n    /**\n     * Filter to only destroy specific services.\n     * If empty, will destroy all services.\n     */\n    services?: string[];\n    /** Pass `--remove-orphans` */\n    remove_orphans?: boolean;\n    /** Override the default termination max time. */\n    stop_time?: number;\n}"
    },
    {
      "name": "BatchDestroyStack",
      "summary": "Destroys multiple Stacks in parallel that match pattern. Response: BatchExecutionResponse.",
      "schema": "/** Destroys multiple Stacks in parallel that match pattern. Response: [BatchExecutionResponse]. */\nexport interface BatchDestroyStack {\n    /**\n     * Id or name or wildcard pattern or regex.\n     * Supports multiline and comma delineated combinations of the above.\n     *\n     * Example:\n     * ```text\n     * # match all foo-* stacks\n     * foo-*\n     * # add some more\n     * extra-stack-1, extra-stack-2\n     * ```\n     */\n    pattern: string;\n    /**\n     * Filter matches by tag.\n     * If empty, skips tag filtering.\n     */\n    tags?: string[];\n}"
    },
    {
      "name": "RunStackService",
      "summary": "Runs a one-time command against a service using `docker compose run`. Response: Update",
      "schema": "/** Runs a one-time command against a service using `docker compose run`. Response: [Update] */\nexport interface RunStackService {\n    /** Id or name */\n    stack: string;\n    /** Service to run */\n    service: string;\n    /** Command and args to pass to the service container */\n    command?: string[];\n    /** Do not allocate TTY */\n    no_tty?: boolean;\n    /** Do not start linked services */\n    no_deps?: boolean;\n    /** Detach container on run */\n    detach?: boolean;\n    /** Map service ports to the host */\n    service_ports?: boolean;\n    /** Extra environment variables for the run */\n    env?: Record<string, string>;\n    /** Working directory inside the container */\n    workdir?: string;\n    /** User to run as inside the container */\n    user?: string;\n    /** Override the default entrypoint */\n    entrypoint?: string;\n    /** Pull the image before running */\n    pull?: boolean;\n}"
    },
    {
      "name": "Deploy",
      "summary": "Deploys the container / swarm service for the target Deployment. Response: Update. For Server based Deployments (just a container): 1. Pulls the image onto the target server. 2. If the container is already running, it will be stopped and removed using `docker container rm ${container_name}`. 3. The container will be run using `docker run {...params}`, where params are determined by the deployment's configuration.",
      "schema": "/**\n * Deploys the container / swarm service for the target Deployment. Response: [Update].\n *\n * For Server based Deployments (just a container):\n * 1. Pulls the image onto the target server.\n * 2. If the container is already running,\n * it will be stopped and removed using `docker container rm ${container_name}`.\n * 3. The container will be run using `docker run {...params}`,\n * where params are determined by the deployment's configuration.\n */\nexport interface Deploy {\n    /** Name or id */\n    deployment: string;\n    /**\n     * Override the default termination signal specified in the deployment.\n     * Only used when deployment needs to be taken down before redeploy.\n     */\n    stop_signal?: TerminationSignal;\n    /**\n     * Override the default termination max time.\n     * Only used when deployment needs to be taken down before redeploy.\n     */\n    stop_time?: number;\n}"
    },
    {
      "name": "BatchDeploy",
      "summary": "Deploys multiple Deployments in parallel that match pattern. Response: BatchExecutionResponse.",
      "schema": "/** Deploys multiple Deployments in parallel that match pattern. Response: [BatchExecutionResponse]. */\nexport interface BatchDeploy {\n    /**\n     * Id or name or wildcard pattern or regex.\n     * Supports multiline and comma delineated combinations of the above.\n     *\n     * Example:\n     * ```text\n     * # match all foo-* deployments\n     * foo-*\n     * # add some more\n     * extra-deployment-1, extra-deployment-2\n     * ```\n     */\n    pattern: string;\n    /**\n     * Filter matches by tag.\n     * If empty, skips tag filtering.\n     */\n    tags?: string[];\n}"
    },
    {
      "name": "PullDeployment",
      "summary": "Pulls the image for the target deployment. Response: Update",
      "schema": "/** Pulls the image for the target deployment. Response: [Update] */\nexport interface PullDeployment {\n    /** Name or id */\n    deployment: string;\n}"
    },
    {
      "name": "StartDeployment",
      "summary": "Starts the container for the target deployment. Response: Update 1. Runs `docker start ${container_name}`.",
      "schema": "/**\n * Starts the container for the target deployment. Response: [Update]\n *\n * 1. Runs `docker start ${container_name}`.\n */\nexport interface StartDeployment {\n    /** Name or id */\n    deployment: string;\n}"
    },
    {
      "name": "RestartDeployment",
      "summary": "Restarts the container for the target deployment. Response: Update 1. Runs `docker restart ${container_name}`.",
      "schema": "/**\n * Restarts the container for the target deployment. Response: [Update]\n *\n * 1. Runs `docker restart ${container_name}`.\n */\nexport interface RestartDeployment {\n    /** Name or id */\n    deployment: string;\n}"
    },
    {
      "name": "PauseDeployment",
      "summary": "Pauses the container for the target deployment. Response: Update 1. Runs `docker pause ${container_name}`.",
      "schema": "/**\n * Pauses the container for the target deployment. Response: [Update]\n *\n * 1. Runs `docker pause ${container_name}`.\n */\nexport interface PauseDeployment {\n    /** Name or id */\n    deployment: string;\n}"
    },
    {
      "name": "UnpauseDeployment",
      "summary": "Unpauses the container for the target deployment. Response: Update 1. Runs `docker unpause ${container_name}`. Note. This is the only way to restart a paused container.",
      "schema": "/**\n * Unpauses the container for the target deployment. Response: [Update]\n *\n * 1. Runs `docker unpause ${container_name}`.\n *\n * Note. This is the only way to restart a paused container.\n */\nexport interface UnpauseDeployment {\n    /** Name or id */\n    deployment: string;\n}"
    },
    {
      "name": "StopDeployment",
      "summary": "Stops the container for the target deployment. Response: Update 1. Runs `docker stop ${container_name}`.",
      "schema": "/**\n * Stops the container for the target deployment. Response: [Update]\n *\n * 1. Runs `docker stop ${container_name}`.\n */\nexport interface StopDeployment {\n    /** Name or id */\n    deployment: string;\n    /** Override the default termination signal specified in the deployment. */\n    signal?: TerminationSignal;\n    /** Override the default termination max time. */\n    time?: number;\n}"
    },
    {
      "name": "DestroyDeployment",
      "summary": "Stops and destroys the container for the target deployment. Reponse: Update. 1. The container is stopped and removed using `docker container rm ${container_name}`.",
      "schema": "/**\n * Stops and destroys the container for the target deployment.\n * Reponse: [Update].\n *\n * 1. The container is stopped and removed using `docker container rm ${container_name}`.\n */\nexport interface DestroyDeployment {\n    /** Name or id. */\n    deployment: string;\n    /** Override the default termination signal specified in the deployment. */\n    signal?: TerminationSignal;\n    /** Override the default termination max time. */\n    time?: number;\n}"
    },
    {
      "name": "BatchDestroyDeployment",
      "summary": "Destroys multiple Deployments in parallel that match pattern. Response: BatchExecutionResponse.",
      "schema": "/** Destroys multiple Deployments in parallel that match pattern. Response: [BatchExecutionResponse]. */\nexport interface BatchDestroyDeployment {\n    /**\n     * Id or name or wildcard pattern or regex.\n     * Supports multiline and comma delineated combinations of the above.\n     *\n     * Example:\n     * ```text\n     * # match all foo-* deployments\n     * foo-*\n     * # add some more\n     * extra-deployment-1, extra-deployment-2\n     * ```\n     */\n    pattern: string;\n    /**\n     * Filter matches by tag.\n     * If empty, skips tag filtering.\n     */\n    tags?: string[];\n}"
    },
    {
      "name": "RunBuild",
      "summary": "Runs the target build. Response: Update. 1. Get a handle to the builder. If using AWS builder, this means starting a builder ec2 instance. 2. Clone the repo on the builder. If an `on_clone` commmand is given, it will be executed. 3. Execute `docker build {...params}`, where params are determined using the builds configuration. 4. If a docker registry is configured, the build will be pushed to the registry. 5. If using AWS builder, destroy the builder ec2 instance. 6. Deploy any Deployments with ",
      "schema": "/**\n * Runs the target build. Response: [Update].\n *\n * 1. Get a handle to the builder. If using AWS builder, this means starting a builder ec2 instance.\n *\n * 2. Clone the repo on the builder. If an `on_clone` commmand is given, it will be executed.\n *\n * 3. Execute `docker build {...params}`, where params are determined using the builds configuration.\n *\n * 4. If a docker registry is configured, the build will be pushed to the registry.\n *\n * 5. If using AWS builder, destroy the builder ec2 instance.\n *\n * 6. Deploy any Deployments with *Redeploy on Build* enabled.\n */\nexport interface RunBuild {\n    /** Can be build id or name */\n    build: string;\n}"
    },
    {
      "name": "BatchRunBuild",
      "summary": "Runs multiple builds in parallel that match pattern. Response: BatchExecutionResponse.",
      "schema": "/** Runs multiple builds in parallel that match pattern. Response: [BatchExecutionResponse]. */\nexport interface BatchRunBuild {\n    /**\n     * Id or name or wildcard pattern or regex.\n     * Supports multiline and comma delineated combinations of the above.\n     *\n     * Example:\n     * ```text\n     * # match all foo-* builds\n     * foo-*\n     * # add some more\n     * extra-build-1, extra-build-2\n     * ```\n     */\n    pattern: string;\n    /**\n     * Filter matches by tag.\n     * If empty, skips tag filtering.\n     */\n    tags?: string[];\n}"
    },
    {
      "name": "CancelBuild",
      "summary": "Cancels the target build. Only does anything if the build is `building` when called.",
      "schema": "/**\n * Cancels the target build.\n * Only does anything if the build is `building` when called.\n * Response: [Update]\n */\nexport interface CancelBuild {\n    /** Can be id or name */\n    build: string;\n}"
    },
    {
      "name": "CloneRepo",
      "summary": "Clones the target repo. Response: Update. Note. Repo must have server attached at `server_id`. 1. Clones the repo on the target server using `git clone https://{$token?}@github.com/${repo} -b ${branch}`. The token will only be used if a github account is specified, and must be declared in the periphery configuration on the target server. 2. If `on_clone` and `on_pull` are specified, they will be executed. `on_clone` will be executed before `on_pull`.",
      "schema": "/**\n * Clones the target repo. Response: [Update].\n *\n * Note. Repo must have server attached at `server_id`.\n *\n * 1. Clones the repo on the target server using `git clone https://{$token?}@github.com/${repo} -b ${branch}`.\n * The token will only be used if a github account is specified,\n * and must be declared in the periphery configuration on the target server.\n * 2. If `on_clone` and `on_pull` are specified, they will be executed.\n * `on_clone` will be executed before `on_pull`.\n */\nexport interface CloneRepo {\n    /** Id or name */\n    repo: string;\n}"
    },
    {
      "name": "BatchCloneRepo",
      "summary": "Clones multiple Repos in parallel that match pattern. Response: BatchExecutionResponse.",
      "schema": "/** Clones multiple Repos in parallel that match pattern. Response: [BatchExecutionResponse]. */\nexport interface BatchCloneRepo {\n    /**\n     * Id or name or wildcard pattern or regex.\n     * Supports multiline and comma delineated combinations of the above.\n     *\n     * Example:\n     * ```text\n     * # match all foo-* repos\n     * foo-*\n     * # add some more\n     * extra-repo-1, extra-repo-2\n     * ```\n     */\n    pattern: string;\n    /**\n     * Filter matches by tag.\n     * If empty, skips tag filtering.\n     */\n    tags?: string[];\n}"
    },
    {
      "name": "PullRepo",
      "summary": "Pulls the target repo. Response: Update. Note. Repo must have server attached at `server_id`. 1. Pulls the repo on the target server using `git pull`. 2. If `on_pull` is specified, it will be executed after the pull is complete.",
      "schema": "/**\n * Pulls the target repo. Response: [Update].\n *\n * Note. Repo must have server attached at `server_id`.\n *\n * 1. Pulls the repo on the target server using `git pull`.\n * 2. If `on_pull` is specified, it will be executed after the pull is complete.\n */\nexport interface PullRepo {\n    /** Id or name */\n    repo: string;\n}"
    },
    {
      "name": "BatchPullRepo",
      "summary": "Pulls multiple Repos in parallel that match pattern. Response: BatchExecutionResponse.",
      "schema": "/** Pulls multiple Repos in parallel that match pattern. Response: [BatchExecutionResponse]. */\nexport interface BatchPullRepo {\n    /**\n     * Id or name or wildcard pattern or regex.\n     * Supports multiline and comma delineated combinations of the above.\n     *\n     * Example:\n     * ```text\n     * # match all foo-* repos\n     * foo-*\n     * # add some more\n     * extra-repo-1, extra-repo-2\n     * ```\n     */\n    pattern: string;\n    /**\n     * Filter matches by tag.\n     * If empty, skips tag filtering.\n     */\n    tags?: string[];\n}"
    },
    {
      "name": "BuildRepo",
      "summary": "Builds the target repo, using the attached builder. Response: Update. Note. Repo must have builder attached at `builder_id`. 1. Spawns the target builder instance (For AWS type. For Server type, just use CloneRepo). 2. Clones the repo on the builder using `git clone https://{$token?}@github.com/${repo} -b ${branch}`. The token will only be used if a github account is specified, and must be declared in the periphery configuration on the builder instance. 3. If `on_clone` and `on_pull` are specifi",
      "schema": "/**\n * Builds the target repo, using the attached builder. Response: [Update].\n *\n * Note. Repo must have builder attached at `builder_id`.\n *\n * 1. Spawns the target builder instance (For AWS type. For Server type, just use CloneRepo).\n * 2. Clones the repo on the builder using `git clone https://{$token?}@github.com/${repo} -b ${branch}`.\n * The token will only be used if a github account is specified,\n * and must be declared in the periphery configuration on the builder instance.\n * 3. If `on_clone` and `on_pull` are specified, they will be executed.\n * `on_clone` will be executed before `on_pull`.\n */\nexport interface BuildRepo {\n    /** Id or name */\n    repo: string;\n}"
    },
    {
      "name": "BatchBuildRepo",
      "summary": "Builds multiple Repos in parallel that match pattern. Response: BatchExecutionResponse.",
      "schema": "/** Builds multiple Repos in parallel that match pattern. Response: [BatchExecutionResponse]. */\nexport interface BatchBuildRepo {\n    /**\n     * Id or name or wildcard pattern or regex.\n     * Supports multiline and comma delineated combinations of the above.\n     *\n     * Example:\n     * ```text\n     * # match all foo-* repos\n     * foo-*\n     * # add some more\n     * extra-repo-1, extra-repo-2\n     * ```\n     */\n    pattern: string;\n    /**\n     * Filter matches by tag.\n     * If empty, skips tag filtering.\n     */\n    tags?: string[];\n}"
    },
    {
      "name": "CancelRepoBuild",
      "summary": "Cancels the target repo build. Only does anything if the repo build is `building` when called.",
      "schema": "/**\n * Cancels the target repo build.\n * Only does anything if the repo build is `building` when called.\n * Response: [Update]\n */\nexport interface CancelRepoBuild {\n    /** Can be id or name */\n    repo: string;\n}"
    },
    {
      "name": "RunProcedure",
      "summary": "Runs the target Procedure. Response: Update",
      "schema": "/** Runs the target Procedure. Response: [Update] */\nexport interface RunProcedure {\n    /** Id or name */\n    procedure: string;\n}"
    },
    {
      "name": "BatchRunProcedure",
      "summary": "Runs multiple Procedures in parallel that match pattern. Response: BatchExecutionResponse.",
      "schema": "/** Runs multiple Procedures in parallel that match pattern. Response: [BatchExecutionResponse]. */\nexport interface BatchRunProcedure {\n    /**\n     * Id or name or wildcard pattern or regex.\n     * Supports multiline and comma delineated combinations of the above.\n     *\n     * Example:\n     * ```text\n     * # match all foo-* procedures\n     * foo-*\n     * # add some more\n     * extra-procedure-1, extra-procedure-2\n     * ```\n     */\n    pattern: string;\n    /**\n     * Filter matches by tag.\n     * If empty, skips tag filtering.\n     */\n    tags?: string[];\n}"
    },
    {
      "name": "CancelProcedure",
      "summary": "Cancels the target procedure run. Response: Update",
      "schema": "/** Cancels the target procedure run. Response: [Update] */\nexport interface CancelProcedure {\n    /** Id or name */\n    procedure: string;\n    /**\n     * The update id associated with the specific\n     * run to cancel\n     * Must provide either `action`\n     * or `update_id`\n     */\n    update_id?: string;\n}"
    },
    {
      "name": "RunAction",
      "summary": "Runs the target Action. Response: Update",
      "schema": "/** Runs the target Action. Response: [Update] */\nexport interface RunAction {\n    /** Id or name */\n    action: string;\n    /**\n     * Custom arguments which are merged on top of the default arguments.\n     * CLI Format: `\"VAR1=val1&VAR2=val2\"`\n     *\n     * Webhook-triggered actions use this to pass WEBHOOK_BRANCH and WEBHOOK_BODY.\n     */\n    args?: JsonObject;\n}"
    },
    {
      "name": "BatchRunAction",
      "summary": "Runs multiple Actions in parallel that match pattern. Response: BatchExecutionResponse",
      "schema": "/** Runs multiple Actions in parallel that match pattern. Response: [BatchExecutionResponse] */\nexport interface BatchRunAction {\n    /**\n     * Id or name or wildcard pattern or regex.\n     * Supports multiline and comma delineated combinations of the above.\n     *\n     * Example:\n     * ```text\n     * # match all foo-* actions\n     * foo-*\n     * # add some more\n     * extra-action-1, extra-action-2\n     * ```\n     */\n    pattern: string;\n    /**\n     * Filter matches by tag.\n     * If empty, skips tag filtering.\n     */\n    tags?: string[];\n}"
    },
    {
      "name": "CancelAction",
      "summary": "Cancels the target action run. Response: Update",
      "schema": "/** Cancels the target action run. Response: [Update] */\nexport interface CancelAction {\n    /** Id or name */\n    action: string;\n    /**\n     * The update id associated with the specific\n     * run to cancel\n     * Must provide either `action`\n     * or `update_id`\n     */\n    update_id?: string;\n}"
    },
    {
      "name": "RunSync",
      "summary": "Runs the target resource sync. Response: Update",
      "schema": "/** Runs the target resource sync. Response: [Update] */\nexport interface RunSync {\n    /** Id or name */\n    sync: string;\n    /**\n     * Only execute sync on a specific resource type.\n     * Combine with `resource_id` to specify resource.\n     */\n    resource_type?: ResourceTarget[\"type\"];\n    /**\n     * Only execute sync on a specific resources.\n     * Combine with `resource_type` to specify resources.\n     * Supports name or id.\n     */\n    resources?: string[];\n}"
    },
    {
      "name": "TestAlerter",
      "summary": "Tests an Alerters ability to reach the configured endpoint. Response: Update",
      "schema": "/** Tests an Alerters ability to reach the configured endpoint. Response: [Update] */\nexport interface TestAlerter {\n    /** Name or id */\n    alerter: string;\n}"
    },
    {
      "name": "SendAlert",
      "summary": "Send a custom alert message to configured Alerters. Response: Update. Alias: `alert`",
      "schema": "/**\n * Send a custom alert message to configured Alerters. Response: [Update].\n * Alias: `alert`\n */\nexport interface SendAlert {\n    /** The alert level. */\n    level?: SeverityLevel;\n    /** The alert message. Required. */\n    message: string;\n    /** The alert details. Optional. */\n    details?: string;\n    /**\n     * Specific alerter names or ids.\n     * If empty / not passed, sends to all configured alerters\n     * with the `Custom` alert type whitelisted / not blacklisted.\n     */\n    alerters?: string[];\n}"
    },
    {
      "name": "StartContainer",
      "summary": "Starts the container on the target server. Response: Update 1. Runs `docker start ${container_name}`.",
      "schema": "/**\n * Starts the container on the target server. Response: [Update]\n *\n * 1. Runs `docker start ${container_name}`.\n */\nexport interface StartContainer {\n    /** Name or id */\n    server: string;\n    /** The container name */\n    container: string;\n}"
    },
    {
      "name": "RestartContainer",
      "summary": "Restarts the container on the target server. Response: Update 1. Runs `docker restart ${container_name}`.",
      "schema": "/**\n * Restarts the container on the target server. Response: [Update]\n *\n * 1. Runs `docker restart ${container_name}`.\n */\nexport interface RestartContainer {\n    /** Name or id */\n    server: string;\n    /** The container name */\n    container: string;\n}"
    },
    {
      "name": "PauseContainer",
      "summary": "Pauses the container on the target server. Response: Update 1. Runs `docker pause ${container_name}`.",
      "schema": "/**\n * Pauses the container on the target server. Response: [Update]\n *\n * 1. Runs `docker pause ${container_name}`.\n */\nexport interface PauseContainer {\n    /** Name or id */\n    server: string;\n    /** The container name */\n    container: string;\n}"
    },
    {
      "name": "UnpauseContainer",
      "summary": "Unpauses the container on the target server. Response: Update 1. Runs `docker unpause ${container_name}`. Note. This is the only way to restart a paused container.",
      "schema": "/**\n * Unpauses the container on the target server. Response: [Update]\n *\n * 1. Runs `docker unpause ${container_name}`.\n *\n * Note. This is the only way to restart a paused container.\n */\nexport interface UnpauseContainer {\n    /** Name or id */\n    server: string;\n    /** The container name */\n    container: string;\n}"
    },
    {
      "name": "StopContainer",
      "summary": "Stops the container on the target server. Response: Update 1. Runs `docker stop ${container_name}`.",
      "schema": "/**\n * Stops the container on the target server. Response: [Update]\n *\n * 1. Runs `docker stop ${container_name}`.\n */\nexport interface StopContainer {\n    /** Name or id */\n    server: string;\n    /** The container name */\n    container: string;\n    /** Override the default termination signal. */\n    signal?: TerminationSignal;\n    /** Override the default termination max time. */\n    time?: number;\n}"
    },
    {
      "name": "DestroyContainer",
      "summary": "Stops and destroys the container on the target server. Reponse: Update. 1. The container is stopped and removed using `docker container rm ${container_name}`.",
      "schema": "/**\n * Stops and destroys the container on the target server.\n * Reponse: [Update].\n *\n * 1. The container is stopped and removed using `docker container rm ${container_name}`.\n */\nexport interface DestroyContainer {\n    /** Name or id */\n    server: string;\n    /** The container name */\n    container: string;\n    /** Override the default termination signal. */\n    signal?: TerminationSignal;\n    /** Override the default termination max time. */\n    time?: number;\n}"
    },
    {
      "name": "StartAllContainers",
      "summary": "Starts all containers on the target server. Response: Update",
      "schema": "/** Starts all containers on the target server. Response: [Update] */\nexport interface StartAllContainers {\n    /** Name or id */\n    server: string;\n}"
    },
    {
      "name": "RestartAllContainers",
      "summary": "Restarts all containers on the target server. Response: Update",
      "schema": "/** Restarts all containers on the target server. Response: [Update] */\nexport interface RestartAllContainers {\n    /** Name or id */\n    server: string;\n}"
    },
    {
      "name": "PauseAllContainers",
      "summary": "Pauses all containers on the target server. Response: Update",
      "schema": "/** Pauses all containers on the target server. Response: [Update] */\nexport interface PauseAllContainers {\n    /** Name or id */\n    server: string;\n}"
    },
    {
      "name": "UnpauseAllContainers",
      "summary": "Unpauses all containers on the target server. Response: Update",
      "schema": "/** Unpauses all containers on the target server. Response: [Update] */\nexport interface UnpauseAllContainers {\n    /** Name or id */\n    server: string;\n}"
    },
    {
      "name": "StopAllContainers",
      "summary": "Stops all containers on the target server. Response: Update",
      "schema": "/** Stops all containers on the target server. Response: [Update] */\nexport interface StopAllContainers {\n    /** Name or id */\n    server: string;\n}"
    },
    {
      "name": "PruneContainers",
      "summary": "Prunes the docker containers on the target server. Response: Update. 1. Runs `docker container prune -f`.",
      "schema": "/**\n * Prunes the docker containers on the target server. Response: [Update].\n *\n * 1. Runs `docker container prune -f`.\n */\nexport interface PruneContainers {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "DeleteNetwork",
      "summary": "Delete a docker network.",
      "schema": "/**\n * Delete a docker network.\n * Response: [Update]\n */\nexport interface DeleteNetwork {\n    /** Id or name. */\n    server: string;\n    /** The name of the network to delete. */\n    name: string;\n}"
    },
    {
      "name": "PruneNetworks",
      "summary": "Prunes the docker networks on the target server. Response: Update. 1. Runs `docker network prune -f`.",
      "schema": "/**\n * Prunes the docker networks on the target server. Response: [Update].\n *\n * 1. Runs `docker network prune -f`.\n */\nexport interface PruneNetworks {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "DeleteImage",
      "summary": "Delete a docker image.",
      "schema": "/**\n * Delete a docker image.\n * Response: [Update]\n */\nexport interface DeleteImage {\n    /** Id or name. */\n    server: string;\n    /** The name of the image to delete. */\n    name: string;\n}"
    },
    {
      "name": "PruneImages",
      "summary": "Prunes the docker images on the target server. Response: Update. 1. Runs `docker image prune -a -f`.",
      "schema": "/**\n * Prunes the docker images on the target server. Response: [Update].\n *\n * 1. Runs `docker image prune -a -f`.\n */\nexport interface PruneImages {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "DeleteVolume",
      "summary": "Delete a docker volume.",
      "schema": "/**\n * Delete a docker volume.\n * Response: [Update]\n */\nexport interface DeleteVolume {\n    /** Id or name. */\n    server: string;\n    /** The name of the volume to delete. */\n    name: string;\n}"
    },
    {
      "name": "PruneVolumes",
      "summary": "Prunes the docker volumes on the target server. Response: Update. 1. Runs `docker volume prune -a -f`.",
      "schema": "/**\n * Prunes the docker volumes on the target server. Response: [Update].\n *\n * 1. Runs `docker volume prune -a -f`.\n */\nexport interface PruneVolumes {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "PruneDockerBuilders",
      "summary": "Prunes the docker builders on the target server. Response: Update. 1. Runs `docker builder prune -a -f`.",
      "schema": "/**\n * Prunes the docker builders on the target server. Response: [Update].\n *\n * 1. Runs `docker builder prune -a -f`.\n */\nexport interface PruneDockerBuilders {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "PruneBuildx",
      "summary": "Prunes the docker buildx cache on the target server. Response: Update. 1. Runs `docker buildx prune -a -f`.",
      "schema": "/**\n * Prunes the docker buildx cache on the target server. Response: [Update].\n *\n * 1. Runs `docker buildx prune -a -f`.\n */\nexport interface PruneBuildx {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "PruneSystem",
      "summary": "Prunes the docker system on the target server, including volumes. Response: Update. 1. Runs `docker system prune -a -f --volumes`.",
      "schema": "/**\n * Prunes the docker system on the target server, including volumes. Response: [Update].\n *\n * 1. Runs `docker system prune -a -f --volumes`.\n */\nexport interface PruneSystem {\n    /** Id or name */\n    server: string;\n}"
    },
    {
      "name": "RemoveSwarmNodes",
      "summary": "`docker node rm OPTIONS NODE NODE...` https://docs.docker.com/reference/cli/docker/node/rm/",
      "schema": "/**\n * `docker node rm [OPTIONS] NODE [NODE...]`\n *\n * https://docs.docker.com/reference/cli/docker/node/rm/\n */\nexport interface RemoveSwarmNodes {\n    /** Name or id */\n    swarm: string;\n    /** Node names or ids to remove */\n    nodes: string[];\n    /** Force remove a node from the swarm */\n    force?: boolean;\n}"
    },
    {
      "name": "UpdateSwarmNode",
      "summary": "`docker node update OPTIONS NODE` https://docs.docker.com/reference/cli/docker/node/update/",
      "schema": "/**\n * `docker node update [OPTIONS] NODE`\n *\n * https://docs.docker.com/reference/cli/docker/node/update/\n */\nexport interface UpdateSwarmNode {\n    /** Name or id */\n    swarm: string;\n    /** Node hostname or id */\n    node: string;\n    /** Update the node's availability: 'active', 'pause', or 'drain' */\n    availability?: NodeSpecAvailabilityEnum;\n    /** Add labels to node (`key=value`). */\n    label_add?: string[];\n    /** Add labels to node (`key=value`). (alias: `lr`) */\n    label_rm?: string[];\n    /** Update the node's role: 'worker' or 'manager' */\n    role?: NodeSpecRoleEnum;\n}"
    },
    {
      "name": "RemoveSwarmStacks",
      "summary": "`docker stack rm OPTIONS STACK STACK...` https://docs.docker.com/reference/cli/docker/stack/rm/",
      "schema": "/**\n * `docker stack rm [OPTIONS] STACK [STACK...]`\n *\n * https://docs.docker.com/reference/cli/docker/stack/rm/\n */\nexport interface RemoveSwarmStacks {\n    /** Name or id */\n    swarm: string;\n    /** Node names to remove */\n    stacks: string[];\n    /** Do not wait for stack removal */\n    detach: boolean;\n}"
    },
    {
      "name": "RemoveSwarmServices",
      "summary": "`docker service rm SERVICE SERVICE...` https://docs.docker.com/reference/cli/docker/service/rm/",
      "schema": "/**\n * `docker service rm SERVICE [SERVICE...]`\n *\n * https://docs.docker.com/reference/cli/docker/service/rm/\n */\nexport interface RemoveSwarmServices {\n    /** Name or id */\n    swarm: string;\n    /** Service names or ids */\n    services: string[];\n}"
    },
    {
      "name": "CreateSwarmConfig",
      "summary": "`docker config create OPTIONS CONFIG file|-` https://docs.docker.com/reference/cli/docker/config/create/",
      "schema": "/**\n * `docker config create [OPTIONS] CONFIG file|-`\n *\n * https://docs.docker.com/reference/cli/docker/config/create/\n */\nexport interface CreateSwarmConfig {\n    /** Name or id */\n    swarm: string;\n    /** The name of the config to create */\n    name: string;\n    /** The data to store in the config */\n    data: string;\n    /** Docker labels to give the config */\n    labels?: string[];\n    /** Optional custom template driver */\n    template_driver?: string;\n}"
    },
    {
      "name": "RotateSwarmConfig",
      "summary": "https://docs.docker.com/engine/swarm/configs/#example-rotate-a-config Swarm configs / secrets are immutable after creation. This making updating values awkward when you have services actively using them. The following steps allows for config rotation while minimizing downtime. 1. Query for all services using the config - If not in use by any services, can simply `remove` and `create` the config. - Otherwise, continue with following steps 2. `Create` config `{config}-tmp` using provided data 3. `",
      "schema": "/**\n * https://docs.docker.com/engine/swarm/configs/#example-rotate-a-config\n *\n * Swarm configs / secrets are immutable after creation.\n * This making updating values awkward when you have services actively using them.\n * The following steps allows for config rotation while minimizing downtime.\n *\n * 1. Query for all services using the config\n * - If not in use by any services, can simply `remove` and `create` the config.\n * - Otherwise, continue with following steps\n * 2. `Create` config `{config}-tmp` using provided data\n * 3. `Update` services to use `tmp` config\n * 4. `Remove` and `create` the actual config. This is now possible because services are using the tmp config.\n * 5. `Update` services to use actual (not `tmp`) config again.\n */\nexport interface RotateSwarmConfig {\n    /** Name or id */\n    swarm: string;\n    /** Config name */\n    config: string;\n    /** The new config data as a string */\n    data: string;\n}"
    },
    {
      "name": "RemoveSwarmConfigs",
      "summary": "`docker config rm CONFIG CONFIG...` https://docs.docker.com/reference/cli/docker/config/rm/",
      "schema": "/**\n * `docker config rm CONFIG [CONFIG...]`\n *\n * https://docs.docker.com/reference/cli/docker/config/rm/\n */\nexport interface RemoveSwarmConfigs {\n    /** Name or id */\n    swarm: string;\n    /** Config names or ids */\n    configs: string[];\n}"
    },
    {
      "name": "CreateSwarmSecret",
      "summary": "`docker config create OPTIONS CONFIG file|-` https://docs.docker.com/reference/cli/docker/config/create/",
      "schema": "/**\n * `docker config create [OPTIONS] CONFIG file|-`\n *\n * https://docs.docker.com/reference/cli/docker/config/create/\n */\nexport interface CreateSwarmSecret {\n    /** Name or id */\n    swarm: string;\n    /** The name of the secret to create */\n    name: string;\n    /** The data to store in the secret */\n    data: string;\n    /** Optional custom secret driver */\n    driver?: string;\n    /** Docker labels to give the secret */\n    labels?: string[];\n    /** Optional custom template driver */\n    template_driver?: string;\n}"
    },
    {
      "name": "RotateSwarmSecret",
      "summary": "https://docs.docker.com/engine/swarm/secrets/#example-rotate-a-secret Swarm configs / secrets are immutable after creation. This making updating values awkward when you have services actively using them. The following steps allows for secret rotation while minimizing downtime. 1. Query for all services using the secret - If not in use by any services, can simply `remove` and `create` the secret. - Otherwise, continue with following steps 2. `Create` secret `{secret}-tmp` using provided data 3. `",
      "schema": "/**\n * https://docs.docker.com/engine/swarm/secrets/#example-rotate-a-secret\n *\n * Swarm configs / secrets are immutable after creation.\n * This making updating values awkward when you have services actively using them.\n * The following steps allows for secret rotation while minimizing downtime.\n *\n * 1. Query for all services using the secret\n * - If not in use by any services, can simply `remove` and `create` the secret.\n * - Otherwise, continue with following steps\n * 2. `Create` secret `{secret}-tmp` using provided data\n * 3. `Update` services to use `tmp` secret\n * 4. `Remove` and `create` the actual secret. This is now possible because services are using the tmp secret.\n * 5. `Update` services to use actual (not `tmp`) secret again.\n */\nexport interface RotateSwarmSecret {\n    /** Name or id */\n    swarm: string;\n    /** Secret name */\n    secret: string;\n    /** The new secret data as a string */\n    data: string;\n}"
    },
    {
      "name": "RemoveSwarmSecrets",
      "summary": "`docker secret rm SECRET SECRET...` https://docs.docker.com/reference/cli/docker/secret/rm/",
      "schema": "/**\n * `docker secret rm SECRET [SECRET...]`\n *\n * https://docs.docker.com/reference/cli/docker/secret/rm/\n */\nexport interface RemoveSwarmSecrets {\n    /** Name or id */\n    swarm: string;\n    /** Secret names or ids */\n    secrets: string[];\n}"
    },
    {
      "name": "ClearRepoCache",
      "summary": "**Admin only.** Clears all repos from the Core repo cache.",
      "schema": "/**\n * **Admin only.** Clears all repos from the Core repo cache.\n * Response: [Update]\n */\nexport interface ClearRepoCache {\n}"
    },
    {
      "name": "BackupCoreDatabase",
      "summary": "**Admin only.** Backs up the Komodo Core database to compressed jsonl files. Mount a folder to `/backups`, and Core will use it to create timestamped database dumps, which can be restored using the Komodo CLI. https://komo.do/docs/setup/backup",
      "schema": "/**\n * **Admin only.** Backs up the Komodo Core database to compressed jsonl files.\n * Response: [Update]. Aliases: `backup-database`, `backup-db`, `backup`.\n *\n * Mount a folder to `/backups`, and Core will use it to create\n * timestamped database dumps, which can be restored using\n * the Komodo CLI.\n *\n * https://komo.do/docs/setup/backup\n */\nexport interface BackupCoreDatabase {\n}"
    },
    {
      "name": "GlobalAutoUpdate",
      "summary": "**Admin only.** Trigger a global poll for image updates on Stacks and Deployments with `poll_for_updates` or `auto_update` enabled. 1. Run CheckStackForUpdate / CheckDeploymentForUpdate any Stacks / Deployments with `poll_for_updates` or `auto_update` enabled. This will pick up any available updates. 2. Redeploy Stacks / Deployments that have updates found and 'auto_update' enabled. - Skip this using 'skip_auto_update', preferring to only alert even for 'auto_update' resources.",
      "schema": "/**\n * **Admin only.** Trigger a global poll for image updates on Stacks and Deployments\n * with `poll_for_updates` or `auto_update` enabled.\n * Response: [Update]. Alias: `auto-update`.\n *\n * 1. Run CheckStackForUpdate / CheckDeploymentForUpdate any Stacks / Deployments with `poll_for_updates` or `auto_update` enabled.\n * This will pick up any available updates.\n * 2. Redeploy Stacks / Deployments that have updates found and 'auto_update' enabled.\n * - Skip this using 'skip_auto_update', preferring to only alert even for 'auto_update' resources.\n */\nexport interface GlobalAutoUpdate {\n    /**\n     * Normally resources with 'auto_update' will be\n     * redeployed immediately if updates are found.\n     * With this enabled, convert this into an UpdateAvailable alert.\n     */\n    skip_auto_update?: boolean;\n}"
    },
    {
      "name": "RotateAllServerKeys",
      "summary": "**Admin only.** Rotates all connected Server keys.",
      "schema": "/**\n * **Admin only.** Rotates all connected Server keys.\n * Response: [Update]. Alias: `rotate-keys`.\n */\nexport interface RotateAllServerKeys {\n}"
    },
    {
      "name": "RotateCoreKeys",
      "summary": "**Admin only.** Rotates the Core private key, and all Server public keys. If any Server is `NotOk`, this will fail. To proceed anyways, pass `force: true`.",
      "schema": "/**\n * **Admin only.** Rotates the Core private key,\n * and all Server public keys.\n * Response: [Update].\n *\n * If any Server is `NotOk`, this will fail.\n * To proceed anyways, pass `force: true`.\n */\nexport interface RotateCoreKeys {\n    /**\n     * Force the rotation to proceed even if a Server is `NotOk`.\n     * The Core Public Key in Periphery config may have to be updated manually.\n     * (alias: `f`)\n     */\n    force?: boolean;\n}"
    }
  ]
} as const;
export type NativeChannel = keyof typeof operationCatalog;
