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
        // Palet warna yang diadopsi langsung dari web lama (#F8F4F3 & #1B2C45)
        canvas: {
          light: '#F8F4F3', // Warm Porcelain / Linen khas web lama
          dark: '#0B111A',  // Deepest Midnight Oxford untuk dark mode
        },
        surface: {
          light: '#FFFFFF',
          dark: '#121A26',
        },
        navy: {
          50: '#F0F4F9',
          100: '#DCE5F1',
          200: '#BDCFE4',
          300: '#92B1D3',
          400: '#6790C0',
          500: '#4874A8',
          600: '#345B8B',
          700: '#2A466E',
          800: '#23395A',
          900: '#1B2C45', // Warna teks/identitas utama web lama
          950: '#0E1724',
        },
        hairline: {
          light: '#E6E1DC', // Hairline harmonis dengan latar #F8F4F3
          dark: '#1C283A',  // Hairline untuk dark mode
        }
      },
      letterSpacing: {
        editorial: '-0.03em',
        subtle: '-0.015em',
        caps: '0.1em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}
