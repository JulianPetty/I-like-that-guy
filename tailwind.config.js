/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: '#000',
              fontWeight: '700',
            },
            h2: {
              color: '#fff7ed',
              fontWeight: '700',
            },
            h3: {
              color: '#fff7ed',
              fontWeight: '500',
            },
            p: {
              color: '#fff7ed',
              lineHeight: '1.8',
            },
            a: {
              color: '#1e90ff',
              textDecoration: 'none',
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
