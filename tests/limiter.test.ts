import { describe, expect, it } from "vitest";
import { InvocationLimiter } from "../src/limiter.js";

describe("InvocationLimiter", () => {
  it("rejects calls above the per-minute limit", async () => {
    const limiter = new InvocationLimiter(2, 1, () => 1_000);
    await expect(limiter.run(async () => "ok")).resolves.toBe("ok");
    await expect(limiter.run(async () => "nope")).rejects.toThrow("rate limit exceeded");
  });

  it("rejects excess concurrent calls", async () => {
    const limiter = new InvocationLimiter(1, 10);
    let release!: () => void;
    const blocked = limiter.run(
      () => new Promise<string>((resolve) => (release = () => resolve("done"))),
    );
    await expect(limiter.run(async () => "nope")).rejects.toThrow("concurrency limit exceeded");
    release();
    await expect(blocked).resolves.toBe("done");
  });
});
