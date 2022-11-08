import Image from 'next/image';

export default function Gallery({ data }) {
	return (
		<div>
			{data.map((painting) => (
				<div key={painting.title}>
					<Image
						src={painting.src}
						width="1000"
						height="1000"
						alt={painting.title}
					/>
					<h3>{painting.title}</h3>
					<p>{painting.description}</p>
				</div>
			))}
		</div>
	);
}
