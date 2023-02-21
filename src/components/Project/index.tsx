import {textsEnglish} from "../../assets/texts/textsEnglish"
import {textsPortuguese} from "../../assets/texts/textsPortuguese"
import {useLanguage} from "../../hooks/useLanguage"

export interface IProject {
	project: {
		name: string
		description: string
		image?: string
		url: string
		tags: string[]
	}
}

export const Project = ({project}: IProject) => {

	const {language} = useLanguage('es')

	return (
		<div className="lg:grid lg:grid-cols-12 flex flex-col w-11/12 lg:w-full items-center mx-auto gap-12 ">
			<span className="text-3xl text-center font-bold mb-8 lg:hidden">
				{project.name}
			</span>

			{
				project.image ?
					<img src={`https://app.tomazcx.site/${project.image}`} alt="Project image" className="w-10/12 mx-auto h-auto col-span-6" />
					:
					<span className="text-center col-span-6">Image not found.</span>
			}


			<div className="flex flex-col gap-4 col-span-6 lg:text-lg">
				<span className="text-3xl lg:text-4xl text-center lg:text-left font-bold mb-8 hidden lg:inline">{project.name}</span>
				<span>{language === 'es' ? textsEnglish.components.project.description : textsPortuguese.components.project.description} <span className="text-blue-400">{project.description}</span></span>
				<span>URL: <a href={project.url} target="_blank" className="text-blue-400 hover:text-blue-500 active:text-blue-600 transition-colors">{project.url}</a></span>
				<span>{language === 'es' ? textsEnglish.components.project.tags : textsPortuguese.components.project.tags} <span className="text-blue-400">
					{project.tags.map((tag, index) => {
						return (
							<span>{tag}{index < project.tags.length - 1 ? ', ' : null}</span>
						)
					})}
				</span></span>
			</div>
		</div >
	)
}
