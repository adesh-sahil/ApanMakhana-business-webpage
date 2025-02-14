/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#1A1B1E',
          surface: '#2C2D31',
          primary: '#6D5AE6',
          secondary: '#4ECDC4',
          'primary-hover': '#8B75FF',
          'primary-active': '#584BC1',
          error: '#FF6B6B',
          success: '#69DB7C',
          text: {
            primary: '#FFFFFF',
            secondary: '#B3B3B3',
            muted: '#808080'
          }
        }
      },
      boxShadow: {
        'dark-sm': '0 1px 2px rgba(0, 0, 0, 0.2)',
        'dark-md': '0 4px 6px rgba(0, 0, 0, 0.2)',
        'dark-lg': '0 10px 15px rgba(0, 0, 0, 0.2)'
      },
      transitionDuration: {
        DEFAULT: '200ms'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease'
      }
    }
  },
  plugins: [],
};