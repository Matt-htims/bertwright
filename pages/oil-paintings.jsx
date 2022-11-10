// Components
import CustomHead from '../components/CustomHead';
import Text from '../components/blocks/Text';
import Gallery from '../components/blocks/Gallery';

// Painting data
import { watercolourPaintingsData } from '../helperData/paintingData';

export default function oilPaintings() {
	return (
		<>
			<CustomHead
				title="Oil Paintings | Bert Wright Artist"
				description="Original Oil Paintings by Artist Bert Wright with a particular interest in marine, landscape and town subjects."
			/>
			<div className="min-h-screen mt-0 md:my-24">
				<Text
					title="Oil Paintings"
					body={[
						'My experience with oils has been the big advantage that oils have over watercolours in that they can be worked on many times to achieve the desired result. This means that the location painting can be finished off in the studio.',
						'When painting with oils outdoors I use a drying medium that enables the painting to be touch dry in a matter of hours, this is a big asset when traveling to a number of locations. Weather conditions are more containable with oils than watercolours, particularly in damp or wet weather.',
					]}
					h1={true}
				/>
				<Gallery data={watercolourPaintingsData} />
			</div>
		</>
	);
}
