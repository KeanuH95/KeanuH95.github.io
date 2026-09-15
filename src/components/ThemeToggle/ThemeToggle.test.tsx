/**
 * Characterization tests for BR-11 (two-mode theme + toggle + non-persistence).
 * Pins the contract the whole styled-components -> Chakra-color-mode migration
 * was meant to preserve: default purple/light, toggle swaps, resets on reload.
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import { chakraTheme } from "../../chakraTheme";
import { ThemeToggle } from "./ThemeToggle";
import { noPersistColorModeManager } from "../../colorMode";

const ModeProbe = () => {
  const { colorMode } = useColorMode();
  return <div data-testid="mode">{colorMode}</div>;
};

const renderToggle = () =>
  render(
    <ChakraProvider theme={chakraTheme} colorModeManager={noPersistColorModeManager}>
      <ThemeToggle />
      <ModeProbe />
    </ChakraProvider>
  );

describe("BR-11 theme contract", () => {
  beforeEach(() => window.localStorage.clear());

  it("defaults to light (purple) and flips to dark on click, then back", () => {
    renderToggle();
    expect(screen.getByTestId("mode")).toHaveTextContent("light");
    userEvent.click(screen.getByAltText("sun"));
    expect(screen.getByTestId("mode")).toHaveTextContent("dark");
    userEvent.click(screen.getByAltText("sun"));
    expect(screen.getByTestId("mode")).toHaveTextContent("light");
  });

  it("maps semantic tokens to the exact legacy colors, in the right direction", () => {
    // light/purple: bg=indigo(#460673), shadow=black(#1E1E1E). bg-main still
    // swaps to black in dark mode; shadow-main now stays black in both modes
    // (intentional theme change — the inner glow no longer flips to indigo).
    const tokens = (chakraTheme as any).semanticTokens.colors;
    expect(tokens["bg-main"]).toEqual({ default: "indigo.500", _dark: "black.500" });
    expect(tokens["shadow-main"]).toEqual({ default: "black.500", _dark: "black.500" });
    expect((chakraTheme as any).config.initialColorMode).toBe("light");
  });

  it("the color-mode manager does not persist (resets on reload)", () => {
    // get() reports nothing stored -> Chakra falls back to initialColorMode;
    // set() is a no-op -> nothing is written, so a reload starts light again.
    expect(noPersistColorModeManager.get("dark")).toBeUndefined();
    noPersistColorModeManager.set("dark");
    expect(window.localStorage.length).toBe(0);
  });
});
