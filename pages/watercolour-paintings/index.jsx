import { useState, useEffect } from 'react';

// Components
import CustomHead from '../../components/CustomHead';
import Text from '../../components/blocks/Text';
import Gallery from '../../components/blocks/Gallery';

// Painting data
import { watercolourPaintingsData } from '../../helperData/paintingData';

export default function watercolourPaintings() {
	const [paintingOpen, setPaintingOpen] = useState(false);
	const [currentPainting, setCurrentPainting] = useState({});

	function newPaintingHandler(painting) {
		setCurrentPainting(painting);
		setPaintingOpen(true);
	}

	function closePaintingHandler() {
		setPaintingOpen(false);
	}

	return (
		<>
			<CustomHead
				title="Watercolour Paintings | Bert Wright Artist"
				description="Original Watercolour Paintings by Artist Bert Wright with a particular interest in marine, landscape and town subjects."
			/>
			<div className="min-h-screen mt-0 md:my-24">
				<Text
					title="Watercolour Paintings"
					body={[
						'I have found that watercolours painted on location need to be achieved with a degree of confidence and speed in order to capture the fleeting nature of the scene to be completed. Watercolours have been referred to as “a one shot medium” which accurately describes the virtual inability to make any changes to the original artwork.',
						'I have found this a particular challenge when painting in hot desert like conditions with the paint drying rapidly on the paper, or in damp very humid conditions where the paint refuses to dry. The end results however fully justify these trials of outdoor painting. The examples shown have been painted in a wide variety of locations around the world.',
					]}
					h1={true}
				/>
				<Gallery data={watercolourPaintingsData} />
			</div>
		</>
	);
}
