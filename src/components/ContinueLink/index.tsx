import {CaretRight} from "phosphor-react"
import {AnchorHTMLAttributes} from "react"

export interface IContinueLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
	text: string
}

export const ContinueLink = ({text, ...rest}: IContinueLink) => {
	return (
		<a {...rest} className="text-white flex items-center gap-4 text-lg lg:text-2xl cursor-pointer transition-colors hover:text-blue-400 action:text-blue-500 font-bold">
			<span >{text}</span>
			<CaretRight size={28} />
		</a >
	)
}
