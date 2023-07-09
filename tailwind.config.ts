import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.tsx', './components/**/*.tsx'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {},
}

export default config
