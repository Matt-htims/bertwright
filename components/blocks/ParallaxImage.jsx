import Image from 'next/image';

// Animation
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxImage({ image, placeholder = false }) {
	let ref = useRef(null);
	let { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});
	let y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
	return (
		<div
			ref={ref}
			className="h-56 md:h-80 lg:h-96 relative my-10 md:my-14 overflow-hidden"
		>
			<motion.div style={{ y }} className="absolute md:-top-1/2 lg:-top-3/4">
				<Image
					placeholder={placeholder ? 'blur' : 'empty'}
					src={image}
					width="1800"
					height="1000"
					alt="Painting of Richmond bridge"
				/>
			</motion.div>
		</div>
	);
}
