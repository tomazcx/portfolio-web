import ReactLogo from './react.png'
import NextJSLogo from './nextjs.svg'
import TailwindLogo from './TailwindCSS.png'
import StorybookLogo from './storybook.png'
import BootstrapLogo from './bootstrap.png'
import StyledComponentsLogo from './styled-components-1.svg'
import SassLogo from './sass-original.svg'
import ReduxLogo from './redux-original.svg'

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
		descriptionEnglish: "React is a open-source Javascript library for the developing of SPAs (Single Page Applications), create and mainteined by Facebook (Meta) since 2011. It uses the JSX sintax to render web components, besides implementing the reconciliation algorithm for updating the DOM. I have the ability to create interfaces that are acessible and interactive using custom hooks and making API calls, all of that using React with Typescript. This portfolio was developed using this technology.",
		descriptionPortuguese: 'React é uma biblioteca Javascript open-source para desenvolvimento de SPAs (Single Page Applications), criada e mantida pelo Facebook (Meta) desde 2011. Utiliza a sintaxe JSX para renderização de componentes web, além de implementar o algoritmo de reconciliação para atualização do DOM. Eu possuo capacidade de criar interfaces acessíveis e interativas utilizando hooks personalizados e fazendo chamadas a APIs, tudo isso utilizando React com Typescript. Esse portfólio foi desenvolvido utilizando essa tecnologia.'
	},
	{
		name: 'NextJS',
		img: NextJSLogo,
		descriptionEnglish: 'NextJS is a open-source React framework created and manteined by Vercel since 2016. Makes it possible to generate static websites with async data and offers funcionalities as well as SSR (Server Side Rendering), middlewares, routing and others. As a fullstack developer, I have the ability to create web applications using this technology with, as well as React, custom hooks, API calls and interactive interfaces.',
		descriptionPortuguese: 'NextJS é um framework React open-source criado e mantida pela Vercel desde 2016. Possiblita a geração de sites estáticos com dados assíncronos e oferece funcionalidades como SSR (Server Side Rendering), middlewares, roteamento e entre outros. Como um desenvolvedor fullstack, possuo a capacidade de criar aplicações web utilizando essa tecnologia com, assim como React, hooks personalizados, chamadas a API, interfaces interarivas.'
	},
	{
		name: 'Redux',
		img: ReduxLogo,
		descriptionEnglish: 'A open-source Javascript library to manage the global states of an application. It helps the developer to create software that behave consistently, centralizing the logic. I have the abillity to use Redux for managing the global state of an application with Redux Toolkit, Redux Thunk and persist data with Redux Persist.',
		descriptionPortuguese: 'Uma biblioteca Javascript open-source para gerenciar estados globais de uma aplicação. Ajuda o desenvolvedor a criar softwares que se comportem de maneira consistente, centralizando a lógica. Eu possuo a capacidade de usar Redux para gerenciar o estado global de uma aplicação com Redux Toolkit, Redux Thunk e persistir dados com Redux Persist. '
	},
	{
		name: 'Sass',
		img: SassLogo,
		descriptionEnglish: 'Syntactically Awesome Style Sheets is stylesheet language that extends CSS, giving it superpowers. It allows the developer to write CSS with a cleaner syntax and use variables, functions, loops, conditionals and others. I have the abillity to create a complete UI using this technology.',
		descriptionPortuguese: 'Syntactically Awesome Style Sheets é uma linguagem de folha de estilo que estende o CSS, dando a ele super poderes. Permite que o desenvolvedor escreva CSS com uma sintaxe mais limpa e use variáveis, funções, loops, condicionais e entre outros. Eu possuo a capacidade de criar uma interface de usuário completa utilizando essa tecnologia.'
	},
	{
		name: 'Styled Components',
		img: StyledComponentsLogo,
		descriptionEnglish: "Styled components is the most used CSS-in-JS library in the React ecossystem. It allows the developer to write CSS styles in a JS file, making the code more easily readable, flexible, organized and avoiding classes collision. I have the abillity to create a complete UI using this technology.",
		descriptionPortuguese: 'Styled components é a biblioteca de CSS-in-JS mais utilizada no ecossistema React. Permite que o desenvolvedor escreva estilos CSS em um arquivo JS, tornando o código mais legívei, flexível, organizado e evitando colisões de classes. Eu possuo a capacidade de criar uma interface de usuário completa com essa tecnologia.'
	},
	{
		name: 'TailwindCSS',
		img: TailwindLogo,
		descriptionEnglish: "TailwindCSS is CSS framework for styling. It differs from others due to its low level abstraction, not offering pre defined classes like buttons or tables, but instead, allows more customization and the manipulation of elements according to the necessity of the developer. With it, I can create complete and responsive web applications that follows the most diverse desings, using custom colors, animations and fonts. This portfolio was developed using this technology.",
		descriptionPortuguese: 'TailwindCSS é um framework CSS para estilização. Diferencia-se dos demais por seu baixo nível de abstração, não oferecendo classes pré definidas como botões ou tabelas, porém permitindo mais customizações e manipulação dos elementos de acordo com a necessidade do desenvolvedor. Com ele, posso criar aplicações web completas e responsivas que se adequem aos mais diversos designs, utilizando cores, animações e fontes customizadas. Esse portfólio foi desenvolvido utilizando essa tecnologia.'
	},
	{
		name: 'Bootstrap',
		img: BootstrapLogo,
		descriptionEnglish: "Bootstrap is a web framework for developing interface components that uses HTML, CSS and Javascript. Released em 2011, it offers a varied range of styled and functional elements. I have the ability to develop a front-end project implementing classes and components offered by the technology to build a interactive and responsive web site.",
		descriptionPortuguese: "Bootstrap é um framework web para desenolvimento de componentes de interface que utiliza HTML, CSS e Javascript. Lançado em 2011, oferece uma variada gama de elementos estilizados e funcionais. Eu possuo a capacidade de desenvolver um projeto front-end implementando classes e componentes oferecidos pela tecnologia para construir um site interativo e responsivo."
	},
	{
		name: 'Storybook',
		img: StorybookLogo,
		descriptionEnglish: 'Storybook is a open source front-end workshop for building UI components and pages in isolation. It helps the developer to document every part of the project, making it able to see the behavior of a spefic component with different values. This portfolio was developed using this technology.',
		descriptionPortuguese: 'Storybook é um workshop front-end open source para construção de components UI e páginas em isolamento. Ajuda o desenvolvedor a documentar cada parte do projeto, fazendo com que seja possível observar o comportamento de um componente específico com diferentes valores. Esse portfólio foi desenvolvido utilizando essa tecnologia.'
	}]


