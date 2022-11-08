// Components
import Navbar from './Navbar';
import Footer from './Footer';
import Popup from '../blocks/Popup';

export default function Layout({ children }) {
	return (
		<div className="bg-white">
			<Popup />

			<Navbar />
			<div className="container max-w-screen-2xl m-auto px-6 md:px-8">
				<main>{children}</main>

				<Footer />
			</div>
		</div>
	);
}
