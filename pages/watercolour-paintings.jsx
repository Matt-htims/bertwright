import { useState, useEffect } from 'react';

// Components
import Text from '../components/blocks/Text';
import Gallery from '../components/blocks/Gallery';
import GalleryImage from '../components/blocks/GalleryImage';

// Painting data
import { watercolourPaintingsData } from '../helperData/paintingData';

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
		<div className="min-h-screen mt-0 md:my-24">
			<Text
				title="Watercolour Paintings"
				body={[
					'I have found that watercolours need to be achieved with a degree of confidence and speed in order to capture the fleeting nature of the quality of light. Watercolours have been referred to as “a one shot medium” which accurately describes the virtual inability to make any changes to the original artwork.',
					'I have found this a particular challenge when painting in hot desert like conditions with the paint drying rapidly on the paper, or in damp very humid conditions where the paint refuses to dry. The end results however fully justify these trials of outdoor painting. The examples shown have been painted in a wide variety of locations around the world.',
				]}
				h1={true}
			/>
			<Gallery
				data={watercolourPaintingsData}
				newPaintingHandler={newPaintingHandler}
			/>
			{paintingOpen ? (
				<div
					onClick={closePaintingHandler}
					className="w-screen h-screen bg-black/30 fixed z-50 top-0 left-0"
				>
					<div>
						<GalleryImage
							painting={currentPainting}
							newPaintingHandler={newPaintingHandler}
						/>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
}
