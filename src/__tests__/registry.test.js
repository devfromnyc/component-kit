import { describe, expect, it } from "vitest";
import registry from "../registry.js";
import { validateRegistry } from "../validateRegistry.js";

describe("registry", () => {
  it("passes validation", () => {
    const result = validateRegistry(registry);
    expect(result.errors).toEqual([]);
    expect(result.ok).toBe(true);
  });
});
