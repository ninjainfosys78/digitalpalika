import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: ['app/**/*.{ts,tsx}', 'src/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ni: {
          ink: "#0b0d12",
          paper: "#ffffff",
          graphite: "#1f2430",
          slate: "#2c3242",
          accent: "#0f62fe",
          "accent-2": "#7a5af8",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-heading)", "ui-serif", "Georgia"],
        serif: ["var(--font-heading)", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [typography],
} satisfies Config
