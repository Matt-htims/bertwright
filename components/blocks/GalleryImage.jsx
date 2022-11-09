import Image from 'next/image';

export default function GalleryImage({ painting, className }) {
	return (
		<div className={className}>
			<Image
				src={painting.src}
				width="1000"
				height="1000"
				alt={painting.title}
			/>
			<div className="border-b border-tertiary pt-5 pb-4 mb-6 space-y-3">
				<h3 className="text-2xl md:text-3xl font-semibold md:font-medium ">
					{painting.title}
				</h3>
				<p className="text-base text-justify">{painting.description}</p>
			</div>
		</div>
	);
}
