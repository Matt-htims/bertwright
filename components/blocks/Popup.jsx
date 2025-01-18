import { useState } from 'react';
import { useRouter } from 'next/router';

// Animations
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInAnimation } from '../../Animations';

export default function Popup() {
	const router = useRouter();
	const [popup, setPopup] = useState(true);

	const hamburgerLine = `h-0.5 rounded-full w-7 transition ease transform duration-300`;

	if (router.asPath !== '/') {
		return '';
	}
	return (
		<AnimatePresence>
			{popup && (
				<motion.div
					variants={fadeInAnimation}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					exit={{ opacity: 0 }}
					className="w-full bg-main py-2 fixed hidden lg:block top-0 z-30"
				>
					<div className="max-w-screen-2xl m-auto px-4 md:px-8 flex justify-between">
						<div className="w-7"></div>
						<p className="text-white text-center">Welcome to my new site</p>
						<button
							onClick={() => setPopup(false)}
							className="flex flex-col justify-center items-center cursor-pointer text-white"
						>
							<div
								className={`${hamburgerLine} mb-3.5 rotate-45 translate-y-2 bg-white`}
							></div>
							<div
								className={`${hamburgerLine} -rotate-45 -translate-y-2 bg-white`}
							></div>
						</button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
