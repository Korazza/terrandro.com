import Head from 'next/head'

import { useDarkMode } from '@/hooks/useDarkMode'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

interface Props {
	children?: React.ReactNode
}

export default function PageLayout({ children }: Props) {
	const { dark } = useDarkMode()
	return (
		<>
			<Head>
				{dark ? (
					<meta name='theme-color' content='#1e293b' />
				) : (
					<meta name='theme-color' content='#a3e635' />
				)}
			</Head>
			<Navbar />
			<Sidebar />
			<main className='relative top-20 md:left-40 md:max-w-[calc(100%-10rem)] max-h-[calc(100%-5rem)] w-full'>
				{children}
				<Footer />
			</main>
		</>
	)
}
