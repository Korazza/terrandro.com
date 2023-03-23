import Head from 'next/head'

import Carousel, { CarouselItems } from '@/components/Carousel'

const carouselImages: CarouselItems = [
	{ src: '/images/terrario-1.jpg', alt: 'Terrario-1' },
	{ src: '/images/terrario-2.jpg', alt: 'Terrario-2' },
	{ src: '/images/terrario-3.jpg', alt: 'Terrario-3' },
	{ src: '/images/terrario-4.jpg', alt: 'Terrario-4' },
]

export default function Home() {
	return (
		<>
			<Head>
				<title>Terrandro - Home</title>
				<meta key='og:title' property='og:title' content='Terrandro - Home' />
			</Head>
			<h1 className='px-4 md:px-10 lg:px-20 xl:px-40 mt-2 md:mt-0 py-2 md:py-6 text-2xl'>
				Intaandro
			</h1>
			<section className='w-full px-0 md:px-10 lg:px-20 xl:px-40 py-2 md:py-6'>
				<div className='w-full lg:w-4/5 xl:w-2/3 2xl:w-1/2'>
					<Carousel items={carouselImages} />
				</div>
			</section>
			<section className='text-lg px-4 md:px-10 lg:px-20 xl:px-40 py-2 md:py-6 w-full lg:w-2/3 2xl:w-3/5'>
				Ciao a tutti, questa pagina è stata realizzata per promuovere questa
				piccola attività che ho aperto. Nata da una passione sbocciata
				nell'ultimo anno, questa attività propone di realizzare terrari
				scegliendo con cura piante e vasi di vario genere, per portare un po' di
				verde nelle nostre case.
			</section>
		</>
	)
}
