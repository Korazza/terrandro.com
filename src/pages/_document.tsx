import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='it'>
			<Head>
				<meta charSet='UTF-8' />
				<meta key='language' name='language' content='italian' />
				<meta key='robots' name='robots' content='index,follow' />
				<meta key='distribution' name='distribution' content='web' />
				<meta key='rating' name='rating' content='safe for kids' />
				<meta key='copyright' name='copyright' content='Copyright 2023' />
				<meta key='city' name='city' content='Rome' />
				<meta key='country' name='country' content='Italy' />
				<meta
					key='format-detection'
					name='format-detection'
					content='telephone=yes'
				/>
				<meta key='HandheldFriendly' name='HandheldFriendly' content='true' />
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
