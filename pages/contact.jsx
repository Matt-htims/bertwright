import Image from 'next/image';

// Icons
import { FiPhone, FiMail } from 'react-icons/fi';

export default function contact() {
	return (
		<div className="min-h-screen mt-10 md:my-16">
			<h1 className="mb-8 md:mb-12 leading-tight md:leading-[1.2] lg:leading-[1.2] text-5xl md:text-7xl lg:text-7xl">
				Contact me
			</h1>
			<div className="border-t border-b border-tertiary py-12 lg:py-16 lg:flex justify-between">
				<div className="left lg:w-6/12">
					<p className="text-xl md:text-2xl lg:text-3xl font-normal mb-10 lg:mb-14 lg:mt-8">
						For all enquiries regarding commissions and sales of original
						artwork and limited edition prints:
					</p>
					<div className="space-y-4 md:space-y-6 lg:space-y-10 mb-12 lg:mb-0">
						<a
							href="mailto:Bert.Wright@Virgin.Net"
							className="group flex items-center space-x-8 w-max"
						>
							<FiMail
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
							<FiPhone
								className="transition stroke-2 group-hover:scale-125"
								size={25}
							/>
							<p className="md:text-xl lg:text-2xl font-light">0208 567 7119</p>
						</a>
					</div>
				</div>
				<div className="right lg:w-5/12">
					<Image src="/paintings/venice.png" width="1200" height="500" />
				</div>
			</div>
		</div>
	);
}
