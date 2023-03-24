import { useEffect, useRef, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import { CarouselItems } from './types'

interface Props {
	items: CarouselItems
	autoPlay?: boolean
	duration?: number
}

export default function Carousel({
	items,
	autoPlay = true,
	duration = 3.5,
}: Props) {
	const [activeIndex, setActiveIndex] = useState(0)
	const intervalId = useRef<NodeJS.Timer>()

	function slideTo(position: number) {
		clearInterval(intervalId.current)
		setActiveIndex(position)
		scroll()
	}

	function prev() {
		clearInterval(intervalId.current)
		setActiveIndex(
			(prevActive) => (prevActive - 1 + items.length) % items.length
		)
		scroll()
	}

	function next() {
		clearInterval(intervalId.current)
		setActiveIndex((prevActive) => (prevActive + 1) % items.length)
		scroll()
	}

	function scroll() {
		const id = setInterval(next, duration * 1000)
		intervalId.current = id
	}

	useEffect(() => {
		if (!autoPlay) return
		scroll()
		return () => clearInterval(intervalId.current)
	}, [])

	return (
		<div className='relative w-full'>
			<div className='relative w-full h-[25rem] lg:h-[30rem] overflow-hidden md:rounded-lg lg:rounded-xl xl:rounded-2xl md:shadow-md shadow-slate-900 dark:shadow-slate-600/75'>
				{items.map(({ src, alt }, index) => (
					<div
						key={index}
						className='absolute w-full inset-0 transition-transform duration-700 ease-in-out'
						style={{
							left: `${index * 100}%`,
							transform: `translateX(-${activeIndex * 100}%)`,
						}}
					>
						<img
							src={src}
							alt={alt}
							className='absolute block w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
						/>
					</div>
				))}
			</div>
			<button
				type='button'
				className='absolute top-0 left-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer !outline-none'
				onClick={prev}
			>
				<span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-200/30 dark:bg-slate-800/30 md:backdrop-blur-sm'>
					<FaAngleLeft className='w-6 h-6 text-slate-200 dark:text-slate-800' />
					<span className='sr-only'>Previous</span>
				</span>
			</button>
			<button
				type='button'
				className='absolute top-0 right-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-0'
				onClick={next}
			>
				<span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-200/30 dark:bg-slate-800/30 md:backdrop-blur-sm'>
					<FaAngleRight className='w-6 h-6 text-slate-200 dark:text-slate-800' />
					<span className='sr-only'>Next</span>
				</span>
			</button>
			<div className='absolute z-10 flex space-x-3 place-items-center -translate-x-1/2 bottom-5 left-1/2'>
				{items.map((_, index) => (
					<button
						key={index}
						type='button'
						className={
							'w-3 h-3 rounded-full' +
							(activeIndex === index
								? ' scale-125 bg-slate-200 dark:bg-slate-400'
								: ' bg-slate-400 dark:bg-slate-600')
						}
						onClick={() => slideTo(index)}
					>
						<span className='sr-only'>Slide to {index}</span>
					</button>
				))}
			</div>
		</div>
	)
}
