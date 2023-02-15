import {AnimatePresence} from "framer-motion"
import {Route, Routes, useLocation} from "react-router-dom"
import {BackEnd} from "../pages/BackEnd"
import {Contact} from "../pages/Contact"
import {FrontEnd} from "../pages/FrontEnd"
import {Home} from "../pages/Home"
import {Others} from "../pages/Others"

export const Router = () => {

	const location = useLocation()

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home />} />
				<Route path='/front-end' element={<FrontEnd />} />
				<Route path='/back-end' element={<BackEnd />} />
				<Route path='/others' element={<Others />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</AnimatePresence>
	)
}
