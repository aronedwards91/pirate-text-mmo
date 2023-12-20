/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
        sand: {
          50: "#fcf8ee",
          100: "#f6eacf",
          200: "#ecd39b",
          300: "#e2b867",
          400: "#dba144",
          500: "#d38734",
          600: "#b96526",
          700: "#9a4923",
          800: "#7e3b22",
          900: "#68311f",
          950: "#3b180d",
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
        flame: {
          50: "#fdf5f3",
          100: "#fce9e4",
          200: "#fbd6cd",
          300: "#f6baab",
          400: "#ef917a",
          500: "#e46c4f",
          600: "#d2583a",
          700: "#af4126",
          800: "#913923",
          900: "#793423",
          950: "#41180e",
        },
      },
      boxShadow: {
        "inner-2xl": "inset 0px 0px 20px 15px rgb(0 0 0 / 0.40)",
        "inner-lg": "inset 0px 0px 13px 5px rgb(0 0 0 / 0.25)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.slate.900"),
            p: {
              color: theme("colors.black"),
            },
          },
        },
      }),
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
