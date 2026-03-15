
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui") ],

  daisyui: {
    themes: [
      {
        mytheme: {
            ...themes["light"],
          // ...require("daisyui/src/theming/themes"),["light"],
          primary:"#FF3811",
//           .btn-primary {
//   background-color: #FF3811;
// }   ,   
          secondary: "teal",
          // ".btn-primary":{
          //   "color" : "#fff"
          // },
          // ".btn-outline.btn-primary:hover":{
          //   "color" : "#fff"
          // },
         
        },
      },
    ],
  },
}