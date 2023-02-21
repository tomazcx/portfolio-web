import {Meta, StoryObj} from '@storybook/react'
import {EmailAlert} from '.'

export default {
	title: 'Components/EmailAlert',
	component: EmailAlert,
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

export const Default: StoryObj = {}
