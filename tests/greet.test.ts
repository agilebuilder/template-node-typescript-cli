import { describe, expect, it } from "vitest";
import { greet } from "../src/lib/greet";

describe("greet", () => {
  it("greets with the given name", () => {
    expect(greet("AgileBuilder")).toBe("Hello, AgileBuilder!");
  });

  it("falls back to world when the name is blank", () => {
    expect(greet("   ")).toBe("Hello, world!");
  });

  it("trims whitespace around the name", () => {
    expect(greet("  cli  ")).toBe("Hello, cli!");
  });
});
