const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: false,
  theme: {
    colors: {
      primary: {
        normal: '#c1710f',
        light: '#FF9812',
        lighter: '#FFAF57'
      },
      secondary: '#bbebff', // '#78D9FF',
      black: '#242424',
      white: '#F7F9FA',
      grey: '#7f7f7f'
    },
    fontFamily: {
      script: "'Kalam', sans-serif",
      sans: "'Open Sans', sans-serif"
    },
    fill: {
      white: '#F7F9FA'
    },
    stroke: {
      black: '#242424'
    },
    extend: {
      maxWidth: {
        contact: '200px'
      },
      minHeight: {
        screen: '100vh'
      },
      width: {
        icon: '30px'
      },
      strokeWidth: {
        '3': '3'
      },
      height: {
        icon: '30px'
      },
      maxHeight: {
        contact: '200px'
      },
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '1/3': '33.333333%',
        '3/4': '75%'
      },
      scale: {
        '101': '1.005'
      },
      inset: {
        '50': '50%'
      },
      screens: {
        print: {
          raw: 'print'
        }
      }
    }
  },
  variants: {},
  plugins: [
    plugin(function({ addComponents }) {
      const components = {
        '.curved-border': {
          position: 'relative',
          backgroundColor: 'transparent',
          border: '2px solid #000',
          borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px'
        },
        '.image': {
          border: '15px solid #fff',
          boxShadow: '7px 4px 24px 0 rgba(138, 138, 138, 1)'
        }
      }

      addComponents(components)
    })
  ],
  future: {
    removeDeprecatedGapUtilities: true
  }
}
