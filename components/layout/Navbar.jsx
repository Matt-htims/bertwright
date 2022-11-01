import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data
import { navbarData } from '../../helperData/navbarData';

export default function Navbar() {
	const [open, setOpen] = useState(false);

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

	const hamburgerLine = `h-0.5 rounded-full w-9 transition ease transform duration-300`;

	return (
		<header className="sticky top-0 w-full z-50">
			<nav className="z-50 w-full max-w-screen-2xl m-auto px-8 bg-white after:block after:h-px after:w-full after:bg-black">
				<div className="flex justify-between items-center py-4 px-1">
					<Link
						href="/"
						passHref={true}
						className="text-3xl font-accent font-bold"
						onClick={closeTray}
					>
						{navbarData.brand}
					</Link>
					<div className="hidden lg:block space-x-9">
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
			<div
				onClick={handleTray}
				className={`w-full h-screen bg-main flex justify-center absolute top-0 z-40 overflow-hidden ${
					!open ? 'hidden' : ''
				}`}
			>
				{open ? (
					<div className="flex flex-col justify-center items-center space-y-7">
						{navbarData.navLinks.map((item) => (
							<Link
								href={item.url}
								key={item.id}
								onClick={handleTray}
								className="text-white text-5xl transition hover:text-black font-main"
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
	);
}
