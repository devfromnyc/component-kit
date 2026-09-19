import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProcessSteps, defaultContent } from "../kit/marketing/ProcessSteps.jsx";

describe("ProcessSteps", () => {
  it("renders default heading", () => {
    render(<ProcessSteps />);
    expect(screen.getByRole("heading", { name: defaultContent.heading })).toBeInTheDocument();
  });
});
