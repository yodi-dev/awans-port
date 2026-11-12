/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
      },
      colors: {
        canvas: {
          light: '#FAFAF9', // warm neutral alabaster
          dark: '#0A0A0C',  // deep obsidian
        },
        surface: {
          light: '#FFFFFF',
          dark: '#121215',
        },
        hairline: {
          light: '#E7E5E4',
          dark: '#26262B',
        }
      },
      letterSpacing: {
        editorial: '-0.03em',
        subtle: '-0.015em',
        caps: '0.1em',
      }
    },
  },
  plugins: [],
}
