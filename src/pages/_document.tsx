import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='it'>
			<Head>
				<meta name='description' content='Terrari' />
				<meta name='keywords' content='terrandro, terrario, terrari' />
				<meta name='robots' content='index, follow' />
				<meta charSet='UTF-8' />
				<meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
