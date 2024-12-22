/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#115E59",
        "primary-400": "#0D9488",
        "primary-300": "#5EEAD4 ",
        "primary-200": "#CCFBF1",
        "primary-100": "#F0FDFA",

        "secondary-500": "#FF9700",
        "secondary-400": "#FCB117",
        "secondary-300": "#FFD700",
      },
    },
  },
  plugins: [],
};
