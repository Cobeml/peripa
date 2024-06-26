/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        'short': { 'raw': '(max-height: 500px)' },
        'medium': { 'raw': '(min-height: 501px) and (max-height: 600px)' },
        'tall': { 'raw': '(min-height: 601px) and (max-height: 750px)' },
        'very-tall': { 'raw': '(min-height: 751px) and (max-height: 850px)' },
        'super-tall': { 'raw': '(min-height: 851px) and (max-height: 1000px)' },
        'ultra-tall': { 'raw': '(min-height: 1001px)' },
      },
    },
  },
  plugins: [],
}

