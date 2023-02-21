import {Meta, StoryObj} from '@storybook/react'
import {ITextarea, Textarea} from '.'

export default {
	title: 'Form/Textarea',
	component: Textarea,
	decorators: [
		(Story) => {
			return (
				<div className='text-white'>
					{Story()}
				</div>
			)
		}
	]
} as Meta

export const Default: StoryObj<ITextarea> = {
	args: {
		label: 'Content'
	}
}
