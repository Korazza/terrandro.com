import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaGripLines, FaSort } from 'react-icons/fa'

interface NavigationItem {
	label: string
	link: string
	scroll?: boolean
}

const navItems: NavigationItem[] = [
	{ label: 'Intandro', link: '#' },
	{ label: 'Terrari', link: '#' },
	{ label: 'Bobcat', link: '#' },
]

export default function Sidebar() {
	const [toggle, setToggle] = useState(false)

	return (
		<>
			<button
				type='button'
				className='inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
				onClick={() => setToggle((prevToggle) => !prevToggle)}
			>
				<span className='sr-only'>Open sidebar</span>
				<FaSort className='w-6 h-6' />
			</button>
			<aside
				className={
					'fixed top-20 left-0 z-40 w-40 h-full transition-transform md:transform-none -translate-x-full bg-slate-200 dark:bg-slate-800 md:border-r-2 border-solid border-slate-500/25 dark:border-slate-50/25' +
					(toggle ? ' transform-none' : '')
				}
			>
				<div className='h-full px-4 pt-4'>
					<ul className='space-y-2'>
						{navItems.map(({ label, link, scroll }) => (
							<li key={label.toLocaleLowerCase()}>
								<Link
									href={link}
									scroll={scroll}
									className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
								>
									<span className='flex-1 whitespace-nowrap'>{label}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</aside>
		</>
	)
}
