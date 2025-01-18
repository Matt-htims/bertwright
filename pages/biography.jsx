import Image from 'next/image';

import contactImage from '../public/paintings/watercolour/venice.png';

// Components
import CustomHead from '../components/CustomHead';
import Text from '../components/blocks/Text';

// Icons
import { SlPhone, SlEnvolope } from 'react-icons/sl';

// Animations
import { motion } from 'framer-motion';
import { basicScrollAnimation } from '../Animations';

export default function contact() {
	return (
		<>
			<CustomHead
				title="Biography | Bert Wright Artist"
				description="Bert Wright has been a practicing artist for many years, selling his first painting at the age of 16 in 1946."
			/>
			<motion.div
				variants={basicScrollAnimation}
				initial="initial"
				whileInView="animate"
				viewport={{ once: true }}
				className="min-h-screen mt-10 md:my-24 mx-auto"
			>
				<div className="lg:w-9/12 mx-auto">
					<h1 className="mb-8 md:mb-12 leading-tight md:leading-[1.2] lg:leading-[1.2] text-5xl md:text-7xl lg:text-7xl font-main">
						Biography
					</h1>
				</div>
				<Text
					// title="Biography"
					body={[
						'Bert Wright has been a practicing artist for many years. He sold his first painting at the age of 16 in 1946 and has since then had a career in art covering many different aspects of this profession. He initially embarked on a career as an illustrator working on a diverse range of paintings depicting planned architectural projects for major companies. A number of these paintings were exhibited at the Royal Academy in London.',
						'He then embarked on a broader career developing and managing a studio of illustrators and designers and craftsmen involved in both general illustrations and technical illustrations, exhibition design and construction, and model making. His next move was into the field of television where he eventually became General Manager of the Scenery Group of the BBC with a staff numbering 1300 who were responsible for the scenic content of all television programs, both in studio and on location. In 1980 he decided, following discussion with his family, to go back to being a full time artist and since then has been a successful artist working in both oils and watercolours.',
						'His particular interest is in marine, landscape and town subjects. He principally works outdoors in all weathers and likes to complete a painting in one sitting if possible.',
						'He is Past President of the Royal Society of Marine Artists, Past President of the prestigious London Wapping Group, Past President of the Ealing Art Group and a member of the Chelsea Art Society. He has been a Governor of the Federation of British Artists and his work is exhibited at a number of National and International Galleries.',
						'Bert had a work visa for America as a professional artist and painted in numerous states for over 25 years. His work was regularly exhibited in many galleries in America. This year his work will be exhibited at the Ocean Reef club in the Florida Quays. His work will be exhibited alongside John Stobart’s work. Bert was a close friend and painted with John for many years.',
						'Recent commissions included a series of paintings of Oman for the Sultan of Oman. He painted on location in Oman as a guest of the Sultan. A number of individual companies have commissioned his work.',
						'The demand for his work continues to keep Bert fully occupied and active at 94 years of age, with 78 years of painting experience around the world. In America he has painted along both coastlines from Mexico to Canada and from the Florida Quays to Maine. This year he been visiting various locations in America and the U.K.',
						'His closing statement when opening exhibitions for himself and various Societies is always “ I hope that you will enjoy these paintings as much as we have enjoyed painting them”.',
					]}
					centerAligned
				/>
			</motion.div>
		</>
	);
}
