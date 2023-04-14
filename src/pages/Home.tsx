import Typewriter from "typewriter-effect"
import Wavify from 'react-wavify'
import {useEffect, useState} from "react";
import {textsEnglish} from "../assets/texts/textsEnglish";
import {textsPortuguese} from "../assets/texts/textsPortuguese";
import {useLanguage} from "../hooks/useLanguage";
import {motion as m} from "framer-motion";

export const Home = () => {

	const [mouseYPos, setMousePos] = useState(0);
	const {language} = useLanguage('es')

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMousePos(event.clientY);
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener(
				'mousemove',
				handleMouseMove
			);
		};
	}, []);

	return (
		<m.main
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			transition={{duration: 0.8}}
			exit={{opacity: 0}}
			className="flex flex-col flex-1 justify-between">
			<section className="lg:px-28 lg:py-12 px-12 mb-12  ">
				<article className="flex justify-between flex-col lg:text-left text-center gap-14  md:gap-36 ">
					<div className="flex flex-col gap-12">
						<h2 className="text-4xl lg:text-5xl font-bold">{language === 'es' ? textsEnglish.pages.home.title : textsPortuguese.pages.home.title}</h2>
						<h1 className="text-blue-400 text-4xl lg:text-6xl font-bold">
							<Typewriter
								onInit={(typewriter) => {
									typewriter.typeString(language === 'es' ? textsEnglish.pages.home.subtitles[0] : textsPortuguese.pages.home.subtitles[0])
										.pauseFor(1500)
										.start()
										.deleteAll()
									typewriter.typeString(language === 'es' ? textsEnglish.pages.home.subtitles[1] : textsPortuguese.pages.home.subtitles[1])
										.pauseFor(1500)
										.start()
										.deleteAll()
									typewriter.typeString(language === 'es' ? textsEnglish.pages.home.subtitles[2] : textsPortuguese.pages.home.subtitles[2])
										.pauseFor(1500)
										.start()
										.deleteAll()
									typewriter.typeString(language === 'es' ? textsEnglish.pages.home.subtitles[3] : textsPortuguese.pages.home.subtitles[3])
										.pauseFor(1500)
										.start()
								}}
							/>
						</h1>
					</div>
					<div className="lg:grid grid-cols-12 items-center w-full flex flex-col gap-24 lg:gap-8">
						<p className="md:text-2xl col-span-6 leading-8">
							{language === 'es' ? textsEnglish.pages.home.description : textsPortuguese.pages.home.description}
						</p>

						<a href="/front-end" className="w-full lg:mb-0 col-span-6 text-center lg:text-right text-3xl lg:text-5xl font-bold transition-colors hover:text-blue-500 action:text-blue-600">{language === 'es' ? textsEnglish.pages.home.button : textsPortuguese.pages.home.button}</a>
					</div>
				</article>


			</section>

			<Wavify className="w-screen relative bottom-0 " fill="#315EFF" amplitude={mouseYPos / 45 + 20} speed={0.5} />
		</m.main >
	)
}
