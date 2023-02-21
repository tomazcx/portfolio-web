import {Meta, StoryObj} from "@storybook/react";
import {GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo} from "phosphor-react";
import {ISocialMedia, SocialMedia} from ".";

export default {
	title: 'Components/Social Media',
	component: SocialMedia,
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

export const Instagram: StoryObj<ISocialMedia> = {
	args: {
		logo: <InstagramLogo size={36} />,
		text: 'Instagram',
		href: 'https://instagram.com/tomazcx',
		target: '_blank'
	}
}

export const Linkedin: StoryObj<ISocialMedia> = {
	args: {
		logo: <LinkedinLogo size={36} />,
		text: 'Linkedin',
		href: 'https://linkedin.com/in/tomazcx',
		target: '_blank'
	}
}

export const Twitter: StoryObj<ISocialMedia> = {
	args: {
		logo: <TwitterLogo size={36} />,
		text: 'Twitter',
		href: 'https://twitter.com/tomazcx',
		target: '_blank'
	}
}

export const Github: StoryObj<ISocialMedia> = {
	args: {
		logo: <GithubLogo size={36} />,
		text: 'Github',
		href: 'https://github.com/tomazcx',
		target: '_blank'
	}
}
