import Image from 'next/image';

export default function contact() {
	return (
		<div className="min-h-screen mt-10 md:my-16">
			<h1 className="mb-8 md:mb-12 leading-tight md:leading-[1.2] lg:leading-[1.2] text-5xl md:text-7xl lg:text-7xl">
				Contact me
			</h1>
			<div className="border-t border-b border-tertiary py-16 md:flex justify-between">
				<div className="left w-6/12 flex flex-col justify-around">
					<p className="text-xl md:text-2xl lg:text-3xl">
						For all enquiries regarding commissions and sales of original
						artwork and limited edition prints:
					</p>
					<div></div>
					<div></div>
				</div>
				<div className="right w-5/12">
					<Image src="/paintings/venice.png" width="800" height="500" />
				</div>
			</div>
		</div>
	);
}
