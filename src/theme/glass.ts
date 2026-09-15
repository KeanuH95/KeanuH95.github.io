import type { SystemStyleObject } from '@chakra-ui/react';

/**
 * Shared frosted-glass surface. Reused by the Chakra component variants
 * (Button/Card/Badge `glass`) and applied directly via `sx`/spread on ad-hoc
 * surfaces (Home language rings, ThemeToggle, Nav) where a full theme variant
 * would be overkill.
 *
 * Colors come from the mode-aware `glass-bg` / `glass-border` semantic tokens
 * so the frost adapts between the light (purple) and dark (black) modes.
 * `WebkitBackdropFilter` is included so the blur works in Safari.
 */
export const glassSurface: SystemStyleObject = {
  bg: 'glass-bg',
  backdropFilter: 'blur(12px) saturate(160%)',
  WebkitBackdropFilter: 'blur(12px) saturate(160%)',
  border: '1px solid',
  borderColor: 'glass-border',
  // soft drop shadow grounds the panel; inset top line reads as a light sheen
  boxShadow:
    '0 8px 32px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.18)',
};
