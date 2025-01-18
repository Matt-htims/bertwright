import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Animations
import { motion } from 'framer-motion';
import { basicScrollAnimation } from '../../Animations';

export default function GalleryImage({ painting, className }) {
	const router = useRouter();
	return (
		<div className="hover:scale-[1.02] transition duration-300">
			<Link href={router.asPath + '/' + painting.slug}>
				<motion.div
					variants={basicScrollAnimation}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					className={className}
				>
					<Image
						src={painting.src}
						width="1000"
						height="1000"
						alt={painting.title}
					/>
					<div className="border-b border-tertiary mb-8 lg:mb-10 space-y-2 py-4">
						<h3 className="text-xl md:text-2xl font-normal font-main">
							{painting.title}
						</h3>
						{/* <p className="text-base font-light text-justify">
							{painting.description}
						</p> */}
					</div>
				</motion.div>
			</Link>
		</div>
	);
}
