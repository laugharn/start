import { Config } from "tailwindcss";

const config = {
  content: ['./app/**/*.tsx', './components/**/*.tsx'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {},
} as Config

export default config
