/**
 * Smoke/characterization test for <BGInitials> — the watermark renders its
 * "KH" text. Pure presentational component; behavior = it renders.
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { BGInitials } from "./BGInitials";

describe("BGInitials", () => {
  it("renders the KH watermark", () => {
    render(
      <ChakraProvider>
        <BGInitials />
      </ChakraProvider>
    );
    expect(screen.getByText("KH")).toBeInTheDocument();
  });
});
