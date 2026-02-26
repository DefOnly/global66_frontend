module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1F49B6',
          900: '#1E3A8A'
        },
        accent: {
          green: '#00C48C',
          'green-hover': '#00A876'
        },
        brand: {
          blue: '#2746C7'
        },
        stand: {
          light: '#F1F4FF',
          dark: '#D9E2FF',
          accent: '#99A9DA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      }
    }
  },
  plugins: [],
  safelist: [
    'brightness-0',
    'invert'
  ]
}
