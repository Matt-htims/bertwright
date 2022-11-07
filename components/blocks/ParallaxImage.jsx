import Image from 'next/image';

export default function ParallaxImage({ image }) {
	return (
		<div className="h-56 md:h-80 lg:h-96 relative my-10 md:my-14">
			<Image className="object-cover" src={image} fill />
		</div>
	);
}
