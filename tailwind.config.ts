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
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  const colors = theme('colors');
  const flattenedColors = flattenColors(colors);

  let newVars = Object.fromEntries(
    Object.entries(flattenedColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

// Helper function to flatten the color palette
function flattenColors(colors: any, prefix = ''): any {
  return Object.keys(colors).reduce((acc: any, color) => {
    const value = colors[color];
    const prefixedColor = prefix ? `${prefix}-${color}` : color;

    if (typeof value === 'string') {
      acc[prefixedColor] = value;
    } else {
      Object.assign(acc, flattenColors(value, prefixedColor));
    }

    return acc;
  }, {});
}

export default config;
