import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

interface InstagramMedia {
	id: string
	caption: string
	media_url: string
	media_type: string
	timestamp: string
	permalink: string
}

interface Props {
	media: InstagramMedia[]
}

export default function Contatti({ media }: Props) {
	return (
		<>
			<Head>
				<title>Terrandro - Galleria</title>
				<meta
					key='og:title'
					property='og:title'
					content='Terrandro - Galleria'
				/>
				<meta
					key='og:url'
					property='og:url'
					content='https://terrandro.com/galleria'
				/>
			</Head>
			<h1 className='px-4 md:px-10 lg:px-20 xl:px-40 py-2 md:py-6 text-2xl'>
				Galleria
			</h1>
			<section className='w-full px-0 md:px-10 lg:px-20 xl:px-40 mb-10 md:mb-6 lg:mb-10 grid grid-flow-row grid-cols-1 gap-0 md:gap-6 md:grid-cols-2 xl:grid-cols-3'>
				{media.length > 0
					? media.map(
							({
								id,
								caption,
								media_url,
								media_type,
								timestamp,
								permalink,
							}) => (
								<Link
									href={permalink}
									key={id}
									target='_blank'
									className='relative md:shadow-md md:drop-shadow-2xl transition ease-in-out duration-300 lg:hover:scale-105'
								>
									{media_type.toLowerCase() === 'video' ? (
										<video
											muted
											autoPlay
											loop
											src={media_url}
											className='w-full object-cover aspect-square md:rounded-lg mt-6 mb-2 md:my-0'
										/>
									) : (
										<img
											src={media_url}
											className='w-full object-cover aspect-square md:rounded-lg mb-2 md:mb-0'
										/>
									)}
									<span className='relative md:absolute w-full md:px-3 md:py-2 bottom-0 left-3 md:left-0 md:rounded-b-lg md:bg-slate-800/70 md:text-slate-200'>
										<span>{caption}</span>
										<span className='block text-sm md:px-0'>
											{new Date(timestamp)
												.toLocaleString()
												.replace(', ', ' - ')
												.slice(0, -3)}
										</span>
									</span>
								</Link>
							)
					  )
					: null}
			</section>
		</>
	)
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const res = await fetch(
		`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
	)
	const media: InstagramMedia[] = (await res.json()).data

	return {
		props: {
			media,
		},
		revalidate: 3600,
	}
}
