import { createContext, useEffect } from 'react'

import { useLocalStorage } from '@/hooks/useLocalStorage'

interface Context {
	darkMode: boolean
	toggleDarkMode: () => void
}

export const DarkModeContext = createContext<Context>({
	darkMode: false,
	toggleDarkMode: () => {},
})

export default function DarkModeProvider(props: any) {
	const [darkMode, setDarkMode] = useLocalStorage<Context['darkMode']>(
		'dark-mode',
		false
	)

	function toggleDarkMode() {
		setDarkMode((prevDarkMode) => !prevDarkMode)
	}

	useEffect(() => {
		if (darkMode) document.body.classList.add('dark')
		else document.body.classList.remove('dark')
	}, [darkMode])

	return (
		<DarkModeContext.Provider
			value={{
				darkMode,
				toggleDarkMode,
			}}
			{...props}
		/>
	)
}
