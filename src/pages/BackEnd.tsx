import {textsEnglish} from "../assets/texts/textsEnglish"
import {textsPortuguese} from "../assets/texts/textsPortuguese"
import {useLanguage} from "../hooks/useLanguage"
import {motion as m} from "framer-motion"
import {useEffect, useRef, useState} from "react"
import 'swiper/css'
import 'swiper/css/navigation'
import Marquee from 'react-fast-marquee'
import {tecs} from "../assets/images/logos/back-end"
import {Project} from "../components/Project"
import {TitlePage} from "../components/TitlePage"

export const BackEnd = () => {

	const [selected, setSelected] = useState<number | null>(null)
	const [hoverTec, setHoverTec] = useState('') //default when no technology is selected	
	const {language} = useLanguage('es')

	return (
		<m.main
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			transition={{duration: 0.8}}
			exit={{opacity: 0}}
			className="lg:px-48 px-4 flex flex-col gap-36 justify-between">
			<TitlePage
				title="Back-end"
				description={language === 'es' ? textsEnglish.pages.backEnd.description : textsPortuguese.pages.backEnd.description}
				textContinue={language === 'es' ? textsEnglish.pages.backEnd.continueButton : textsPortuguese.pages.backEnd.continueButton}
				pathContinue="/others"
			/>
			<Marquee
				gradient={false}
				speed={150}
				className="gap-32"
				pauseOnClick
			>
				{tecs.map((tec, index) => {
					return (
						<div className="w-[10rem] cursor-pointer" onMouseEnter={() => setHoverTec(tec.name)} onClick={() => setSelected(index)}>
							<img src={tec.img} alt="React image" className="w-full h-full pointer-events-none object-cover" />
						</div>

					)
				})}

			</Marquee>

			{selected === null ?
				<strong className="flex justify-center text-2xl lg:gap-4 text-center lg:text-4xl">{language === 'es' ? textsEnglish.pages.backEnd.selectButton : textsPortuguese.pages.backEnd.selectButton} <span className="text-blue-400 hidden lg:inline">{hoverTec}</span></strong>
				:
				<article className="flex flex-col items-center gap-24">
					<span className="text-4xl font-bold">{tecs[selected].name}</span>
					<p className="lg:grid lg:grid-cols-12 flex flex-col gap-12 items-center lg:w-10/12">
						<img src={tecs[selected].img} className="col-span-6 w-[200px] h-auto lg:w-[55%]" alt={`${tecs[selected].name} logo`} />
						<p className="col-span-6 leading-8">{language === 'es' ? tecs[selected].descriptionEnglish : tecs[selected].descriptionPortuguese}</p>
					</p>
					<p className="w-full text-center lg:text-left font-bold text-2xl">{language === 'es' ? textsEnglish.pages.backEnd.titleProjects : textsPortuguese.pages.backEnd.titleProjects} <span className="text-blue-400">{tecs[selected].name}</span>: </p>
					<div className="flex flex-col gap-12 w-full">
						<Project />
					</div>
					<span className="font-bold">{language === 'es' ? textsEnglish.pages.backEnd.seeMore : textsPortuguese.pages.backEnd.seeMore} <a href="https://github.com/tomazcx" target={'_blank'} className="text-blue-400 transition-colors hover:text-blue-500 active:text-blue-600">https://github.com/tomazcx</a></span>
				</article>
			}
		</m.main >
	)
}
