import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          150: "var(--primary-150)",
          200: "var(--primary-200)",
          250: "var(--primary-250)",
          300: "var(--primary-300)",
        },
        secondary: {
          50: "var(--secondary-50)",
          100: "var(--secondary-100)",
          150: "var(--secondary-150)",
          200: "var(--secondary-200)",
          250: "var(--secondary-250)",
          300: "var(--secondary-300)",
          350: "var(--secondary-350)",
        },
      },
    },
  },
} satisfies Config;
