import {List} from "phosphor-react"
import {useLanguage} from "../../hooks/useLanguage"
import {LinkHeader} from "../LinkHeader"

export const Header = () => {

	const {setLanguageLocalStorage, getLanguage} = useLanguage()
	const language = getLanguage()

	const pages = [
		{
			text: 'Home',
			href: '/'
		},
		{
			text: 'Front-end',
			href: '/front-end'
		},
		{
			text: 'Back-end',
			href: '/back-end'
		},
		{
			text: language === 'es' ? 'Others' : 'Outros',
			href: '/others'
		},
		{
			text: language === 'es' ? 'Contact' : 'Contato',
			href: '/contact'
		},
	]

	console.log(language)

	return (
		<header className="flex justify-end lg:justify-between items-center px-12 lg:px-48 py-12">
			<div className="lg:flex lg:gap-8 lg:font-bold hidden">
				<label htmlFor="lang">{language === 'es' ? 'Select a language' : 'Selecione uma linguagem'}</label>
				<select id="lang" defaultValue={language} name="lang" onChange={(e) => setLanguageLocalStorage(e.target.value)} className="bg-transparent cursor-pointer">
					<option value="es">es</option>
					<option value="pt-br">pt-br</option>
				</select>
			</div>

			<nav className="lg:flex lg:gap-8 hidden">
				{pages.map(page => <LinkHeader key={page.text} text={page.text} href={page.href} />
				)}
			</nav>
			<List size={36} className="hover:text-blue-500 transition-colors active:text-blue-600 cursor-pointer block lg:hidden" />
		</header>
	)
}
