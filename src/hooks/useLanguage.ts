import {useEffect, useState} from "react"

export const useLanguage = (initial: string) => {

	const [language, setLanguage] = useState(() => {

		if (typeof window !== 'undefined') {
			const saved = window.localStorage.getItem('lang')
			if (saved) {
				return saved
			}
			return 'es'
		}

		return initial
	})

	useEffect(() => {
		window.localStorage.setItem('lang', language)
	}, [language])

	return {setLanguage, language}

}
