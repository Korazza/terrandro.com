import Head from 'next/head'

import DarkModeProvider from '@/contexts/darkMode'
import PageLayout from '@/layouts/PageLayout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
	return (
		<DarkModeProvider>
			<Head>
				<title>Terrandro</title>
				<link
					rel='shortcut icon'
					type='image/x-icon'
					href='/images/favicon.ico'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<PageLayout>
				<Component {...pageProps} />
			</PageLayout>
		</DarkModeProvider>
	)
}
