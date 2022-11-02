import { useState } from 'react';

export default function Popup() {
	const [popup, setPopup] = useState(true);

	const hamburgerLine = `h-0.5 rounded-full w-7 transition ease transform duration-300`;

	if (!popup) {
		return '';
	}
	return (
		<div className="w-full bg-main py-3 fixed top-0 z-50">
			<div className="max-w-screen-2xl m-auto px-4 md:px-8 flex justify-between">
				<div className="w-7"></div>
				<p className="text-white text-center">
					Welcome to my new site! I hope you like it and can find everything you
					need.
				</p>
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
		</div>
	);
}
