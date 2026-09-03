export class InvocationLimiter {
  private active = 0;
  private readonly starts: number[] = [];

  constructor(
    private readonly maxConcurrency: number,
    private readonly rateLimitPerMinute: number,
    private readonly now: () => number = Date.now,
  ) {}

  async run<T>(operation: () => Promise<T>): Promise<T> {
    const now = this.now();
    const cutoff = now - 60_000;
    while (this.starts.length > 0 && this.starts[0]! <= cutoff) this.starts.shift();

    if (this.starts.length >= this.rateLimitPerMinute) {
      throw new Error(
        `MCP invocation rate limit exceeded (${this.rateLimitPerMinute} calls per minute)`,
      );
    }
    if (this.active >= this.maxConcurrency) {
      throw new Error(
        `MCP concurrency limit exceeded (${this.maxConcurrency} active calls)`,
      );
    }

    this.starts.push(now);
    this.active += 1;
    try {
      return await operation();
    } finally {
      this.active -= 1;
    }
  }
}
