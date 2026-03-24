/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#fffaf2',
          100: '#fdf1dc',
          200: '#f7ddb0',
        },
        berry: {
          50: '#fff1f4',
          100: '#ffdce5',
          500: '#e85d75',
          600: '#d94863',
          700: '#b9344d',
        },
        sage: {
          100: '#edf5ee',
          300: '#b8d4bc',
          500: '#6ea67a',
          700: '#487252',
        },
        cocoa: {
          100: '#f1e5dc',
          300: '#c9a892',
          500: '#8b5e3c',
          700: '#5f3d27',
        },
      },
      boxShadow: {
        card: '0 18px 45px -24px rgba(95, 61, 39, 0.35)',
      },
    },
  },
  plugins: [],
}
