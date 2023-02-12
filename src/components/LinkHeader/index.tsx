import classNames from "classnames"
import {AnchorHTMLAttributes} from "react"
import {useLocation} from "react-router-dom"

interface ILinkHeader extends AnchorHTMLAttributes<HTMLAnchorElement> {
	text: string
}

export const LinkHeader = ({text, ...rest}: ILinkHeader) => {

	const location = useLocation()

	return (
		<a {...rest} className={classNames("px-4 py-1 transition-colors font-bold cursor-pointer", {
			'bg-blue-400 hover:bg-blue-500 rounded-full active:bg-blue-600': location.pathname === rest.href,
			'hover:text-blue-500 active:text-blue-600': location.pathname !== rest.href
		})} >{text}</a>
	)
}
