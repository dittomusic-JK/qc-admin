/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Ditto framework colors (shared DNA with ditto-trends)
        "ditto-purple": "var(--ditto-purple)",
        "ditto-black": "var(--ditto-black)",
        "ditto-grey": "var(--ditto-grey)",
        "ditto-pro": "var(--ditto-pro)",
        "ditto-label": "var(--ditto-label)",

        // Admin semantic palette
        "ink": "#101f3c",
        "subtext": "#626984",
        "prompt": "#b1b1c3",
        "surface": "#f7f7fc",
        "hairline": "#e4e4ef",
        "hairline-strong": "#d2d2e3",
        "lavender": "#efeffc",
        "lavender-soft": "#f9f9ff",
        "accent": "#5f1fff",
        "accent-soft": "#f3edff",

        // Status system (bg = color/10, text = -ink variant)
        "success": "#00d346",
        "success-ink": "#00893f",
        "warning": "#ffb100",
        "warning-ink": "#9c6a00",
        "danger": "#ee404c",
        "danger-ink": "#d92121",
        "info": "#287ef7",
        "info-ink": "#1d64c9",
      },
      fontFamily: {
        "satoshi": ["Satoshi", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        // Tighter, denser scale than trends — admin posture
        "h1": ["1.375rem", { lineHeight: "1.75rem", letterSpacing: "-0.02em", fontWeight: "700" }],
        "h2": ["1.125rem", { lineHeight: "1.5rem", letterSpacing: "-0.01em", fontWeight: "700" }],
        "h3": ["0.9375rem", { lineHeight: "1.375rem", fontWeight: "600" }],
        "body": ["0.875rem", { lineHeight: "1.375rem" }],
        "table": ["0.8125rem", { lineHeight: "1.25rem" }],
        "xs": ["0.75rem", { lineHeight: "1rem" }],
        "2xs": ["0.6875rem", { lineHeight: "0.875rem", letterSpacing: "0.05em", fontWeight: "600" }],
      },
      borderRadius: {
        "card": "0.75rem",
        "control": "0.5rem",
      },
      boxShadow: {
        "card": "0 1px 2px rgba(16, 31, 60, 0.04), 0 1px 3px rgba(16, 31, 60, 0.06)",
        "pop": "0 4px 16px rgba(16, 31, 60, 0.10), 0 1px 3px rgba(16, 31, 60, 0.08)",
      },
    },
  },
  plugins: [],
};
