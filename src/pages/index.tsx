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
			<h1 className='px-10 md:px-20 lg:px-40 py-6 text-2xl'>Intaandro</h1>
			<section className='w-full px-0 md:px-5 xl:px-40 mb-10 md:mb-6 lg:mb-10'>
				<div className='w-full mx-auto lg:w-4/5 xl:w-2/3 2xl:w-1/2'>
					<Carousel items={carouselImages} />
				</div>
			</section>
			<section className='px-10 md:px-20 lg:px-40 pb-10'>
				<div className='mt-20 max-w-sm animate-pulse'>
					<div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4' />
					<div className='h-2 bg-slate-300 rounded-full dark:bg-slate-700 max-w-[360px] mb-2.5' />
					<div className='h-2 bg-slate-300 rounded-full dark:bg-slate-700 mb-2.5' />
					<div className='h-2 bg-slate-300 rounded-full dark:bg-slate-700 max-w-[330px] mb-2.5' />
					<div className='h-2 bg-slate-300 rounded-full dark:bg-slate-700 max-w-[300px] mb-2.5' />
					<div className='h-2 bg-slate-300 rounded-full dark:bg-slate-700 max-w-[360px]' />
					<span className='sr-only'>Loading...</span>
				</div>
				<div className='mt-6 max-w-lg animate-pulse'>
					<div className='h-2 bg-slate-300 rounded-full dark:bg-slate-700 max-w-[500px] mb-2.5' />
					<div className='h-2 bg-slate-300 rounded-full dark:bg-slate-700 mb-2.5' />
					<div className='h-2 bg-slate-300 rounded-full dark:bg-slate-700 max-w-[430px] mb-2.5' />
					<div className='h-2 bg-slate-300 rounded-full dark:bg-slate-700 max-w-[470px] mb-2.5' />
					<div className='h-2 bg-slate-300 rounded-full dark:bg-slate-700 max-w-[490px]' />
					<span className='sr-only'>Loading...</span>
				</div>
			</section>
		</>
	)
}
