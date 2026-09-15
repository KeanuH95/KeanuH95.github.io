import type { ColorMode } from "@chakra-ui/react";

// Non-persisting color-mode manager (BR-11): reports nothing stored so Chakra
// falls back to the theme's initialColorMode (light/"purple"), and never writes,
// so the theme resets on reload — matching the legacy isBlackTheme useState.
// Extracted to its own module so tests can import it without pulling in App's
// dependency tree (axios etc.).
export const noPersistColorModeManager = {
  type: "localStorage" as const,
  ssr: false,
  get: (_init?: ColorMode): ColorMode | undefined => undefined,
  set: (_value: ColorMode | "system") => {},
};
