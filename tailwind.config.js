/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{ts,tsx,html,js}"],
    theme: {
    backgroundSize: {
      "aboutSection":"auto 111%"
    },
    fontFamily: {
      monterchi:[
        'Monterchi Trial sans-serif', 
      ],
      lora:[
        "Lora"
      ],
      grotesk:[
        "Amazing Grotesk"
      ]
    },
    letterSpacing: {
      navigateLink: '1px',
      tight: '2px',
     
    },
    backgroundPosition: {
      bottom:"0% -82px"
    },
    screens: {
      sm: '320px',
      //=> @media (min-width: 360px) { ... }
      lightPhoneSize:"361px",
      mediumPhoneSize:"374px",
      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '820px',
      // => @media (min-width: 820px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '1xl': '1366px',
      // => @media (min-width: 1366px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    colors: {
     white:"#fff",
     textColor:"#1C0606",
     error:"#FF0000",
     lightOrange:"#ff914d",
     mainOrange:"#f46530",
     overlay:"#e3e3e3",
     darkOrange:"#a06c2b",
     darkOrangeMoble:"#F7C285",
     transparent:"transparent",
     lightBlue:"#d4edf4",
     warning:"yellow",
     success:"lightgreen",
     blockedText:"#a5a5a5",
     formInputText:"#9ca3af",
     blockedButton:"#ebebeb"

    },
    backgroundImage: {
      tutorBanner: `url("../components/images/Rectangle 1.png")`,
      aboutSection: `url("../components/images/Rectangle 2.png")`,
      feedbackSection: `url("../components/images/Rectangle 3.png")`,
      reelsSection: `url("../components/images/Rectangle 4.png")`,
      priceListSection: `url("../components/images/Rectangle 5.png")`,


      actionBtns:"linear-gradient(60deg, #E34586 20%, #5883D8 100%)",
      cardsBtns:"linear-gradient(60deg, #E34586 20%, #5883D8 100%)",

      // topicsList:"linear-gradient(-180deg, rgba(44, 7, 58, 33) 0%, rgba(75, 210, 253, 35) 75%, rgba(67, 61, 193, 64) 69%, rgba(44, 7, 58, 33) 100%)"
  
    },
    extend: {
      lineHeight: {
        'extra-loose': '2.74rem',
      },
      height: {
        '2screens': '200vh',
      },
      blur: {
        xs: '2px',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        shake: 'shake 5s ease-in-out infinite',
      },
    }
    
  },
  plugins: [
    require("tailwind-hamburgers")
  ],
}