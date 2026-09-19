import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import CatalogHome from "../catalog/CatalogHome.jsx";

describe("CatalogHome", () => {
  it("renders a card for each registry entry", () => {
    render(
      <MemoryRouter>
        <CatalogHome />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { name: /stub/i })).toBeInTheDocument();
    expect(screen.getByText(/temporary registry row/i)).toBeInTheDocument();
  });

  it("filters by type chip", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <CatalogHome />
      </MemoryRouter>,
    );
    await user.click(screen.getByRole("button", { name: /^auth$/i }));
    expect(screen.queryByRole("heading", { name: /stub/i })).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /^all$/i }));
    expect(screen.getByRole("heading", { name: /stub/i })).toBeInTheDocument();
  });
});
