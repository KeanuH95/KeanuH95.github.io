import {
  type ButtonProps,
  type ThemeTypings,
  extendTheme,
} from '@chakra-ui/react';
import _ from 'lodash';

export type ColorScheme = ThemeTypings['colorSchemes'];
export type ChakraColor = ThemeTypings['colors'];

// NOTE: the default text color (`colors['chakra-body-text']`) is 'gray.800'

// TODO: set semibold to 500. 600 is the same as bold.

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
    // this is the default font on all components:
    heading: '"DM Sans", sans-serif',
    body: '"DM Sans", sans-serif',
    code: '"Roboto Mono", monospace',
    // you can use this font by setting `fontFamily="serif"`:
    serif: '"Roboto Slab", serif',
  },
  colors: {
    black: { 500: '#1E1E1E' },
    gray: { 500: '#8E8E8E' },
    indigo : { 500: '#460673' },
    violet: { 500: '#230344' },
    lilac: { 500: '#BE97C6' },
    gold: { 500: '#98821e' },
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

        outline: (props: ButtonProps) => ({
          cursor: 'pointer',
          height: "60px",
          width: "200px",
          fontFamily: '"Roboto Mono", monospace',
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
