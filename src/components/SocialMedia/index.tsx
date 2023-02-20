import {AnchorHTMLAttributes} from "react"

interface ISocialMedia extends AnchorHTMLAttributes<HTMLAnchorElement> {
	logo: React.ReactNode
	text: string
}

export const SocialMedia = ({logo, text, ...rest}: ISocialMedia) => {
	return (
		<a {...rest} className="font-bold flex flex-col gap-4 items-center hover:text-blue-400 action:text-blue-500 transition-colors">
			{logo}
			<span className="lg:text-xl">{text}</span>
		</a>
	)
}
