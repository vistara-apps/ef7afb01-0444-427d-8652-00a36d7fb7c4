import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        fg: "var(--color-fg)",
        accent: "var(--color-accent)",
        surface: "var(--color-surface)",
        success: "var(--color-success)",
        danger: "var(--color-danger)",
        muted: "var(--color-muted)",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0, 82, 255, 0.12)",
        hover: "0 12px 30px rgba(0, 82, 255, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
