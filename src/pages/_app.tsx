import { AppProps } from 'next/app'
import Head from 'next/head'

import DarkModeProvider from '@/contexts/darkMode'
import PageLayout from '@/layouts/PageLayout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<DarkModeProvider>
			<Head>
				<title>Terrandro</title>
				<meta
					key='description'
					name='description'
					content='Terrari e molto altro'
				/>
				<meta
					key='keywords'
					name='keywords'
					content='Terrandro,Terrario,Terrari,Terrarium'
				/>
				<link
					rel='shortcut icon'
					type='image/x-icon'
					href='/images/favicon.ico'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				{/* Open Graph */}
				<meta key='og:title' property='og:title' content='Terrandro' />
				<meta key='og:type' property='og:type' content='article' />
				<meta
					key='og:description'
					property='og:description'
					content='Terrari'
				/>
				<meta
					key='og:image'
					property='og:image'
					content='https://terrandro.com/images/logo.png'
				/>
				<meta key='og:url' property='og:url' content='https://terrandro.com/' />
				<meta key='og:site_name' property='og:site_name' content='Terrandro' />
				{/* Twitter */}
				<meta
					key='twitter:card'
					name='twitter:card'
					content='summary_large_image'
				/>
				<meta
					key='twitter:image:alt'
					name='twitter:image:alt'
					content='Terrandro Logo'
				/>
			</Head>
			<PageLayout>
				<Component {...pageProps} />
			</PageLayout>
		</DarkModeProvider>
	)
}
