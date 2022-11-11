import Image from 'next/image';

import contactImage from '../public/paintings/watercolour/venice.png';

// Components
import CustomHead from '../components/CustomHead';

// Icons
import { SlPhone, SlEnvolope } from 'react-icons/sl';

// Animations
import { motion } from 'framer-motion';
import { basicScrollAnimation } from '../Animations';

export default function contact() {
	return (
		<>
			<CustomHead
				title="Enquiries | Bert Wright Artist"
				description="Enquire about Original Watercolour Paintings, Oil Paintings, Limited Edition Prints & Commissions by Artist Bert Wright."
			/>
			<motion.div
				variants={basicScrollAnimation}
				initial="initial"
				whileInView="animate"
				viewport={{ once: true }}
				className="min-h-screen mt-10 md:my-16"
			>
				<h1 className="mb-8 md:mb-12 leading-tight md:leading-[1.2] lg:leading-[1.2] text-5xl md:text-7xl lg:text-7xl">
					Enquiries
				</h1>
				<div className="border-t border-b border-tertiary py-12 lg:py-16 lg:flex justify-between">
					<div className="left lg:w-6/12">
						<h2 className="text-xl md:text-2xl lg:text-3xl font-normal mb-10 lg:mb-14 lg:mt-8">
							For all enquiries regarding commissions and sales of original
							artwork and limited edition prints:
						</h2>
						<div className="space-y-4 md:space-y-6 lg:space-y-10 mb-12 lg:mb-0">
							<a
								href="mailto:Bert.Wright@Virgin.Net"
								className="group flex items-center space-x-8 w-max"
							>
								<SlEnvolope
									className="transition stroke-2 group-hover:scale-125"
									size={25}
								/>
								<p className="md:text-xl lg:text-2xl font-light">
									Bert.Wright@Virgin.Net
								</p>
							</a>
							<a
								href="tel:02085677119"
								className="group flex items-center space-x-8 w-max transition"
							>
								<SlPhone
									className="transition stroke-2 group-hover:scale-125"
									size={25}
								/>
								<p className="md:text-xl lg:text-2xl font-light">
									0208 567 7119
								</p>
							</a>
						</div>
					</div>
					<div className="right lg:w-5/12">
						<Image
							placeholder="blur"
							src={contactImage}
							width="1200"
							height="500"
							alt="Painting of Venice"
							priority
						/>
					</div>
				</div>
			</motion.div>
		</>
	);
}
