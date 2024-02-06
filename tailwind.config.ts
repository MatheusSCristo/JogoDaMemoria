import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main':"url('/imgs/background.svg')"
      },
      colors:{
        'textYellow':"#ECC839",
        'bgRed':"#2B0E11",
        'textOrange':"#EE9430",
        'bgGray':"#15181F"
      },
      fontFamily:{
        'openS':'Opens Sans'
      }
    },
  },
  plugins: [],
};
export default config;
