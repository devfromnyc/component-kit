import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero, defaultContent } from "../kit/marketing/Hero.jsx";

describe("Hero", () => {
  it("renders default heading", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { name: defaultContent.heading })).toBeInTheDocument();
  });

  it("aligns content to the right", () => {
    const { container } = render(<Hero layout={{ align: "right" }} />);
    expect(container.querySelector("section .relative")).toHaveClass("items-end");
    expect(container.querySelector("section .relative")).toHaveClass("text-right");
  });
});
