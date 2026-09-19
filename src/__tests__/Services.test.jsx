import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Services, defaultContent } from "../kit/marketing/Services.jsx";

describe("Services", () => {
  it("renders three item titles from defaults", () => {
    render(<Services />);
    for (const item of defaultContent.items) {
      expect(screen.getByRole("heading", { name: item.title })).toBeInTheDocument();
    }
    expect(defaultContent.items).toHaveLength(3);
  });
});
