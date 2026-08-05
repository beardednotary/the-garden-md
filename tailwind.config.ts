import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-light": "var(--paper-light)",
        ink: "var(--ink)",
        "green-dark": "var(--green-dark)",
        green: "var(--green)",
        "green-muted": "var(--green-muted)",
        soil: "var(--soil)",
        rust: "var(--rust)",
        yellow: "var(--yellow)",
        border: "var(--border)",
        muted: "var(--muted-text)"
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"]
      },
      maxWidth: {
        shell: "1180px",
        prose: "760px"
      },
      boxShadow: {
        panel: "0 1px 0 rgba(36, 49, 38, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
