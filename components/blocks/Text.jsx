import React from 'react';

export default function Text({ title, body, leftAligned = true, h1 = false }) {
	return (
		<section className="lg:w-9/12 border-t border-b border-tertiary my-10 md:my-14 py-8 md:py-12">
			{h1 ? (
				<h1 className="mb-10">{title}</h1>
			) : (
				<h2 className="mb-5 md:mb-10 leading-tight md:leading-[1.2] lg:leading-[1.2] text-3xl md:text-4xl lg:text-6xl">
					{title}
				</h2>
			)}
			<div className="body md:text-justify">
				{body.map((text) => (
					<p className="my-4">{text}</p>
				))}
			</div>
		</section>
	);
}
