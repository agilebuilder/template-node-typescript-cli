import { describe, expect, it } from "vitest";
import { greet } from "../src/lib/greet";

describe("greet", () => {
  it("用给定的名字生成问候语", () => {
    expect(greet("AgileBuilder")).toBe("Hello, AgileBuilder!");
  });

  it("名字为空白时回退到 world", () => {
    expect(greet("   ")).toBe("Hello, world!");
  });

  it("忽略名字两端的空白", () => {
    expect(greet("  cli  ")).toBe("Hello, cli!");
  });
});
