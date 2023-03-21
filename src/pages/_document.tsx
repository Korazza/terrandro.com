import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='it'>
			<Head>
				<meta name='description' content='Terrari' />
				{/*<meta name='keywords' content='' />*/}
				<meta name='robots' content='index, follow' />
				<meta charSet='UTF-8' />
				<meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='theme-color'
					content='#bef264'
					media='(prefers-color-scheme: light)'
				/>
				<meta
					name='theme-color'
					content='#a3e635'
					media='(prefers-color-scheme: dark)'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
