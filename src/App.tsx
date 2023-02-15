import {Router} from "./routes/Router"
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"

function App() {

	return (
		<div className="flex flex-col justify-between h-screen">
			<Header />
			<Router />
			<Footer />
		</div >
	)
}

export default App
