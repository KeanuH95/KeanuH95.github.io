/**
 * Characterization tests for <Nav> — pins the observable behavior of BR-13
 * (nav single-select highlight) before/through the SCSS-module -> Chakra
 * migration. These assert BEHAVIOR, not styling implementation, so they hold
 * across the refactor. Derived from the legacy Nav.tsx logic (selected state)
 * and BASELINE.md.
 */
import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Nav } from "./Nav";
import routes from "../../utils/routes";

const renderNav = () =>
  render(
    <ChakraProvider>
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    </ChakraProvider>
  );

// The migrated underline carries data-testid="nav-underline" (a non-visual
// testability hook). Count reflects the single conditional underline element.
const underlines = () => screen.queryAllByTestId("nav-underline");

describe("Nav (BR-13: single-select highlight)", () => {
  it("renders the KH home link pointing at HOME_ROUTE", () => {
    renderNav();
    const kh = screen.getByRole("link", { name: "KH" });
    expect(kh).toBeInTheDocument();
    expect(kh).toHaveAttribute("href", routes.HOME_ROUTE);
  });

  it("renders the four nav items in order with correct routes", () => {
    renderNav();
    const expected: Array<[string, string]> = [
      ["Experience", routes.EXPERIENCE_ROUTE],
      ["Work", routes.WORK_ROUTE],
      ["Skills", routes.SKILLS_ROUTE],
      ["Contact", routes.CONTACT_ROUTE],
    ];
    for (const [label, href] of expected) {
      const link = screen.getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", href);
    }
  });

  it("shows no underline in the initial (unselected) state", () => {
    renderNav();
    expect(underlines()).toHaveLength(0);
  });

  it("shows exactly one underline, under the clicked item, after selection", () => {
    renderNav();
    userEvent.click(screen.getByText("Work"));
    expect(underlines()).toHaveLength(1);
    // the underline lives inside the same item container as the clicked link
    const workItem = screen.getByText("Work").closest("[data-nav-item]");
    expect(workItem).not.toBeNull();
    expect(within(workItem as HTMLElement).getByTestId("nav-underline")).toBeInTheDocument();
  });

  it("moves the single underline when a different item is selected", () => {
    renderNav();
    userEvent.click(screen.getByText("Work"));
    userEvent.click(screen.getByText("Skills"));
    expect(underlines()).toHaveLength(1);
    const skillsItem = screen.getByText("Skills").closest("[data-nav-item]");
    expect(within(skillsItem as HTMLElement).getByTestId("nav-underline")).toBeInTheDocument();
  });

  it("clears the underline when the KH home link is clicked", () => {
    renderNav();
    userEvent.click(screen.getByText("Work"));
    expect(underlines()).toHaveLength(1);
    userEvent.click(screen.getByRole("link", { name: "KH" }));
    expect(underlines()).toHaveLength(0);
  });
});
