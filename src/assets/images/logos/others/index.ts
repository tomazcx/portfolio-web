import DockerLogo from './docker.webp'
import YarnLogo from './yarn.png'
import FigmaLogo from './figma.svg'
import GitLogo from './git.png'
import GithubLogo from './github.png'
import VimLogo from './vim.png'

interface ITec {
	name: string
	img: string
	descriptionEnglish: string
	descriptionPortuguese: string
}

export const tecs: ITec[] = [
	{
		name: 'Git',
		img: GitLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'Github',
		img: GithubLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'Docker',
		img: DockerLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'Yarn',
		img: YarnLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'Vim',
		img: VimLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'Figma',
		img: FigmaLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'

	}

]


