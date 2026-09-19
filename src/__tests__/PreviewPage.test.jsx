import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PreviewPage from "../catalog/PreviewPage.jsx";

function renderPreview(id) {
  return render(
    <MemoryRouter initialEntries={[`/preview/${id}`]}>
      <Routes>
        <Route path="/preview/:id" element={<PreviewPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("PreviewPage", () => {
  it("shows not found for unknown ids", () => {
    renderPreview("missing");
    expect(screen.getByText(/component not found/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /back to library/i })).toHaveAttribute("href", "/");
  });

  it("keeps the playground collapsed by default", () => {
    renderPreview("hero");
    expect(screen.queryByLabelText(/heading/i)).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /show controls/i })).toBeInTheDocument();
  });

  it("edits a text control after opening the panel", async () => {
    const user = userEvent.setup();
    renderPreview("hero");
    await user.click(screen.getByRole("button", { name: /show controls/i }));
    const input = screen.getByLabelText(/^heading$/i);
    await user.clear(input);
    await user.type(input, "Hello");
    expect(input).toHaveValue("Hello");
  });
});
