import {Meta, StoryObj} from "@storybook/react"
import {BrowserRouter} from "react-router-dom"
import {ILinkHeader, LinkHeader} from "."

export default {
	title: 'Header/LinkHeader',
	component: LinkHeader,
	decorators: [
		(Story) => {
			return (
				<BrowserRouter >
					<div className="text-white">
						{Story()}
					</div>
				</BrowserRouter >
			)
		}
	]
} as Meta

export const Home: StoryObj<ILinkHeader> = {
	args: {
		text: 'Home',
		href: "/home"
	}
}

export const FrontEnd: StoryObj<ILinkHeader> = {
	args: {
		text: 'Front End',
		href: "/front-end"
	}
}

export const BackEnd: StoryObj<ILinkHeader> = {
	args: {
		text: 'Back End',
		href: "/back-end"
	}
}

export const Others: StoryObj<ILinkHeader> = {
	args: {
		text: 'Others',
		href: "/others"
	}
}

export const Contact: StoryObj<ILinkHeader> = {
	args: {
		text: 'Contact',
		href: "/contact"
	}
}
