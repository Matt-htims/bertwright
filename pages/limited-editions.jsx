import Text from '../components/blocks/Text';
import Gallery from '../components/blocks/Gallery';

// Painting data
import { watercolourPaintingsData } from '../helperData/paintingData';

export default function limitedEditions() {
	return (
		<div className="min-h-screen mt-0 md:my-24">
			<Text title="Limited Editions" h1={true} />
			<Gallery data={watercolourPaintingsData} />
		</div>
	);
}
