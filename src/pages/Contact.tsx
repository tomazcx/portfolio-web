import {motion as m} from 'framer-motion'
import {textsEnglish} from '../assets/texts/textsEnglish'
import {textsPortuguese} from '../assets/texts/textsPortuguese'
import {TitlePage} from '../components/TitlePage'
import {useLanguage} from '../hooks/useLanguage'
import picture from '../assets/images/pics/picture.jpg'
import {GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo} from 'phosphor-react'
import {SocialMedia} from '../components/SocialMedia'
import {Input} from '../components/Input'
import {Textarea} from '../components/Textarea'
import {EmailAlert} from '../components/EmailAlert'
import {ChangeEvent, FormEvent, useState} from 'react'

interface FormValues {
	name: string
	from: string
	subject: string
	content: string
}

export const Contact = () => {

	const {language} = useLanguage('es')
	const [error, setError] = useState('')
	const [formData, setFormData] = useState<FormValues>({
		name: '',
		from: '',
		content: '',
		subject: ''
	})

	const handleInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const {name, value} = event.target
		setFormData(prevState => ({...prevState, [name]: value}))
	}


	return (
		<m.main
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			transition={{duration: 0.8}}
			exit={{opacity: 0}}
			className="lg:px-28 px-4 flex flex-col gap-36 justify-between">
			<section className='flex flex-col gap-32'>
				<TitlePage
					title={language === 'es' ? textsEnglish.pages.contact.title : textsPortuguese.pages.contact.title}
					description={language === 'es' ? textsEnglish.pages.contact.subtitle : textsPortuguese.pages.contact.subtitle}
				/>
				<div className="lg:grid lg:grid-cols-12 flex flex-col gap-12 items-center">
					<img src={picture} alt="" className="col-span-6 w-[60%] h-auto rounded-full" />
					<p className='col-span-6 text-lg leading-8 text-center lg:text-left'>{language === 'es' ? textsEnglish.pages.contact.description : textsPortuguese.pages.contact.description}</p>
				</div>

			</section>
			<section className='flex flex-col gap-32'>

				<TitlePage
					title={language === 'es' ? textsEnglish.pages.contact.titleTwo : textsPortuguese.pages.contact.titleTwo}
					description={language === 'es' ? textsEnglish.pages.contact.subtitleTwo : textsPortuguese.pages.contact.subtitleTwo}
				/>
				<div className="hidden lg:flex gap-4 lg:gap-20 items-center justify-center">
					<SocialMedia logo={<InstagramLogo size={48} />} text="Instagram" href="https://instagram.com/tomazcx" target={'_blank'} />
					<SocialMedia logo={<TwitterLogo size={48} />} text="Twitter" href="https://twitter.com/tomazcx" target={'_blank'} />
					<SocialMedia logo={<LinkedinLogo size={48} />} text="Linkedin" href="https://linkedin.com/in/tomazcx/" target={'_blank'} />
					<SocialMedia logo={<GithubLogo size={48} />} text="Github" href="https://github.com/tomazcx" target={'_blank'} />
				</div>
				<div className="flex gap-6 lg:hidden items-center justify-center">
					<SocialMedia logo={<InstagramLogo size={36} />} text="Instagram" href="https://instagram.com/tomazcx" target={'_blank'} />
					<SocialMedia logo={<TwitterLogo size={36} />} text="Twitter" href="https://twitter.com/tomazcx" target={'_blank'} />
					<SocialMedia logo={<LinkedinLogo size={36} />} text="Linkedin" href="https://linkedin.com/in/tomazcx/" target={'_blank'} />
					<SocialMedia logo={<GithubLogo size={36} />} text="Github" href="https://github.com/tomazcx" target={'_blank'} />
				</div>




				<strong className='text-center mx-auto text-2xl lg:text-3xl'>{language === 'es' ? textsEnglish.pages.contact.form.title : textsPortuguese.pages.contact.form.title}</strong>
				<form onSubmit={(e: FormEvent) => e.preventDefault()} className='flex flex-col gap-8 items-end'>
					<Input name="name" id="name" label={language === 'es' ? textsEnglish.pages.contact.form.name : textsPortuguese.pages.contact.form.name} type={"text"} onChange={(e) => handleInput(e)} />
					<Input name="from" id="from" label={language === 'es' ? textsEnglish.pages.contact.form.email : textsPortuguese.pages.contact.form.email} type={"email"} onChange={(e) => handleInput(e)} />
					<Input name="subject" id="subject" label={language === 'es' ? textsEnglish.pages.contact.form.subject : textsPortuguese.pages.contact.form.subject} type={"text"} onChange={(e) => handleInput(e)} />
					<Textarea name="content" id="content" label={language === 'es' ? textsEnglish.pages.contact.form.content : textsPortuguese.pages.contact.form.content} onChange={(e) => handleInput(e)} rows={10} cols={30} />


					<EmailAlert data={formData} setError={setError} />
					<span className='text-center w-full text-red-500'>{error}</span>
				</form>

			</section>


		</m.main >
	)
}
