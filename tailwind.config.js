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
        mainBackground : "var(--background)",
        addBtn : "var(--addBtn)",
        circle : "var(--circles)",
        taskBgc : "var(--taskBgc)",
        inputPlaceholder : "var(--inputPlaceholder)",
        taskArrow : "var(--taskArrow)",
        clockText : "var(--clockTextColor)",
        inputBackground : "var(--inputBackground)" 
      }
    },
  },
}

