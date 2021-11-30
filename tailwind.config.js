module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#2563EB',
        mainDark: '#64ffda',
        navy: '#0a192f',
        lightNavy: '#112240',
        slate: '#8892b0',
        lightSlate: '#a8b2d1',
        lightestSlate: '#ccd6f6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
