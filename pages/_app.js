import '../styles/globals.css';

import Head from 'next/head';

// Components
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>
					Bert Wright Artist | Watercolour paintings & Oil paintings
				</title>
				<meta
					name="description"
					content="Original Watercolour Paintings, Oil Paintings, Limited Edition Prints & Commissions by Artist Bert Wright."
				/>
				<meta property="og:image" content="https://www.jltherapy.uk/Help.png" />
				<meta property="og:url" content="https://www.bertwright.net" />
				<meta
					property="og:title"
					content="Bert Wright Artist | Watercolour paintings & Oil paintings"
				/>
				<meta
					property="og:description"
					content="Original Watercolour Paintings, Oil Paintings, Limited Edition Prints & Commissions by Artist Bert Wright."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Bert Wright" />
				<meta property="og:locale" content="en_GB" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest"></link>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
