import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaDesktop, FaMoon, FaSun } from 'react-icons/fa'

import { useDarkMode } from '@/hooks/useDarkMode'
import { DarkMode } from '@/contexts/darkMode'
import Tooltip from '@/components/Tooltip'

interface NavigationItem {
	label: string
	link: string
	scroll?: boolean
}

const navItems: NavigationItem[] = [
	{ label: 'Home', link: '/' },
	{ label: 'Contatti', link: '/contatti' },
]

export default function Navbar() {
	const [toggle, setToggle] = useState(false)
	const router = useRouter()
	const { darkMode, toggleDarkMode } = useDarkMode()

	return (
		<header className='fixed top-0 w-full h-20 z-50 bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-[10px] shadow-md'>
			<nav className='h-full px-2 sm:px-4 py-1'>
				<div className='h-full container flex flex-wrap items-center justify-between mx-auto'>
					<Link href='/' className='flex items-center'>
						<div className='relative mr-2 object-contain w-16 h-16 md:w-20 p-0'>
							<Image
								src='/images/logo.png'
								fill
								sizes='(max-width: 768px) 33vw, (max-width: 1280px) 75vw'
								className='object-contain'
								alt='Terrandro Logo'
							/>
						</div>
						<span className='self-center text-xl font-semibold whitespace-nowrap dark:text-slate-300'>
							Terrandro
						</span>
					</Link>
					<button
						type='button'
						className='inline-flex items-center p-2 ml-3 text-sm text-slate-500 z-[100] rounded-lg md:hidden hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600'
						onClick={() => setToggle((prevToggle) => !prevToggle)}
					>
						<span className='sr-only'>Open main menu</span>
						<FaBars className='w-6 h-6' />
					</button>
					<div
						className={
							(!toggle ? 'hidden ' : '') +
							'absolute w-2/3 h-[100lvh] pt-10 top-0 right-0 border-l border-slate-300/75 dark:border-slate-600/75 bg-slate-300/90 dark:bg-slate-900/90 md:static md:w-auto md:h-auto md:block md:pt-0 md:bg-transparent md:dark:bg-transparent md:border-none'
						}
					>
						<ul className='flex flex-col p-4 mt-4 md:flex-row md:place-items-center space-y-4 md:space-y-0 md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
							{navItems.map(({ label, link, scroll }) => (
								<li key={label.toLowerCase()}>
									<Link
										href={link}
										scroll={scroll}
										className={
											'block py-1 px-2 text-lg rounded-md' +
											(router.pathname == link
												? ' bg-lime-400 dark:bg-lime-300 dark:text-slate-700'
												: ' text-slate-700 hover:bg-slate-300 hover:text-slate-900 dark:hover:bg-slate-700 dark:text-slate-300 dark:hover:text-slate-50 transition-colors duration-300 ease-in-out')
										}
									>
										{label}
									</Link>
								</li>
							))}
							<li>
								<Tooltip text={`Dark mode: ${DarkMode[darkMode]}`}>
									<button
										type='button'
										className={
											'relative group w-5 h-5 inline-flex items-center p-4 text-sm rounded-lg transition-colors duration-300 ease-in-out' +
											(darkMode === DarkMode.system
												? ' bg-sky-600 dark:bg-sky-300'
												: ' bg-zinc-500 dark:bg-yellow-200')
										}
										onClick={toggleDarkMode}
									>
										<FaDesktop
											className={
												'absolute w-5 h-5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-200 dark:text-slate-600 dark transition-opacity duration-500 ease-out' +
												(darkMode === DarkMode.system
													? ' opacity-1'
													: ' opacity-0')
											}
										/>
										<FaSun
											className={
												'absolute w-5 h-5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-700 transition-opacity duration-500 ease-out' +
												(darkMode === DarkMode.dark
													? ' opacity-1'
													: ' opacity-0')
											}
										/>
										<FaMoon
											className={
												'absolute w-5 h-5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-100 transition-opacity duration-500 ease-out' +
												(darkMode === DarkMode.light
													? ' opacity-1'
													: ' opacity-0')
											}
										/>
										<span className='sr-only'>Toggle dark mode</span>
									</button>
								</Tooltip>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}
