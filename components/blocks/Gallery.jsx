import Image from 'next/image';

// Components
import GalleryImage from './GalleryImage';

export default function Gallery({ data }) {
	return (
		<div className="md:columns-2 lg:columns-3 break-inside-auto md:gap-8 lg:gap-10">
			{data.map((painting, index) => (
				<GalleryImage
					className="break-inside-avoid"
					key={index}
					painting={painting}
				/>
			))}
		</div>
	);
}
