export const basicScrollAnimation = {
	initial: { opacity: 0, y: 30 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: [0.6, 0.05, -0.01, 0.9],
		},
	},
};

export const reverseScrollAnimation = {
	initial: { opacity: 0, y: -30 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: [0.6, 0.05, -0.01, 0.9],
		},
	},
};

export const fadeInAnimation = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			duration: 1,
			ease: [0.6, 0.05, -0.01, 0.9],
		},
	},
};
export const fastFadeInAnimation = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			duration: 0.7,
			ease: [0.6, 0.05, -0.01, 0.9],
		},
	},
};
