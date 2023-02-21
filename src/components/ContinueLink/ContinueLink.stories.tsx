import {ContinueLink, IContinueLink} from ".";
import {Meta, StoryObj} from '@storybook/react'

export default {
	title: 'TitlePage UI/Continue Link',
	component: ContinueLink
} as Meta

export const BackEnd: StoryObj<IContinueLink> = {
	args: {
		text: 'Back-end',
		href: '/back-end '
	}
}

export const Others: StoryObj<IContinueLink> = {
	args: {
		text: 'Others',
		href: '/others '
	}
}

export const Contact: StoryObj<IContinueLink> = {
	args: {
		text: 'Contact',
		href: '/contact '
	}
}
