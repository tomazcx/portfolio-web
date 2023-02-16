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
		descriptionEnglish: "Git is a open-source system for software project versioning. Released in 2005, It has become a essential tool for any development team to coordenate modifications on its projects, avoiding conflicts. I've been using this technology in all of my works and I have the ability of managing branches, commits and other essential features that are provided. ",
		descriptionPortuguese: 'Git é um sistema open-source para versionamento de projetos de software. Lançado em 2005, tornou-se uma ferramenta essencial para qualquer equipe de desenvolvimento coordenar modificações em seus projetos, evitando conflitos. Tenho usado essa tecnologia em todos os meus trabalhos e possuo a capacidade de gerenciar branches, commits e outras funcionalidades essenciais que são disponíveis.'
	},
	{
		name: 'Github',
		img: GithubLogo,
		descriptionEnglish: "Github is a remote git repositories platform, that allows any developer to contribute in private or open-source projects. I've been using Github to save all of my applications, that are shown in this portfolio. Besides, I have the ability to manage branches, pull requests, create and resolve issues and any other features that are required to work with Github in a development team.",
		descriptionPortuguese: 'Github é uma plataforma de repositórios Git remota, que permite que qualquer desenvolvedor possa contribuir em projetos privados ou open-source.  Tenho usado Github para salvar todos as minhas aplicações, que estão exibidas nesse portfólio. Além disso, possuo a capacidade de gerenciar branches, pull requests, criar e resolver issues e quaisquer outras funcionalidades necessárias ao se trabalhar com Github em um time de desenvolvimento.'
	},
	{
		name: 'Docker',
		img: DockerLogo,
		descriptionEnglish: 'Docker is a platform that uses virtualization in a operational system level to deliver softwares in packages called containers, those that are isolated from each other and relies only on its own configuration files. Docker makes possible to generate a complete image from your project that includes all of the dependencies that are necessary to execute the application. The API for this portfolio was developed using this technology.',
		descriptionPortuguese: 'Docker é uma plataforma que utiliza virtualização em nível de sistema operacional para entregar softwares em pacotes chamados de container, esses que são isolados uns dos outros e dependem somente de seus próprios arquivos de configuração. Com Docker é possível gerar uma imagem completa de seu projeto que inclua todas as dependências necessárias para executar a aplicação. A API para esse portfólio foi desenvolvida utilizando essa tecnologia.'
	},
	{
		name: 'Yarn',
		img: YarnLogo,
		descriptionEnglish: 'Yarn, along with NPM, is one of the most popular package manageres for Javascript. I use both Yarn and NPM in all of my projects, and I have the ability to  install, remove, update and manage any dependencies that are required in any Typescript or Javascript application. ',
		descriptionPortuguese: 'Yarn, juntamente com NPM, é um dos gerenciadores de pacotes mais populares para Javascript. Eu utilizo tanto Yarn quanto NPM em meus projetos, e possuo a capacidade de instalar, remover, atualizar e gerenciar quaisquer dependências que são requeridas em qualquer aplicação Typescript ou Javascript.',

	},
	{
		name: 'Vim',
		img: VimLogo,
		descriptionEnglish: 'VIM is a text editor highly configurable to make and change any text in a eficient and productive way, have been released in 1991 as an improved clone of the VI editor for UNIX. I use VIM as my primary text editor in the development of any software.',
		descriptionPortuguese: 'Vim é um editor de texto extremamente configurável que permite criar e alterar qualquer texto de maneira eficiente e produtiva, tendo sido lançado em 1991 como um clone melhorado do editor VI para UNIX. Eu utilizo VIM como meu principal editor de texto no desenvolvimento de qualquer software.'
	},
	{
		name: 'Figma',
		img: FigmaLogo,
		descriptionEnglish: 'Figma is a colaborative platform for building interface and prototypes designs, that works as a graphic vector editor based most on the web browser. I use Figma to create prototypes of software interfaces that I develop, and I have the ability to craete components with variable states and atributes.',
		descriptionPortuguese: 'Figma é uma plataforma colaborativa para construção de design de interfaces e propótipos, funcionando como um editor gráfico de vetor baseado principalmente no navegador web. Eu utilizo Figma para criar protótipos de interfaces de software que eu desenvolvo, e possuo a capacidade de criar componentes com estados e atributos variáveis.'

	}

]


