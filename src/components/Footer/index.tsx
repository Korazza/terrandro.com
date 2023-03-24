import Link from 'next/link'
import { FaEnvelope, FaInstagram, FaTiktok } from 'react-icons/fa'

import { Contact, Social } from './types'

const socials: Social[] = [
	{
		name: 'Instagram',
		link: 'https://www.instagram.com/terrandro_/',
		icon: <FaInstagram className='w-5 h-5 inline' />,
	},
	{
		name: 'TikTok',
		link: 'https://www.tiktok.com/@terrandro',
		icon: <FaTiktok className='w-5 h-5 inline' />,
	},
]

const contacts: Contact[] = [
	{
		name: 'Email',
		link: 'mailto:business.terrandro@gmail.com',
		icon: <FaEnvelope className='w-5 h-5 inline' />,
	},
]

export default function Footer() {
	return (
		<footer className='z-40 relative bottom-0 mt-2 md:mt-6 w-full bg-slate-200 dark:bg-slate-800'>
			<div className='flex flex-col'>
				<div className='flex flex-row place-content-center md:pl-20 lg:pl-40 gap-10 md:gap-20 md:place-content-start'>
					<div className='flex flex-col py-4 space-y-4'>
						<span className='font-semibold text-lg'>Social</span>
						{socials.map(({ name, link, icon }) => (
							<Link key={name.toLowerCase()} href={link} target='_blank'>
								{icon}
								<span className='ml-2'>{name}</span>
							</Link>
						))}
					</div>
					<div className='flex flex-col py-4 space-y-4'>
						<span className='font-semibold text-lg'>Contatti</span>
						{contacts.map(({ name, link, icon }) => (
							<Link key={name.toLowerCase()} href={link} target='_blank'>
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
