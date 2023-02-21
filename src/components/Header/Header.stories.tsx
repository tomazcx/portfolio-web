import {Meta, StoryObj} from '@storybook/react'
import {BrowserRouter} from 'react-router-dom'
import {Header} from '.'

export default {
	title: 'Components/Header',
	component: Header,
	decorators: [
		(Story) => {
			return (
				<BrowserRouter>
					<div className="text-white">
						{Story()}
					</div>
				</BrowserRouter>
			)
		}
	]
} as Meta

export const Default: StoryObj = {}
