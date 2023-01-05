import Image from 'next/image';

// Components
import IndividualPainting from '../../components/blocks/IndividualPainting';

// Painting data
import { watercolourPaintingsData } from '../../helperData/paintingData';

export default function WatercolourPainting({ data }) {
	const painting = data[0];
	console.log(painting);
	return (
		<div>
			<IndividualPainting painting={painting} />
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
