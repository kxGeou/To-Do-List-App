/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors :{
        inputColor : "var(--inputTask)",
        addBtn : "var(--addBtn)",
        deleteBtn : "var(--deleteBtn)",
        upDownBtn : "var(--upDownBtn)",
        clock : "var(--clock)",
        mainBackground : "var(--background)"
      }
    },
  },
}

