import Head from 'next/head';

export default function CustomHead({ title, description }) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
		</Head>
	);
}
