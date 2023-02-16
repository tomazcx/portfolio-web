import {textsEnglish} from "../../assets/texts/textsEnglish"
import {textsPortuguese} from "../../assets/texts/textsPortuguese"
import {useLanguage} from "../../hooks/useLanguage"

export const Project = () => {

	const {language} = useLanguage('es')

	return (
		<div className="lg:grid lg:grid-cols-12 flex flex-col w-11/12 lg:w-full items-center mx-auto gap-12 ">
			<div className="bg-gray-800 flex justify-center items-center w-full h-[300px] col-span-6">
				<span>Project image</span>
			</div>
			<div className="flex flex-col gap-4 col-span-6 lg:text-lg">
				<span>{language === 'es' ? textsEnglish.components.project.title : textsPortuguese.components.project.title} <span className="text-blue-400">Example title</span></span>
				<span>{language === 'es' ? textsEnglish.components.project.description : textsPortuguese.components.project.description} <span className="text-blue-400">Example desc</span></span>
				<span>URL: <span className="text-blue-400">Example url</span></span>
				<span>{language === 'es' ? textsEnglish.components.project.tags : textsPortuguese.components.project.tags} <span className="text-blue-400">Tec1, Tec2</span></span>
			</div>
		</div>
	)
}
