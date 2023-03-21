import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='it'>
			<Head>
				<meta charSet='UTF-8' />
				<meta name='language' content='italian' />
				<meta name='description' content='Terrari' />
				<meta name='keywords' content='Terrandro,Terrario,Terrari' />
				<meta name='robots' content='index,follow' />
				<meta name='distribution' content='web' />
				<meta name='rating' content='safe for kids' />
				<meta name='copyright' content='Copyright 2023' />
				<meta name='city' content='Rome' />
				<meta name='country' content='Italy' />
				<meta name='format-detection' content='telephone=yes' />
				<meta name='HandheldFriendly' content='true' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta httpEquiv='Content-Type' content='text/html' />
				<meta httpEquiv='Content-Style-Type' content='text/css' />
				<meta httpEquiv='Content-Script-Type' content='text/javascript' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
