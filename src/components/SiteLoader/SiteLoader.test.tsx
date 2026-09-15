/**
 * Smoke/characterization test for <SiteLoader> — renders the animated logo SVG
 * without crashing under its providers. Animation itself isn't asserted (jsdom
 * doesn't run CSS keyframes); this pins that the migrated SVG mounts.
 * Phase 3: styled-components removed — colors now come from Chakra color mode.
 */
import React from "react";
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "../../chakraTheme";
import { SiteLoader } from "./SiteLoader";

describe("SiteLoader", () => {
  it("renders the logo svg with a path", () => {
    const { container } = render(
      <ChakraProvider theme={chakraTheme}>
        <SiteLoader />
      </ChakraProvider>
    );
    const svg = container.querySelector("svg");
    expect(svg).not.toBeNull();
    expect(svg?.querySelector("path")).not.toBeNull();
  });
});
