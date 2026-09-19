import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TechStack, defaultContent } from "../kit/marketing/TechStack.jsx";

describe("TechStack", () => {
  it("renders default heading", () => {
    render(<TechStack />);
    expect(screen.getByRole("heading", { name: defaultContent.heading })).toBeInTheDocument();
  });
});
