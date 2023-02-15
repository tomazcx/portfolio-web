import {motion as m} from 'framer-motion'
import {textsEnglish} from '../assets/texts/textsEnglish'
import {textsPortuguese} from '../assets/texts/textsPortuguese'
import {TitlePage} from '../components/TitlePage'
import {useLanguage} from '../hooks/useLanguage'
import picture from '../assets/images/pics/picture.jpg'
import {GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo} from 'phosphor-react'
import {SocialMedia} from '../components/SocialMedia'
import {Input} from '../components/Input'
import {useForm} from 'react-hook-form'
import {Textarea} from '../components/Textarea'

export const Contact = () => {

	const {language} = useLanguage('es')
	const {register, handleSubmit} = useForm()

	return (
		<m.main
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			transition={{duration: 0.8}}
			exit={{opacity: 0}}
			className="lg:px-48 px-4 flex flex-col gap-36 justify-between">
			<section className='flex flex-col gap-32'>
				<TitlePage
					title="About me"
					description={language === 'es' ? textsEnglish.pages.others.description : textsPortuguese.pages.others.description}
				/>
				<div className="grid grid-cols-12 gap-12 items-center">
					<img src={picture} alt="" className="col-span-6 w-[60%] h-auto rounded-full" />
					<p className='col-span-6 text-lg leading-8'>My name is Tomaz Xavier and I’m a 18 year old that studies everyday in order to become a professional web developer.  Formed as a computer technician at IFC Campus Videira, I’ve been learning about the most modern technologies in the market with the objective of getting my first job as a programmer.</p>
				</div>

			</section>
			<section className='flex flex-col gap-32'>

				<TitlePage
					title="Contact"
					description={language === 'es' ? textsEnglish.pages.others.description : textsPortuguese.pages.others.description}
				/>
				<div className="flex gap-20 items-center justify-center">
					<SocialMedia logo={<InstagramLogo size={48} />} text="Instagram" href="https://instagram.com/tomazcx" target={'_blank'} />
					<SocialMedia logo={<TwitterLogo size={48} />} text="Twitter" href="https://twitter.com/tomazcx" target={'_blank'} />
					<SocialMedia logo={<LinkedinLogo size={48} />} text="Linkedin" href="https://linkedin.com/in/tomazcx/" target={'_blank'} />
					<SocialMedia logo={<GithubLogo size={48} />} text="Github" href="https://github.com/tomazcx" target={'_blank'} />
				</div>

				<strong className='text-center mx-auto text-3xl'>Send me an email</strong>

				<form className='flex flex-col gap-6 items-end'>
					<Input name="name" id="name" label="Name" type={"text"} register={register} />
					<Input name="email" id="email" label="Email" type={"email"} register={register} />
					<Input name="subject" id="subject" label="Subject" type={"text"} register={register} />
					<Textarea name="content" id="content" label="Content" register={register} rows={10} cols={30} />
					<button className='bg-blue-400 transition-colors hover:bg-blue-500 active:bg-blue-600 rounded-xl px-12 py-2 font-bold w-[15rem]'>Send</button>
				</form>
			</section>


		</m.main >
	)
}
