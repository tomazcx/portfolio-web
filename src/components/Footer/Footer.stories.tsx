import {Footer} from ".";
import {Meta, StoryObj} from '@storybook/react'
import {BrowserRouter} from "react-router-dom";

export default {
	title: 'Components/Footer',
	component: Footer,
	decorators: [
		(Story) => {
			return (
				<BrowserRouter>
					{Story()}
				</BrowserRouter>

			)
		}
	]
} as Meta

export const Default: StoryObj = {}
