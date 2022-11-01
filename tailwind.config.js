/** @type {import('tailwindcss').Config} */

// Fonts
const playfairDisplay = ['Playfair Display', 'serif'];
const poppins = ['Poppins', 'sans serif'];

// Colours
const black = '#181715';
const white = '#FDFEFF';
const darkBlue = '#2A424F';

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
			},
		},
	},
	plugins: [],
};
