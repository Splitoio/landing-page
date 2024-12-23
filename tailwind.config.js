/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Instrument Sans", "sans-serif"],
      },
      transitionProperty: {
        all: "all",
      },
      transitionDuration: {
        1000: "1000ms",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "float-1": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0px)" },
        },
        "float-3": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-4": {
          "0%, 100%": { transform: "translateX(32px) translateY(-10px)" },
          "50%": { transform: "translateX(32px) translateY(0px)" },
        },
        "float-5": {
          "0%, 100%": { transform: "translateX(32px) translateY(0px)" },
          "50%": { transform: "translateX(32px) translateY(-10px)" },
        },
        "float-6": {
          "0%, 100%": { transform: "translateX(32px) translateY(-10px)" },
          "50%": { transform: "translateX(32px) translateY(0px)" },
        },
      },
      animation: {
        "float-1": "float-1 3s ease-in-out infinite",
        "float-2": "float-2 3s ease-in-out infinite",
        "float-3": "float-3 3s ease-in-out infinite",
        "float-4": "float-4 3s ease-in-out infinite",
        "float-5": "float-5 3s ease-in-out infinite",
        "float-6": "float-6 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
