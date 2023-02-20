import * as Alert from '@radix-ui/react-alert-dialog'
import {textsEnglish} from '../../assets/texts/textsEnglish'
import {textsPortuguese} from '../../assets/texts/textsPortuguese'
import {useEmail} from '../../hooks/useEmail'
import {useLanguage} from '../../hooks/useLanguage'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

interface IEmailAlert {
	data: {
		name: string
		from: string
		subject: string
		content: string
	}
	setError(value: string): void
}

export const EmailAlert = ({data, setError}: IEmailAlert) => {

	const {language} = useLanguage('es')
	const {send} = useEmail()

	const handleSendEmail = async () => {
		console.log(data)
		try {
			await send(data)
		} catch (err: any) {
			if (err.response.data.statusCode === 400) {
				return setError('Error: Fields missing')
			}

			if (err.response.data.statusCode === 429) {
				return setError("You need to wait before sending another email.")
			}

		}
		toast('Email send!')
		setError('')

	}

	return (
		<Alert.Root>
			<ToastContainer theme='dark' autoClose={2000} />
			<Alert.Trigger className='bg-blue-400 transition-colors hover:bg-blue-500 action:bg-blue-600 py-2 px-12 font-bold  w-full lg:w-[15rem] rounded-xl '>{language === 'es' ? textsEnglish.pages.contact.form.send : textsPortuguese.pages.contact.form.send}
			</Alert.Trigger>
			<Alert.Portal>
				<Alert.Overlay className='w-screen h-screen fixed inset-0 bg-black/60' />
				<Alert.Content className='flex flex-col gap-12 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-8 lg:p-8 bg-background rounded-lg w-11/12 max-w-[800px]'>
					<Alert.Title className='text-xl lg:text-3xl font-bold'>{language === 'es' ? textsEnglish.components.emailAlert.title : textsPortuguese.components.emailAlert.title}</Alert.Title>
					<Alert.Description className='text-sm lg:text-lg leading-8'>{language === 'es' ? textsEnglish.components.emailAlert.description : textsPortuguese.components.emailAlert.description}</Alert.Description>
					<div className="hidden lg:flex lg:flex-row justify-end gap-4">
						<Alert.Cancel className='border-2 border-blue-400  transition-colors px-12 py-2 rounded-lg hover:bg-blue-500 active:bg-blue-600 w-full lg:w-[15rem]'>{language === 'es' ? textsEnglish.components.emailAlert.cancel : textsPortuguese.components.emailAlert.cancel}</Alert.Cancel>
						<Alert.Action onClick={() => handleSendEmail()} className='bg-blue-400 transition-colors hover:bg-blue-500 active:bg-blue-600 rounded-lg px-12 py-2 w-full lg:w-[15rem]'  >{language === 'es' ? textsEnglish.components.emailAlert.action : textsPortuguese.components.emailAlert.action}</Alert.Action>

					</div>
					<div className="flex flex-col lg:hidden gap-4">
						<Alert.Action onClick={() => handleSendEmail()} className='bg-blue-400 text-sm transition-colors hover:bg-blue-500 active:bg-blue-600 rounded-lg px-12 py-2 w-full lg:w-[15rem]'  >{language === 'es' ? textsEnglish.components.emailAlert.action : textsPortuguese.components.emailAlert.action}</Alert.Action>
						<Alert.Cancel className='border-2 border-blue-400 text-sm  transition-colors px-12 py-2 rounded-lg hover:bg-blue-500 active:bg-blue-600 w-full lg:w-[15rem]'>{language === 'es' ? textsEnglish.components.emailAlert.cancel : textsPortuguese.components.emailAlert.cancel}</Alert.Cancel>

					</div>

				</Alert.Content>
			</Alert.Portal>
		</Alert.Root>
	)
}
