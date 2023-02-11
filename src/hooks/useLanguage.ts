import {useState} from "react"

export const useLanguage = () => {

	const [language, setLanguage] = useState(localStorage.getItem('lang') ?? 'es')


	const setLanguageLocalStorage = (lang: string) => {
		localStorage.setItem('lang', lang)
		setLanguage(lang)
	}

	const getLanguage = () => {
		return localStorage.getItem('lang') ?? 'es'
	}


	return {setLanguageLocalStorage, getLanguage}

}
