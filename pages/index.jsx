import Image from 'next/image';

// Components
import Text from '../components/blocks/Text';

export default function Home() {
	return (
		<div className="min-h-screen">
			<div className="intro">
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
			</div>
			<Text
				title="Hello there you stinky"
				body={[
					'hehlekfhsoeifjselk sjef ios ejfoise hfoiseihf osefh seofih asef',
					'lasjdkfowia ejfoiewfj woeaifj owesifj oaseifj weoifj weoifj weofjwefoi wejfowe fj',
					'fjowief mwoefij weoifj qweiopfj weiofj woepifj weofi j',
				]}
			/>
		</div>
	);
}
