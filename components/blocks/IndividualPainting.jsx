import Image from 'next/image';

export default function IndividualPainting({ painting }) {
	return (
		<div>
			<Image
				src={painting.src}
				width="1000"
				height="1000"
				alt={painting.title}
			/>
			<div>
				<h1>{painting.title}</h1>
				<p>{painting.description}</p>
			</div>
		</div>
	);
}
