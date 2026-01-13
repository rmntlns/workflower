import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#09090B",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#27272A",
          foreground: "#ffffff",
        },
        accent: {
          orange: "#FB923C",
          pink: "#F472B6",
          purple: "#E879F9",
        },
        border: "#27272A",
        background: "#09090B",
        foreground: "#ffffff",
        muted: {
          DEFAULT: "#27272A",
          foreground: "#A1A1AA",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #FB923C 0%, #F472B6 50%, #E879F9 100%)",
        "gradient-hero": "linear-gradient(180deg, #09090B 0%, #27272A 100%)",
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
