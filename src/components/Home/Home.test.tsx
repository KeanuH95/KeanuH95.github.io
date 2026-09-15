/**
 * Characterization tests for <Home> — pins the data-driven behavior that the
 * Phase 2 styling migration must not disturb: BR-08 (latest-update date +
 * fallback), BR-09 (language fallback), BR-10 (per-language dials).
 * Redux selectors are mocked so no store wiring is needed.
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./Home";
import {
  selectLanguagePercentages,
  selectLastSiteUpdate,
} from "../../redux/slices/siteInfoSlice";

// useSelector simply invokes the (mocked) selector — no store required.
vi.mock("react-redux", () => ({ useSelector: (sel: () => unknown) => sel() }));
vi.mock("../../redux/slices/siteInfoSlice", () => ({
  selectLanguagePercentages: vi.fn(),
  selectLastSiteUpdate: vi.fn(),
}));

const mockLangs = vi.mocked(selectLanguagePercentages);
const mockUpdate = vi.mocked(selectLastSiteUpdate);

const renderHome = () =>
  render(
    <HelmetProvider>
      <ChakraProvider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ChakraProvider>
    </HelmetProvider>
  );

describe("Home (BR-08/09/10)", () => {
  it("BR-10: renders a dial (name + percent) per language", () => {
    mockLangs.mockReturnValue({ TypeScript: 60, SCSS: 30 });
    mockUpdate.mockReturnValue(null);
    renderHome();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("60%")).toBeInTheDocument();
    expect(screen.getByText("SCSS")).toBeInTheDocument();
    expect(screen.getByText("30%")).toBeInTheDocument();
  });

  it("BR-09: shows fallback text when language data is null", () => {
    mockLangs.mockReturnValue(null);
    mockUpdate.mockReturnValue(null);
    renderHome();
    expect(screen.getByText("No language data available")).toBeInTheDocument();
  });

  it("BR-08: formats the latest update as a US-locale date", () => {
    mockLangs.mockReturnValue(null);
    mockUpdate.mockReturnValue("2026-01-15T10:30:00Z");
    renderHome();
    expect(screen.getByText("1/15/2026")).toBeInTheDocument();
  });

  it("BR-08: shows fallback when there is no latest update", () => {
    mockLangs.mockReturnValue(null);
    mockUpdate.mockReturnValue(null);
    renderHome();
    expect(screen.getByText("No updates available")).toBeInTheDocument();
  });
});
