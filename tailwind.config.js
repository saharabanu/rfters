/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors:{
        'bluePrimary':"#3D00B7",
        'grayPrimary':"#C0C0C0",
        'graySecondary':'#EFEFEF',
        'blueSecondary':'#3B5998',
        'cyanSecondary':'#55ACEE',
        'lightBlue':'#007AB9'
      }
    },
  },
  plugins: [],
}
