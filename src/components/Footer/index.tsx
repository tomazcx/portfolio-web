import {useLocation} from "react-router-dom"

export const Footer = () => {

	const location = useLocation()

	return (
		<footer className={`p-12 ${location.pathname === '/' ? 'hidden' : 'flex'} justify-center items-center`}>
			<span className="text-center ">Powered by <a href="https://github.com/tomazcx" className="transition-colors text-blue-400 hover:text-blue-500 action:text-blue-600" target={"_blank"}>tomazcx</a></span>
		</footer>
	)
}
