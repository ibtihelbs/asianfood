module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Marko-One': ['"Marko One"', 'serif'],
      },
      fontSize: {
        intro: ['10em',{
          lineHeight: '10rem',
        }],
        introTablet: ['5em',{
          lineHeight: '5rem',
        }],
        introMobile: ['2em',{
          lineHeight: '2rem',
        }],
        heading: ['2rem', {
          lineHeight: '1rem',
        }],
        subheading: ['3rem'],
        sub_heading: ['1rem'],
      },
      colors: {
        transparent: 'transparent',
        'white': '#ffffff',
        'lightgrey': '#F8F8F8',
        'red': '#DF0000',
        'mediumgrey': '#C4C4C4',
        'darkgrey': '#8E8F9C',
        
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}



