import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      },
    },
    extend: {
      maxWidth: {
        "8x1": "1408px"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--borderingr))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary)",
          forground: "hsl(var(--primary-forground)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary)",
          forground: "hsl(var(--secondary-forground)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive)",
          forground: "hsl(var(--destructive-forground)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted)",
          forground: "hsl(var(--muted-forground)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent)",
          forground: "hsl(var(--accent-forground)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover)",
          forground: "hsl(var(--popover-forground)",
        },
        card: {
          DEFAULT: "hsl(var(--card)",
          forground: "hsl(var(--card-forground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius)) -2px",
        sm: "calc(var(--radius)) -4px",
      },
      keyframes: {
        "according-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height" }
        },
        "according-up": {
          from: { height: "var(--radix-accordion-content-height" },
          to: { height: "0" },
        },
      },
      animation: {
        "according-up": "accordion-up 0.2s ease-out",
        "according-down": "accordion-down 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
export default config
