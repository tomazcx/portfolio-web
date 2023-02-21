import {Meta, StoryObj} from '@storybook/react'
import {Input} from '.'

export default {
	title: 'Form/Input',
	component: Input,
	decorators: [
		(Story) => {
			return (
				<div className="text-white">
					{Story()}
				</div>

			)
		}
	]
} as Meta

export const Default: StoryObj = {}
