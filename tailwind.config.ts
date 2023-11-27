import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      spacing: {
        container: '320px'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'night', // first one will be the default theme
      'emerald' // dark theme
    ]
  }
}
export default config
