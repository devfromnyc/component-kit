import { describe, expect, it } from "vitest";
import { validateRegistry } from "../validateRegistry.js";

describe("validateRegistry", () => {
  it("rejects missing id", () => {
    const result = validateRegistry([
      {
        name: "Hero",
        type: "marketing",
        description: "x",
        component: () => null,
        defaults: { content: { heading: "Hi" } },
        controls: [],
      },
    ]);
    expect(result.ok).toBe(false);
    expect(result.errors.join(" ")).toMatch(/id/);
  });

  it("rejects duplicate ids", () => {
    const entry = {
      id: "hero",
      name: "Hero",
      type: "marketing",
      description: "x",
      component: () => null,
      defaults: { content: { heading: "Hi" } },
      controls: [],
    };
    const result = validateRegistry([entry, { ...entry }]);
    expect(result.ok).toBe(false);
    expect(result.errors.join(" ")).toMatch(/duplicate/);
  });

  it("rejects invalid type", () => {
    const result = validateRegistry([
      {
        id: "hero",
        name: "Hero",
        type: "widget",
        description: "x",
        component: () => null,
        defaults: { content: {} },
        controls: [],
      },
    ]);
    expect(result.ok).toBe(false);
  });

  it("rejects controls that point at missing default keys", () => {
    const result = validateRegistry([
      {
        id: "hero",
        name: "Hero",
        type: "marketing",
        description: "x",
        component: () => null,
        defaults: { content: { heading: "Hi" } },
        controls: [{ group: "layout", key: "align", label: "Align", kind: "select", options: ["left"] }],
      },
    ]);
    expect(result.ok).toBe(false);
    expect(result.errors.join(" ")).toMatch(/align/);
  });

  it("accepts a valid entry", () => {
    const result = validateRegistry([
      {
        id: "hero",
        name: "Hero",
        type: "marketing",
        description: "x",
        component: () => null,
        defaults: { content: { heading: "Hi" }, layout: { align: "left" } },
        controls: [
          { group: "content", key: "heading", label: "Heading", kind: "text" },
          { group: "layout", key: "align", label: "Align", kind: "select", options: ["left", "center", "right"] },
        ],
      },
    ]);
    expect(result.ok).toBe(true);
    expect(result.errors).toEqual([]);
  });
});
