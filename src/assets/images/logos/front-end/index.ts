import ReactLogo from './react.png'
import NextJSLogo from './nextjs.svg'
import TailwindLogo from './TailwindCSS.png'
import StorybookLogo from './storybook.png'
import BootstrapLogo from './bootstrap.png'

interface ITec {
	name: string
	img: string
	descriptionEnglish: string
	descriptionPortuguese: string
}

export const tecs: ITec[] = [
	{
		name: 'React',
		img: ReactLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'NextJS',
		img: NextJSLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'TailwindCSS',
		img: TailwindLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'Bootstrap',
		img: BootstrapLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'Storybook',
		img: StorybookLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	}]


