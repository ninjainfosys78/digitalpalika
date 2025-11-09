import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: ['app/**/*.{ts,tsx}', 'src/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: [typography],
} satisfies Config
