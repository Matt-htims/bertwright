import Image from 'next/image';

// Images
import mainImage from '../public/paintings/richmond.png';

export default function Home() {
	return (
		<div className="max-w-screen-2xl m-auto px-8 min-h-screen">
			<div className="intro">
				<h1 className="text-[180px] font-semibold leading-[80%] z-20 relative top-9">
					Bert
					<br />
					Wright
				</h1>
				<div className="w-full h-[900px] relative z-10 after:absolute after:h-full after:w-full after:bg-black/10">
					<Image
						src="/paintings/richmond.png"
						alt="Watercolour painting of Richmond"
						fill={true}
						objectFit="cover"
					/>
				</div>
			</div>
		</div>
	);
}
