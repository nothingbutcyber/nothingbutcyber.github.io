/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#9CA3AF',
            h1: {
              color: '#F9FAFB',
            },
            h2: {
              color: '#F9FAFB',
            },
            h3: {
              color: '#F9FAFB',
            },
            strong: {
              color: '#F9FAFB',
            },
            blockquote: {
              color: '#9CA3AF',
              borderLeftColor: '#06B6D4',
            },
          },
        },
      },
    },
  },
  plugins: [],
};