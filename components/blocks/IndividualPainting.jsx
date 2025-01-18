import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Animations
import { motion } from 'framer-motion';
import { basicScrollAnimation } from '../../Animations';

import { FiArrowLeft } from 'react-icons/fi';

export default function IndividualPainting({ painting }) {
	const router = useRouter();

	const returnLink = router.asPath.replace(router.query.slug, '');

	return (
		<div className="pb-0">
			<div className="h-[calc(100vh-80px)] relative overlow-auto pt-8">
				<Link className="flex items-center space-x-2 mb-1" href={returnLink}>
					<FiArrowLeft />
					<p className="text-sm">Back to previous page</p>
				</Link>
				<motion.div
					variants={basicScrollAnimation}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					className="h-full border-top"
				>
					<div className="h-[65%] md:h-[80%] flex center relative">
						<Image
							src={painting.src}
							fill
							alt={painting.title}
							className="object-contain py-8"
							priority
						/>
					</div>
					<div className="text-center space-y-3 max-w-xl m-auto">
						<h1 className="text-4xl font-medium font-main">{painting.title}</h1>
						{/* <p className="text-base font-light">{painting.description}</p> */}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
