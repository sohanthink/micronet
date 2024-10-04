import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: {
          DEFAULT: '#1C9FDA', 
          secondary: '#0176D3', 
          dark: '#032D60',
          low:'rgb(238, 250, 255)',
          social:'#8DCEEC',
          border:'rgb(226, 242, 250)',
        },
        customGreen: {
          DEFAULT: '#8DC63F', 
          secondary: '#65A50D', 
          dark: '#467407', 
          low:'rgb(245, 255, 231)'
        },
        customDark: {
          DEFAULT:'#404040'
        },
      },
    },
  },
  plugins: [],
};
export default config;
