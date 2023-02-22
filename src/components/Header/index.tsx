import {CaretDown, List, X} from "phosphor-react"
import {useLanguage} from "../../hooks/useLanguage"
import {LinkHeader} from "../LinkHeader"
import * as Dialog from '@radix-ui/react-dialog'

export const Header = () => {

	const {setLanguage, language} = useLanguage('es')

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

	const handleChangeLanguage = (value: string) => {
		setLanguage(value)
		window.location.reload()
	}

	return (
		<header className="flex justify-end lg:justify-between items-center px-4 lg:px-28 py-12">
			<div className="lg:flex lg:gap-8 lg:justify-between lg:font-bold hidden" >
				<label htmlFor="lang">{language === 'es' ? 'Select a language' : 'Selecione uma linguagem'}</label>
				<div className="flex items-center cursor-pointer">
					<select id="lang" defaultValue={language} name="lang" onChange={(e) => handleChangeLanguage(e.target.value)} className="bg-transparent cursor-pointer border-none">
						<option className="bg-transparent" value="es">es</option>
						<option className="bg-transparent" value="pt-br">pt-br</option>
					</select>
					<CaretDown size={18} />


				</div>
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
					<Dialog.Content className="bg-background/95 p-6 items-center pt-12 flex flex-col gap-16 top-0 right-0 fixed w-3/5 h-screen max-w-[1200px] animate-sidebar">
						<div className="flex flex-col gap-8">
							<Dialog.Close className="flex justify-end w-full"><X size={28} className="hover:text-blue-500 transition-colors action:text-blue-600" /></Dialog.Close>
							<div className="flex gap-4 text-sm">
								<label htmlFor="lang">{language === 'es' ? 'Select a language' : 'Selecione uma linguagem'}</label>
								<select id="lang" defaultValue={language} name="lang" onChange={(e) => handleChangeLanguage(e.target.value)} className="bg-transparent cursor-pointer">
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
