import {
  type ButtonProps,
  type ThemeTypings,
  extendTheme,
} from '@chakra-ui/react';
import _ from 'lodash';
import { glassSurface } from './theme/glass';

export type ColorScheme = ThemeTypings['colorSchemes'];
export type ChakraColor = ThemeTypings['colors'];

export const chakraTheme = extendTheme({
  styles: {
    global: {
      'ol, ul': {
        listStyle: 'none',
      },
      '.lesson-markdown': {
        'h1,  h2,  h3,  h4,  h5,  h6': {
          fontWeight: 'bold',
          marginBottom: '0.75rem',
          marginTop: '1rem',
        },
        h1: {
          fontSize: '2rem',
        },
        h2: {
          fontSize: '1.75rem',
        },
        h3: {
          fontSize: '1.5rem',
        },
        h4: {
          fontSize: '1.25rem',
        },
        h5: {
          fontSize: '1rem',
        },
        h6: {
          fontSize: '0.8rem',
        },
        p: {
          marginBottom: '0.5rem',
        },
        // empty <p/> normally has no height, fix that:
        'p:empty::after': {
          content: '"\u00A0"',
          visibility: 'hidden',
        },
        'ul > p:last-of-type, li > p:last-of-type, blockquote > p:last-of-type':
          {
            marginBottom: '0',
          },
        'ul, ol': {
          paddingLeft: '2rem',
          marginBottom: '0.5rem',
        },
        ol: {
          listStyle: 'decimal',
        },
        ul: {
          listStyle: 'disc',
        },
        'ul[data-type="taskList"]': {
          listStyle: 'none',
          paddingLeft: '0.75rem',
        },
        'table td': {
          border: '1px solid #ddd',
          padding: '0.25rem 0.5rem',
        },
        img: {
          marginBottom: '0.5rem',
        },
        blockquote: {
          borderLeft: '4px solid #ddd',
          paddingLeft: '1rem',
          marginLeft: '0',
          marginBottom: '0.5rem',
        },
        pre: {
          borderLeft: '4px solid #ddd',
          paddingLeft: '1rem',
          marginLeft: '0',
          marginBottom: '0.5rem',
        },
        '> :last-child': {
          marginBottom: '0',
        },
      },
    },
  },
  fonts: {
    // Space Grotesk (display) + Inter (body) + Space Mono (accents); loaded via
    // the Google Fonts <link> in index.html. Gorehand stays the logo font only.
    heading: '"Space Grotesk", sans-serif',
    body: '"Inter", sans-serif',
    code: '"Space Mono", monospace',
    // you can use this font by setting `fontFamily="serif"`:
    serif: '"Roboto Slab", serif',
  },
  // Shared responsive type scale — one source of truth so sizing/rhythm stays
  // uniform across pages and scales consistently desktop <-> mobile. Apply with
  // the `textStyle="..."` prop.
  textStyles: {
    pageTitle: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      fontSize: { base: '4xl', md: '5xl' },
    },
    displayName: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      fontSize: { base: '3xl', md: '6xl' },
    },
    sectionTitle: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      lineHeight: 1.2,
      fontSize: { base: 'xl', md: '2xl' },
    },
    subtitle: {
      fontFamily: 'body',
      fontWeight: 'medium',
      lineHeight: 1.4,
      fontSize: { base: 'md', md: 'lg' },
    },
    body: {
      fontFamily: 'body',
      lineHeight: 1.6,
      fontSize: { base: 'sm', md: 'md' },
    },
    eyebrow: {
      fontFamily: 'code',
      letterSpacing: '0.04em',
      fontSize: { base: 'xs', md: 'sm' },
    },
  },
  colors: {
    black: { 500: '#1E1E1E' },
    gray: { 500: '#8E8E8E' },
    indigo : { 500: '#460673' },
    violet: { 500: '#230344' },
    lilac: { 500: '#BE97C6' },
    // Brightened brand gold. gold.500 is the deeper, legible-on-glass text tone
    // (was the old olive #98821e); gold.400 is the rich accent used for glass
    // borders, ring fills, and glows.
    gold: {
      300: '#E8CE6B',
      400: '#D4AF37',
      500: '#C9A227',
      600: '#A8851C',
    },
  },
  // Two-mode theme (BR-11), replacing the old styled-components purple/black
  // themes. light = "purple" (default), dark = "black". bg-main and shadow-main
  // swap between indigo and black per mode; consumers reference them by token
  // name (bg="bg-main") or CSS var (var(--chakra-colors-shadow-main)).
  semanticTokens: {
    colors: {
      'bg-main': { default: 'indigo.500', _dark: 'black.500' },
      'shadow-main': { default: 'black.500', _dark: 'black.500' },
      // Frosted-glass surface tokens (additive). Light/purple mode carries a
      // touch more frost than the darker black mode. Consumed by the `glass`
      // component variants and the shared glassSurface helper.
      'glass-bg': {
        default: 'rgba(255, 255, 255, 0.10)',
        _dark: 'rgba(255, 255, 255, 0.06)',
      },
      'glass-border': {
        default: 'rgba(255, 255, 255, 0.22)',
        _dark: 'rgba(255, 255, 255, 0.14)',
      },
      'glass-track': {
        default: 'rgba(255, 255, 255, 0.16)',
        _dark: 'rgba(255, 255, 255, 0.10)',
      },
    },
  },
  // Theme is NOT persisted across reloads (matches legacy isBlackTheme useState,
  // BR-11) — the non-persist colorModeManager is applied in App.tsx.
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  space: {
    // TODO: kill these custom spacing tokens
    xs: '0.5rem', // same as 2
    sm: '0.875rem', // same as 3.5
    md: '1rem', // same as 4
    homePaddingX: '1rem', // same as '4'
  },
  sizes: {
    container: {
      home: '1024px', // same as 'container.lg'
    },
  },
  components: {
    Button: {
      variants: {
        // Frosted-glass CTA. The primary button look across the site.
        glass: {
          ...glassSurface,
          cursor: 'pointer',
          height: '60px',
          width: '200px',
          fontFamily: 'code',
          fontSize: '16px',
          color: 'gold.400',
          borderRadius: 'full',
          transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
          _focusVisible: {
            outline: '2px solid',
            outlineColor: 'gold.400',
            outlineOffset: '2px',
          },
          _hover: {
            bg: 'rgba(255, 255, 255, 0.16)',
            borderColor: 'gold.400',
            transform: 'translateY(-2px)',
            boxShadow:
              '0 8px 24px rgba(212, 175, 55, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
          },
          _active: {
            transform: 'translateY(0)',
          },
        },

        outline: (props: ButtonProps) => ({
          cursor: 'pointer',
          height: "60px",
          width: "200px",
          fontFamily: 'code',
          fontSize: "16px",
          color: "gold.500",
          bg: "transparent",
          border: 'solid 1px',
          borderColor: 'gray.500',
          borderRadius: '4px',
          transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
          _focus: {
            outline: 'none',
            bg: "transparent",
          },
          _hover: {
            boxShadow: "4px 4px 0 0 #8E8E8E",
            bg: "transparent",
            transform: "translate(-5px, -5px)",
          }   
        }),
      },
    },
    // Card is a multipart component; the `glass` variant frosts the container.
    Card: {
      variants: {
        glass: {
          container: {
            ...glassSurface,
            borderRadius: 'xl',
          },
        },
      },
    },
    // Frosted chip used for the Skills tags.
    Badge: {
      variants: {
        glass: {
          ...glassSurface,
          color: 'gold.500',
          fontFamily: 'code',
          fontWeight: 'medium',
          textTransform: 'none',
          borderRadius: 'full',
          px: 3,
          py: 1,
          transition: 'all 0.2s ease',
          _hover: {
            borderColor: 'gold.400',
            boxShadow: '0 4px 16px rgba(212, 175, 55, 0.22)',
          },
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: 'container.lg',
      },
    },
    Link: {
      baseStyle: {
        color: 'blue.500',
      },
    },
    FormLabel: {
      baseStyle: {
        fontWeight: 'semibold',
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            bg: 'white',
          },
        },
        // makes it look like a button
        filledBrand: {
          field: {
            bg: 'brand.500',
            color: 'white',
            _hover: {
              bg: 'brand.600',
            },
          },
          element: {
            color: 'white',
          },
          addon: {
            bg: 'brand.600',
            color: 'white',
            _hover: {
              bg: 'brand.700',
            },
          },
        },
      },
    },
    Select: {
      baseStyle: {
        field: {
          paddingTop: '0',
        },
      },
      variants: {
        outline: {
          field: {
            bg: 'white',
          },
        },
      },
    },
    Textarea: {
      variants: {
        outline: {
          bg: 'white',
        },
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          bg: 'white',
        },
      },
    },
  },
});

// remove these colors from the theme
for (const color of [
  'facebook',
  'twitter',
  'linkedin',
  'whatsapp',
  'telegram',
  'messenger',
]) {
  delete chakraTheme.colors[color];
}

export const baseColorSchemes = _.mapValues(
  chakraTheme.colors,
  (schemeColors, schemaName) => schemeColors[500] || schemaName,
) as Record<ColorScheme, ChakraColor | ColorScheme>;
