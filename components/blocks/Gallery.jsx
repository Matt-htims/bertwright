import Image from 'next/image';

// Components
import GalleryImage from './GalleryImage';

export default function Gallery({ data, newPaintingHandler }) {
	return (
		<div className="md:columns-2 gap-8">
			{data.map((painting, index) => (
				<GalleryImage
					key={index}
					painting={painting}
					newPaintingHandler={newPaintingHandler}
				/>
			))}
		</div>
	);
}
