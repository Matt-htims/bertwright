import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
			{onHome ? <div className="lg:h-64"></div> : ''}
			<header
				className={`sticky top-0 w-full ${
					onHome && scrollPosition < scrollAim && !open ? 'z-20' : 'z-50'
				} `}
			>
				<nav className={`transition  z-40 h-[68px] w-full bg-white `}>
					<div className="max-w-screen-2xl m-auto px-4 md:px-8 flex justify-between items-center py-4 h-[68px]">
						<Link
							href="/"
							passHref={true}
							className="text-3xl font-accent font-bold transition"
							onClick={closeTray}
						>
							{checkPageAndScroll(navbarData.brand)}
						</Link>
						<div className="hidden lg:block space-x-8">
							{navbarData.navLinks.map((item) => (
								<Link
									href={item.url}
									key={item.id}
									className="text-black text-xl transition hover:text-main font-main"
								>
									{item.title}
								</Link>
							))}
						</div>
						<button
							onClick={handleTray}
							className="flex flex-col justify-center items-center cursor-pointer text-white block lg:hidden z-50"
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
					</div>
				</nav>
				{onHome ? <div className="h-32 md:h-64 mt-2 lg:hidden"></div> : ''}
				<div
					onClick={handleTray}
					className={`w-full h-screen bg-main flex justify-center absolute top-0 z-40 overflow-hidden ${
						!open ? 'hidden' : ''
					}`}
				>
					{open ? (
						<div className="flex flex-col justify-center items-center space-y-8 md:space-y-10">
							{navbarData.navLinks.map((item) => (
								<Link
									href={item.url}
									key={item.id}
									onClick={handleTray}
									className="text-white text-3xl text-center md:text-5xl transition hover:text-black font-main"
								>
									{item.title}
								</Link>
							))}
						</div>
					) : (
						''
					)}
				</div>
			</header>
		</>
	);
}
