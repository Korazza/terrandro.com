interface Props {
	children: React.ReactNode
	text: string
}

export default function Tooltip({ children, text }: Props) {
	return (
		<div className='group relative inline-block'>
			{children}
			<span className='invisible group-hover:md:visible absolute top-full mt-2 left-1/2 -translate-x-1/2 z-[1000] px-3 py-2 text-sm font-medium whitespace-nowrap text-slate-300 bg-slate-600/75 dark:bg-slate-700/75 backdrop-blur-sm rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
				{text}
			</span>
		</div>
	)
}
