import Link from 'next/link'
import { FaInstagram, FaTiktok } from 'react-icons/fa'

interface Social {
	name: string
	href: string
	icon: JSX.Element
}

const socials: Social[] = [
	{
		name: 'Instagram',
		href: 'https://www.instagram.com/terrandro_/',
		icon: <FaInstagram className='w-5 h-5 inline' />,
	},
	{
		name: 'TikTok',
		href: 'https://www.tiktok.com/@terrandro',
		icon: <FaTiktok className='w-5 h-5 inline' />,
	},
]

export default function Footer() {
	return (
		<footer className='z-40 relative bottom-0 pt-2 w-full bg-slate-200 dark:bg-slate-800'>
			<div className='flex flex-col'>
				<div className='flex flex-row place-content-center md:place-content-start'>
					<div className='flex flex-col py-4 md:pl-20 lg:pl-40 space-y-4'>
						<span className='font-semibold text-lg'>Social</span>
						{socials.map(({ name, href, icon }) => (
							<Link key={name.toLowerCase()} href={href} target='_blank'>
								{icon}
								<span className='ml-2'>{name}</span>
							</Link>
						))}
					</div>
				</div>
				<span className='w-full py-2 text-center bg-slate-300 dark:bg-slate-700'>
					© 2023 Terrandro
				</span>
			</div>
		</footer>
	)
}
