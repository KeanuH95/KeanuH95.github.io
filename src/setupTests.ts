// jest-dom adds custom matchers (toBeInTheDocument, etc.) for assertions on
// DOM nodes. Loaded via Vitest `setupFiles` (see vite.config.ts) before each test.
import "@testing-library/jest-dom";

// jsdom has no IntersectionObserver; motion's `whileInView` needs it. Minimal
// no-op polyfill so components using in-view animations render in tests.
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
(global as unknown as { IntersectionObserver: unknown }).IntersectionObserver =
  MockIntersectionObserver;
