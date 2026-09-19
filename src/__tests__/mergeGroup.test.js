import { describe, expect, it } from "vitest";
import { mergeGroup } from "../mergeGroup.js";

describe("mergeGroup", () => {
  it("returns defaults when overrides are omitted", () => {
    expect(mergeGroup({ heading: "A" })).toEqual({ heading: "A" });
  });

  it("shallow-merges overrides", () => {
    expect(mergeGroup({ heading: "A", body: "B" }, { heading: "C" })).toEqual({
      heading: "C",
      body: "B",
    });
  });

  it("replaces nested objects as a whole", () => {
    expect(
      mergeGroup(
        { primaryCta: { label: "Go", href: "/a" } },
        { primaryCta: { label: "Next", href: "/b" } },
      ),
    ).toEqual({ primaryCta: { label: "Next", href: "/b" } });
  });
});
