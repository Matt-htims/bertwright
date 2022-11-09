import Image from 'next/image';

// Components
import GalleryImage from './GalleryImage';

export default function Gallery({ data }) {
	return (
		<div className="md:columns-2 break-inside-auto gap-8">
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
