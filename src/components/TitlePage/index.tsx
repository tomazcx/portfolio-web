import Typewriter from 'typewriter-effect'
import {ContinueLink} from '../ContinueLink'

interface ITitlePage {
	title: string
	description: string
	textContinue?: string
	pathContinue?: string
}

export const TitlePage = ({title, description, textContinue, pathContinue}: ITitlePage) => {

	return (
		<div className="flex flex-col gap-12">
			<div className="flex justify-between items-center overflow-hidden">
				<h1 className="text-blue-400 text-4xl lg:text-7xl font-bold">
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString(title)
								.start()
						}
						}
					/>
				</h1>
				{
					textContinue !== undefined && pathContinue !== undefined ? <ContinueLink text={textContinue} href={pathContinue} /> : null
				}
			</div>
			<p>{description}</p>
		</div>

	)
}
