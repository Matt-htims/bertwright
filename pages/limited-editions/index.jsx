// Components
import CustomHead from '../../components/CustomHead';
import Text from '../../components/blocks/Text';
import Gallery from '../../components/blocks/Gallery';

// Painting data
import { watercolourPaintingsData } from '../../helperData/paintingData';

export default function limitedEditions() {
	return (
		<>
			<CustomHead
				title="Limited Edition Paintings & Prints | Bert Wright Artist"
				description="Limited Edition Paintings & Prints by Artist Bert Wright with a particular interest in marine, landscape and town subjects."
			/>
			<div className="min-h-screen mt-0 md:my-24">
				<Text title="Limited Editions" h1={true} />
				<Gallery data={watercolourPaintingsData} />
			</div>
		</>
	);
}
