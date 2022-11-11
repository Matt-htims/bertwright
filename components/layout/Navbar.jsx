import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Animations
import { motion, AnimatePresence } from 'framer-motion';
import { reverseScrollAnimation, fastFadeInAnimation } from '../../Animations';

// Custom hooks
import useScrollPosition from '../../hooks/useScrollPosition';
import useWindowDimensions from '../../hooks/useWindowDimensions';

// Data
import { navbarData } from '../../helperData/navbarData';

export default function Navbar() {
	const router = useRouter();
	const scrollPosition = useScrollPosition();
	const windowDimensions = useWindowDimensions();
	const [open, setOpen] = useState(false);

	const [onHome, setOnHome] = useState(true);

	useEffect(() => {
		if (router.asPath == '/') {
			setOnHome(true);
		} else {
			setOnHome(false);
		}

		if (windowDimensions.width > 1250) {
			setOpen(false);
		}
	});

	function handleTray() {
		setOpen(!open);
	}
	function closeTray() {
		setOpen(false);
	}

	// useEffect(() => {
	// 	if (open) {
	// 		document.body.style.overflow = 'hidden';
	// 	} else {
	// 		document.body.style.overflow = 'unset';
	// 	}
	// });

	let scrollAim = 256;
	if (windowDimensions.width < 768) {
		scrollAim = 128;
	}

	const checkPageAndScroll = (output, alternative = '') => {
		return (onHome && scrollPosition > scrollAim) || !onHome
			? output
			: alternative;
	};
	const hamburgerLine = `h-0.5 rounded-full w-9 transition ease transform duration-300`;

	return (
		<>
			{onHome ? <div className="lg:h-60"></div> : ''}
			<header
				className={`sticky top-0 w-full ${
					onHome && scrollPosition < scrollAim && !open ? 'z-20' : 'z-50'
				} `}
			>
				<nav className="transition z-40 w-full bg-white">
					<motion.div
						variants={reverseScrollAnimation}
						initial="initial"
						whileInView="animate"
						className="max-w-screen-2xl m-auto px-6 md:px-8 flex justify-between items-center py-10 h-[68px]"
					>
						<Link
							href="/"
							passHref={true}
							className="text-3xl font-accent font-bold transition"
							onClick={closeTray}
						>
							{checkPageAndScroll(navbarData.brand)}
						</Link>
						<div className="hidden lg:block space-x-12">
							{navbarData.navLinks.map((item) =>
								item.buttn ? (
									<Link
										href={item.url}
										key={item.id}
										className={`px-4 transition py-2 border border-main shadow text-black hover:text-white hover:bg-main text-xl font-main ${
											router.pathname == item.url ? '' : ''
										}`}
									>
										{item.title}
									</Link>
								) : (
									<Link
										href={item.url}
										key={item.id}
										className={`text-black pb-0.5 text-xl font-normal relative transition font-main link-animation ${
											router.pathname == item.url ? 'link-animation-active' : ''
										}`}
									>
										{item.title}
									</Link>
								)
							)}
						</div>
						<button
							onClick={handleTray}
							className="flex flex-col justify-center items-center cursor-pointer text-white lg:hidden z-50"
						>
							<div
								className={`${hamburgerLine} mb-3.5 ${
									open ? 'rotate-45 translate-y-2 bg-white' : 'bg-black'
								}`}
							></div>
							<div
								className={`${hamburgerLine} ${
									open ? '-rotate-45 -translate-y-2 bg-white' : 'bg-black'
								}`}
							></div>
						</button>
					</motion.div>
				</nav>

				{onHome ? <div className="h-28 md:h-60 mt-2 lg:hidden"></div> : ''}
				<AnimatePresence>
					{open && (
						<motion.div
							variants={fastFadeInAnimation}
							initial="initial"
							animate="animate"
							viewport={{ once: true }}
							exit={{ opacity: 0 }}
							onClick={handleTray}
							className={`w-full h-screen bg-main flex justify-center absolute top-0 z-40 overflow-hidden`}
						>
							<div className="flex flex-col justify-center items-center space-y-10 md:space-y-14">
								{navbarData.navLinks.map((item) => (
									<Link
										href={item.url}
										key={item.id}
										onClick={handleTray}
										className="text-white text-3xl font-medium md:font-normal text-center md:text-6xl pb-1 transition font-accent relative large-link-animation"
									>
										{item.title}
									</Link>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</header>
		</>
	);
}
