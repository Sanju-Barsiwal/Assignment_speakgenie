import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        green: {
          50: "hsl(var(--green-50))",
          100: "hsl(var(--green-100))",
          200: "hsl(var(--green-200))",
          300: "hsl(var(--green-300))",
          400: "hsl(var(--green-400))",
          500: "hsl(var(--green-500))",
          600: "hsl(var(--green-600))",
          700: "hsl(var(--green-700))",
        },
        blue: {
          50: "hsl(var(--blue-50))",
          400: "hsl(var(--blue-400))",
          500: "hsl(var(--blue-500))",
        },
        orange: {
          50: "hsl(var(--orange-50))",
          400: "hsl(var(--orange-400))",
          500: "hsl(var(--orange-500))",
        },
        red: {
          50: "hsl(var(--red-50))",
          400: "hsl(var(--red-400))",
          500: "hsl(var(--red-500))",
        },
        pink: {
          100: "hsl(var(--pink-100))",
          400: "hsl(var(--pink-400))",
          500: "hsl(var(--pink-500))",
        },
        yellow: {
          100: "hsl(var(--yellow-100))",
          400: "hsl(var(--yellow-400))",
          500: "hsl(var(--yellow-500))",
        },
        purple: {
          50: "hsl(var(--purple-50))",
          400: "hsl(var(--purple-400))",
          500: "hsl(var(--purple-500))",
        },
        stat: {
          blue: "hsl(var(--stat-blue))",
          green: "hsl(var(--stat-green))",
          pink: "hsl(var(--stat-pink))",
          yellow: "hsl(var(--stat-yellow))",
        },
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-lg': '0 4px 16px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
