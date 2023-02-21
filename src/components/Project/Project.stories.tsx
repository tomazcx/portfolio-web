import {IProject, Project} from "."
import {Meta, StoryObj} from "@storybook/react"

export default {
	title: 'Components/Project',
	args: {
		project: {
			name: 'Portfolio web',
			description: 'My web portfolio',
			url: 'https://github.com/tomazcx/portfolio-web',
			tags: ['React', 'TailwindCSS', 'Storybook']
		},
	},
	component: Project,
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

export const Default: StoryObj<IProject> = {
	args: {
		project: {
			name: 'Portfolio web',
			description: 'My web portfolio',
			url: 'https://github.com/tomazcx/portfolio-web',
			tags: ['React', 'TailwindCSS', 'Storybook'],
			image: 'https://app.tomazcx.site/1676898072841-216492575.png'

		}
	}
}

export const WithoutImage: StoryObj<IProject> = {
	args: {
		project: {
			name: 'Portfolio web',
			description: 'My web portfolio',
			url: 'https://github.com/tomazcx/portfolio-web',
			tags: ['React', 'TailwindCSS', 'Storybook'],
		}
	}
}
