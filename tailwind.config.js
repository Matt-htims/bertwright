/** @type {import('tailwindcss').Config} */

// Fonts
const playfairDisplay = ['Playfair Display', 'serif'];
const poppins = ['Poppins', 'sans serif'];

// Colours
const black = '#2B2926';
const white = '#f4f1f0';
const darkBlue = '#2A424F';
const mediumBlue = '#195B7E';
const grey = '#D4D4D4';

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			screens: {
				lg: '1250px',
				xl: '1400px',
				'2xl': '1620px',
			},
			fontFamily: {
				accent: playfairDisplay,
				main: poppins,
			},
			colors: {
				black,
				white,
				main: darkBlue,
				secondary: mediumBlue,
				tertiary: grey,
			},
		},
	},
	plugins: [],
};
