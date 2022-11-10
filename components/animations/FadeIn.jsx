import { motion } from 'framer-motion';

export default function FadeIn({ content, className }) {
	const fade = {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				duration: 1,
				ease: [0.6, 0.05, -0.01, 0.9],
			},
		},
	};
	return (
		<motion.div
			variants={fade}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
			className={className}
		>
			{content}
		</motion.div>
	);
}
