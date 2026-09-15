/// <reference types="vitest/config" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// Migrated from Create React App / react-scripts 5 (Phase 5). outDir is kept as
// "build" so `gh-pages -d build` and public/_redirects work unchanged.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
