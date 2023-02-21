import {Meta, StoryObj} from '@storybook/react'
import {rest} from 'msw'
import {EmailAlert} from '.'

export default {
	title: 'Components/EmailAlert',
	component: EmailAlert,
	parameters: {
		msw: {
			handlers: [
				rest.post("https://app.tomazcx.site/email", (req, res, ctx) => {
					return res()
				})
			]
		}
	},
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
