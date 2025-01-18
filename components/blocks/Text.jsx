// Animations
import { motion } from 'framer-motion';
import { basicScrollAnimation } from '../../Animations';

export default function Text({
	title,
	body,
	leftAligned = true,
	h1 = false,
	centerAligned = false,
}) {
	return (
		<motion.section
			variants={basicScrollAnimation}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
			className={`lg:w-9/12 border-t border-b border-tertiary my-10 md:my-14 py-8 md:py-12 ${
				!leftAligned ? 'ml-auto' : ''
			} ${centerAligned ? 'mx-auto' : ''}`}
		>
			{h1 ? (
				<h1
					className={`leading-tight md:leading-[1.2] lg:leading-[1.2] text-5xl md:text-7xl lg:text-7xl font-main ${
						body && title ? 'mb-5 md:mb-10' : ''
					}`}
				>
					{title}
				</h1>
			) : (
				<h2
					className={` leading-tight md:leading-[1.2] lg:leading-[1.2] text-3xl md:text-4xl lg:text-6xl ${
						body && title ? 'mb-5 md:mb-10' : ''
					}`}
				>
					{title}
				</h2>
			)}
			<div className="body md:text-justify">
				{body &&
					body.map((text, index) => (
						<p
							key={index}
							className="my-8 first:mt-0 last:mb-0 text-base md:text-xl leading-loose md:leading-relaxed font-"
						>
							{text}
						</p>
					))}
			</div>
		</motion.section>
	);
}
