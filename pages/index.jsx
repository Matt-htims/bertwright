import Image from 'next/image';

// Components
import Text from '../components/blocks/Text';

export default function Home() {
	return (
		<div className="min-h-screen">
			<section className="intro">
				<h1 className="text-[75px] md:text-[160px] lg:text-[130px] xl:text-[180px] font-semibold leading-[80%] z-20 absolute top-[100px] md:top-[110px] lg:top-[143px] xl:top-[72px] z-20">
					Bert
					<br />
					Wright
				</h1>
				<div className="w-full relative after:absolute after:top-0 after:h-full after:w-full after:bg-black/10">
					<Image
						src="/paintings/richmond.png"
						alt="Watercolour painting of Richmond"
						width="1556"
						height="942"
					/>
				</div>
			</section>
			<Text
				title={
					<>
						<span className="text-secondary">Bert Wright</span> has been a
						practicing artist for many years, selling his first painting at the
						age of 16 in 1946.
					</>
				}
				body={[
					'Since then he has had a career in art covering many different aspects of this profession. He initially embarked on a career as an illustrator working on a  diverse range of  paintings depicting planned architectural subjects for major companies.',
					'He then embarked on a broader career developing and managing a studio of illustrators and designers and craftsmen involved in both general illustrations and technical illustrations, exhibition design and construction, and model making. His next move was into the field of television where he eventually became General Manager of the Scenery Group of the BBC with a staff numbering 1300. In 1980 he decided, following discussion with his family, to go back to being a full time artist and since then has been a successful artist working in both oils and watercolours.',
					'His particular interest is in marine, landscape and town subjects. He principally works outdoors in all weathers and likes to complete a painting in one sitting if possible.',
				]}
			/>
		</div>
	);
}
