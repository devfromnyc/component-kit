import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Faq, defaultContent } from "../kit/marketing/Faq.jsx";

describe("Faq", () => {
  it("renders default heading", () => {
    render(<Faq />);
    expect(screen.getByRole("heading", { name: defaultContent.heading })).toBeInTheDocument();
  });

  it("expands the answer when a question is clicked", async () => {
    const user = userEvent.setup();
    const faq = defaultContent.faqs[0];
    render(<Faq />);

    expect(screen.queryByText(faq.answer)).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: faq.question }));

    expect(screen.getByText(faq.answer)).toBeInTheDocument();
  });
});
