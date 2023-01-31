export default function Footer() {
	return (
		<div className="text-black border-t border-b border-tertiary mt-20 mb-14">
			<div className="max-w-screen-2xl m-auto md:flex justify-between py-5 text-center md:text-start space-y-2 md:space-y-0">
				<p className="text-base">Copyright 2023 Bert Wright</p>
				<p className="text-base">
					Website by{' '}
					<a
						className="underline"
						target="_blank"
						href="https://mattsmith.studio/"
					>
						mattsmith.studio
					</a>
				</p>
			</div>
		</div>
	);
}
