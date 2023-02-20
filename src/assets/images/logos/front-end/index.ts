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
		descriptionEnglish: "React is a open-source Javascript library for the developing of SPAs (Single Page Applications), create and mainteined by Facebook (Meta) since 2011. It uses the JSX sintaxe to render web components, besides implementating the reconciliation algorithm for updating the DOM. I've studied and developed projects using React for almost a year, and I have the ability to create interfaces that are acessible, interactive, with custom hooks and API calls, all of that using Typescript. This portfolio was developed using this technology.",
		descriptionPortuguese: 'React é uma biblioteca Javascript open-source para desenvolvimento de SPAs (Single Page Applications), criada e mantida pelo Facebook (Meta) desde 2011. Utiliza a sintaxe JSX para renderização de componentes web, além de implementar o algoritmo de reconciliação para atualização do DOM. Tenho estudado e desenvolvido projetos com React a quase um ano, e possuo capacidade de criar interfaces acessíveis, interativas, com hooks personalizados e chamadas a API, tudo isso utilizando Typescript. Esse portfólio foi desenvolvido utilizando essa tecnologia.'
	},
	{
		name: 'NextJS',
		img: NextJSLogo,
		descriptionEnglish: 'NextJS is a open-source React framework created and manteined by Vercel since 2016. Makes it possible to generate static websites and offers funcionalities as well as SSR (Server Side Rendering), middlewares, routing and others. As a fullstack developer, I have the ability to create web applications using this technology with, as well as React, custom hooks, API calls and interactive interfaces, all of that using Typescript.',
		descriptionPortuguese: 'NextJS é um framework React open-source criado e mantida pela Vercel desde 2016. Possiblita a geração de sites estáticos e oferece funcionalidades como SSR (Server Side Rendering), middlewares, roteamento, entre outros. Como um desenvolvedor fullstack, possuo a capacidade de criar aplicações web utilizando essa tecnologia com, assim como React, hooks personalizados, chamadas a API, interfaces interarivas, tudo isso utilizando Typescript.'
	},
	{
		name: 'TailwindCSS',
		img: TailwindLogo,
		descriptionEnglish: "TailwindCSS is CSS framework for styling. It differs from others due to its low level abstraction, not offering pre defined classes as buttons or tables, but instead, allows more customization and the manipulation of elements according to the necessity of the developer. I've been using Tailwind for just over six months in my projects and with it I can create complete and responsive web applications that follows the most diverse desings, using custom colors, animations and fonts. This portfolio was developed using this technology.",
		descriptionPortuguese: 'TailwindCSS é um framework CSS para estilização. Diferencia-se dos demais por seu baixo nível de abstração, não oferecendo classes pré definidas como botões ou tabelas, porém permitindo mais customizações e manipulação dos elementos de acordo com a necessidade do desenvolvedor. Tenho utilizado Tailwind a pouco mais de 6 meses em meus projetos e com ele posso criar aplicações web completas e responsivas que se adequem aos mais diversos designs, utilizando cores, animações e fontes customizadas. Esse portfólio foi desenvolvido utilizando essa tecnologia.'
	},
	{
		name: 'Bootstrap',
		img: BootstrapLogo,
		descriptionEnglish: "Bootstrap is a web framework for developing interface components that uses HTML, CSS and Javascript. Released em 2011, it offers a varied range of styled and functional elements. I learned Bootstrap during my computer technician course, and I have the ability to develop a front-end project implementing classes and components offered by the technology to build a interactive and responsive web site.",
		descriptionPortuguese: "Bootstrap é um framework web para desenolvimento de componentes de interface que utiliza HTML, CSS e Javascript. Lançado em 2011, oferece uma variada gama de elementos estilizados e funcionais. Aprendi a utilizar Bootstrap durante o meu curso de técnico de informática, e possuo a capacidade de desenvolver um projeto front-end implementando classes e componentes oferecidos pela tecnologia para construir um site interativo e responsivo."
	},
	{
		name: 'Storybook',
		img: StorybookLogo,
		descriptionEnglish: 'Storybook is a open source front-end workshop for building UI components and pages in isolation. It helps the developer to document every part of the project, making it able to see the behavior of a spefic component with different values. This portfolio was developed using this technology.',
		descriptionPortuguese: 'Storybook é um workshop front-end open source para construção de components UI e páginas em isolamento. Ajuda o desenvolvedor a documentar cada parte do projeto, fazendo com que seja possível observar o comportamento de um componente específico com diferentes valores. Esse portfólio foi desenvolvido utilizando essa tecnologia.'
	}]


