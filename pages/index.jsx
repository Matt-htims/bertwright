import Image from 'next/image';

// Images
import mainImage from '../public/paintings/richmond.png';

export default function Home() {
	return (
		<div className="max-w-screen-2xl m-auto px-4 md:px-8 min-h-screen">
			<div className="intro">
				<h1 className="text-[75px] md:text-[160px] lg:text-[130px] xl:text-[180px] font-semibold leading-[80%] z-20 absolute top-[82px] md:top-[92px] lg:top-[135px] xl:top-16 z-20">
					Bert
					<br />
					Wright
				</h1>
				<div className="w-full relative after:absolute after:top-0 after:h-full after:w-full after:bg-black/10">
					<Image
						src="/paintings/richmond.png"
						alt="Watercolour painting of Richmond"
						width="1556"
						height="942"
					/>
				</div>
			</div>
		</div>
	);
}
