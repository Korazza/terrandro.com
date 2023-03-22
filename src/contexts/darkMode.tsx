import { createContext, useEffect, useState } from 'react'

import { useLocalStorage } from '@/hooks/useLocalStorage'

export enum DarkMode {
	system,
	light,
	dark,
}

interface Context {
	darkMode: DarkMode
	dark: boolean
	toggleDarkMode: () => void
}

export const DarkModeContext = createContext<Context>({
	darkMode: DarkMode.system,
	dark: false,
	toggleDarkMode: () => {},
})

export default function DarkModeProvider(props: any) {
	const [darkMode, setDarkMode] = useLocalStorage<Context['darkMode']>(
		'dark-mode',
		DarkMode.system
	)
	const [dark, setDark] = useState<Context['dark']>(false)

	function toggleDarkMode() {
		setDarkMode((prevDarkMode) =>
			prevDarkMode.valueOf() ===
			DarkMode[DarkMode[Object.keys(DarkMode).length / 2 - 1]].valueOf()
				? DarkMode[DarkMode[0]]
				: DarkMode[DarkMode[prevDarkMode.valueOf() + 1]]
		)
	}

	useEffect(() => {
		if (
			darkMode === DarkMode.dark ||
			(
				darkMode === DarkMode.system &&
				matchMedia('(prefers-color-scheme: dark)')
			).matches
		) {
			setDark(true)
			document.documentElement.classList.add('dark')
		} else {
			setDark(false)
			document.documentElement.classList.remove('dark')
		}
	}, [darkMode])

	return (
		<DarkModeContext.Provider
			value={{
				darkMode,
				toggleDarkMode,
				dark,
			}}
			{...props}
		/>
	)
}
