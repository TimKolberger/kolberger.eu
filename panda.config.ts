import { defineConfig } from 'css-panda'

export default defineConfig({
  preflight: true,
  include: ['pages/**/*.tsx', 'src/**/*.tsx'],
  presets: ['css-panda/presets'],
  outdir: 'design-system',
  jsxFramework: 'react',
  theme: {
    extend: {
      tokens: {
        colors: {
          whiteAlpha: {
            50: { value: 'rgba(255, 255, 255, 0.04)' },
            100: { value: 'rgba(255, 255, 255, 0.06)' },
            200: { value: 'rgba(255, 255, 255, 0.08)' },
            300: { value: 'rgba(255, 255, 255, 0.16)' },
            400: { value: 'rgba(255, 255, 255, 0.24)' },
            500: { value: 'rgba(255, 255, 255, 0.36)' },
            600: { value: 'rgba(255, 255, 255, 0.48)' },
            700: { value: 'rgba(255, 255, 255, 0.64)' },
            800: { value: 'rgba(255, 255, 255, 0.80)' },
            900: { value: 'rgba(255, 255, 255, 0.92)' },
          },

          blackAlpha: {
            50: { value: 'rgba(0, 0, 0, 0.04)' },
            100: { value: 'rgba(0, 0, 0, 0.06)' },
            200: { value: 'rgba(0, 0, 0, 0.08)' },
            300: { value: 'rgba(0, 0, 0, 0.16)' },
            400: { value: 'rgba(0, 0, 0, 0.24)' },
            500: { value: 'rgba(0, 0, 0, 0.36)' },
            600: { value: 'rgba(0, 0, 0, 0.48)' },
            700: { value: 'rgba(0, 0, 0, 0.64)' },
            800: { value: 'rgba(0, 0, 0, 0.80)' },
            900: { value: 'rgba(0, 0, 0, 0.92)' },
          },
        },
        fonts: {
          heading: {
            value: [
              '"Open Sans"',
              'ui-sans-serif',
              'system-ui',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              '"Noto Sans"',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
              '"Noto Color Emoji"',
            ],
          },
          body: {
            value: [
              '"Comfortaa"',
              'ui-sans-serif',
              'system-ui',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              '"Noto Sans"',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
              '"Noto Color Emoji"',
            ],
          },
        },
      },
      semanticTokens: {
        colors: {
          text: {
            default: { value: { base: '{colors.white}' } },
            subtle: {
              value: { base: '{colors.whiteAlpha.800}' },
            },
            inverted: {
              value: { base: '{colors.gray.950}' },
            },
          },
        },
        shadows: {
          xs: {
            value: {
              base: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 1px 2px rgba(48, 49, 51, 0.1)',
              _dark: '0px 0px 1px #0D0D0D, 0px 1px 2px rgba(13, 13, 13, 0.9)',
            },
          },
          sm: {
            value: {
              base: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 2px 4px rgba(48, 49, 51, 0.1)',
              _dark: '0px 0px 1px #0D0D0D, 0px 2px 4px rgba(13, 13, 13, 0.9)',
            },
          },
          md: {
            value: {
              base: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)',
              _dark: '0px 0px 1px #0D0D0D, 0px 4px 8px rgba(13, 13, 13, 0.9)',
            },
          },
          lg: {
            value: {
              base: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 8px 16px rgba(48, 49, 51, 0.1)',
              _dark: '0px 0px 1px #0D0D0D, 0px 8px 16px rgba(13, 13, 13, 0.9)',
            },
          },
          xl: {
            value: {
              base: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 16px 24px rgba(48, 49, 51, 0.1)',
              _dark: '0px 0px 1px #0D0D0D, 0px 16px 24px rgba(13, 13, 13, 0.9)',
            },
          },
        },
      },
      textStyles: {
        xs: { value: { fontSize: 'xs', lineHeight: '1.125rem' } },
        sm: { value: { fontSize: 'sm', lineHeight: '1.25rem' } },
        md: { value: { fontSize: 'md', lineHeight: '1.5rem' } },
        lg: { value: { fontSize: 'lg', lineHeight: '1.75rem' } },
        xl: { value: { fontSize: 'xl', lineHeight: '1.875rem' } },
        '2xl': { value: { fontSize: '2xl', lineHeight: '2rem' } },
        '3xl': { value: { fontSize: '3xl', lineHeight: '2.375rem' } },
        '4xl': {
          value: {
            fontSize: '4xl',
            lineHeight: '2.75rem',
            letterSpacing: '-0.02em',
          },
        },
        '5xl': {
          value: {
            fontSize: '5xl',
            lineHeight: '3.75rem',
            letterSpacing: '-0.02em',
          },
        },
        '6xl': {
          value: {
            fontSize: '6xl',
            lineHeight: '4.5rem',
            letterSpacing: '-0.02em',
          },
        },
        '7xl': {
          value: {
            fontSize: '7xl',
            lineHeight: '5.75rem',
            letterSpacing: '-0.02em',
          },
        },
      },
    },
  },
  patterns: {
    extend: {
      container: {
        transform: ({ centerContent: _, ...props }) =>
          Object.assign(
            {
              position: 'relative',
              width: '100%',
              maxWidth: '8xl',
              mx: 'auto',
              paddingX: { base: '4', md: '6' },
            },
            props
          ),
      },
    },
  },
  globalCss: {
    'html, body': {
      height: 'auto',
      minHeight: '100%',
    },
    html: {
      lineHeight: 1.5,
      textRendering: 'optimizeLegibility',
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      WebkitTextSizeAdjust: '100%',
      scrollPaddingTop: '6rem',
    },
    body: {
      backgroundGradient: 'to-br',
      gradientFrom: 'gray.900',
      gradientVia: 'green.900',
      gradientTo: 'green.700',
      color: 'text.default',
      fontFamily: 'body',
      _dark: {
        colorScheme: 'dark',
      },
    },
    '*, *::before, *::after': {
      borderStyle: 'solid',
    },
    '*::placeholder': {
      opacity: 1,
      color: 'text.placeholder',
    },
    a: {
      textDecoration: 'none',
    },
  },
})
