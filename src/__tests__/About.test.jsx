import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { About, defaultContent } from "../kit/marketing/About.jsx";

describe("About", () => {
  it("renders default heading", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: defaultContent.heading })).toBeInTheDocument();
  });

  it("renders override heading", () => {
    render(<About content={{ heading: "Custom about title" }} />);
    expect(screen.getByRole("heading", { name: "Custom about title" })).toBeInTheDocument();
  });
});
