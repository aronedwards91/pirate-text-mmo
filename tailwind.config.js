/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
        sand: {
          300: "#DC9A48",
          400: "#D38734",
          500: "#BC5E20",
          700: "#A35426",
          800: "#A3471A",
        },
        rust: {
          DEFAULT: "#A3471A",
          100: "#200e05",
          200: "#411d0b",
          300: "#612b10",
          400: "#823915",
          500: "#a3471a",
          600: "#da6023",
          700: "#e48759",
          800: "#edaf90",
          900: "#f6d7c8",
        },
        caput_mortuum: {
          DEFAULT: "#572114",
          100: "#110704",
          200: "#230d08",
          300: "#34140c",
          400: "#461b10",
          500: "#572114",
          600: "#993a23",
          700: "#d2583a",
          800: "#e1907c",
          900: "#f0c7bd",
        },
      },
    },
  },
  plugins: [],
};
