import Image from 'next/image';

// Painting data
import { watercolourPaintingsData } from '../../helperData/paintingData';

export default function WatercolourPainting({ data }) {
	const painting = data[0];
	console.log(painting);
	return (
		<div>
			<Image
				src={painting.src}
				width="1000"
				height="1000"
				alt={painting.title}
			/>
			<h1>{painting.title}</h1>
			<p>{painting.description}</p>
		</div>
	);
}

export async function getStaticPaths() {
	const paths = watercolourPaintingsData.map((painting) => ({
		params: { slug: painting.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const data = watercolourPaintingsData.filter((painting) => {
		return painting.slug === params.slug;
	});

	return {
		props: { data },
	};
}
