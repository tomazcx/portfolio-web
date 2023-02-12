import {List, X} from "phosphor-react"
import {useLanguage} from "../../hooks/useLanguage"
import {LinkHeader} from "../LinkHeader"
import * as Dialog from '@radix-ui/react-dialog'
import {SelectLanguage} from "../SelectLanguage"

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

	return (
		<header className="flex justify-end lg:justify-between items-center px-12 lg:px-48 py-12">
			<div className="lg:flex lg:gap-8 lg:font-bold hidden" >
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

			<Dialog.Root >
				<Dialog.Trigger className="lg:hidden">
					<List size={36} className="hover:text-blue-500 transition-colors active:text-blue-600 cursor-pointer" />
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay className="bg-black/20 fixed inset-0 h-full w-full" />
					<Dialog.Content className="bg-background/95 p-6 items-center pt-12 flex flex-col gap-16 top-0 right-0 fixed w-3/5 h-screen max-w-[1200px]">
						<div className="flex flex-col gap-8">
							<Dialog.Close className="flex justify-end w-full"><X size={28} /></Dialog.Close>
							<div className="flex gap-4 text-sm">
								<label htmlFor="lang">{language === 'es' ? 'Select a language' : 'Selecione uma linguagem'}</label>
								<select id="lang" defaultValue={language} name="lang" onChange={(e) => setLanguageLocalStorage(e.target.value)} className="bg-transparent cursor-pointer">
									<option value="es">es</option>
									<option value="pt-br">pt-br</option>
								</select>
							</div>

						</div>
						<div className="flex flex-col gap-4 items-center">
							{pages.map(page => <LinkHeader key={page.text} text={page.text} href={page.href} />
							)}
						</div>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</header>
	)
}
