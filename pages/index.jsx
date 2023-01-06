import Image from 'next/image';
import Head from 'next/head';

import heroImage from '../public/paintings/watercolour/richmond.png';
import parralaxImage from '../public/paintings/watercolour/richmond.png';

// Animation
import { motion } from 'framer-motion';
import { basicScrollAnimation } from '../Animations';

// Components
import Text from '../components/blocks/Text';
import ParallaxImage from '../components/blocks/ParallaxImage';

export default function Home() {
	return (
		<>
			<Head></Head>
			<div className="min-h-screen">
				<section className="intro">
					<h1 className="text-[75px] md:text-[160px] lg:text-[130px] xl:text-[180px] font-semibold leading-[80%] z-20 absolute top-[95px] md:top-[105px] lg:top-[139px] xl:top-[70px] z-20">
						Bert <br />
						Wright
					</h1>

					<motion.div
						variants={basicScrollAnimation}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						className="w-full relative after:absolute after:top-0 after:h-full after:w-full after:bg-black/10 overflow-hidden"
					>
						<Image
							placeholder="blur"
							src={heroImage}
							alt="Watercolour painting of Richmond"
							width="1556"
							height="942"
							priority
						/>
					</motion.div>
				</section>
				<Text
					title={
						<>
							<span className="text-secondary">Bert Wright</span> has been a
							practicing artist for many years, selling his first painting at
							the age of 16 in 1946.
						</>
					}
					body={[
						'Since then he has had a career in art covering many different aspects of this profession. He initially embarked on a career as an illustrator working on a  diverse range of  paintings depicting planned architectural subjects for major companies.',
						'He then embarked on a broader career developing and managing a studio of illustrators and designers and craftsmen involved in both general illustrations and technical illustrations, exhibition design and construction, and model making. His next move was into the field of television where he eventually became General Manager of the Scenery Group of the BBC with a staff numbering 1300. In 1980 he decided, following discussion with his family, to go back to being a full time artist and since then has been a successful artist working in both oils and watercolours.',
						'His particular interest is in marine, landscape and town subjects. He principally works outdoors in all weathers and likes to complete a painting in one sitting if possible.',
					]}
				/>
				<ParallaxImage image={parralaxImage} placeholder={true} />
				<Text
					title="Past President of the Royal Society of Marine Artists..."
					body={[
						'Past President of the prestigious London Wapping Group, Past President of the Ealing Art Group and a member of the Chelsea Art Society. He has been a Governor of the Federation of British Artists and his work is exhibited at a number of National and International Galleries..',
						'Bert has been visiting and painting in America for the past 25 years and has an association with a number of galleries in the States. He recently completed a number of paintings for the Sultan of Oman and is currently working on commissions for international companies.',
						'The demand for his work continues to keep Bert fully occupied and over the years his painting has taken him to many parts of the world. In America he has painted along both coastlines from Mexico to Canada and from the Florida Quays to Maine. This year he has been visiting various locations in America and the U.K.',
					]}
					leftAligned={false}
				/>
			</div>
		</>
	);
}
