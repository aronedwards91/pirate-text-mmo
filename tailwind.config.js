/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
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
          50: "#fdf8ed",
          100: "#f9ebcc",
          200: "#f2d595",
          300: "#ebbb5e",
          400: "#e6a439",
          500: "#de8422",
          600: "#c4641b",
          700: "#a3471a",
          800: "#85381b",
          900: "#6e2f19",
          950: "#3e170a",
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
      typography:  (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.900'),
            p: {
              color: theme('colors.black'),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
