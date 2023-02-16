import JestLogo from './jest.png'
import NodeJSLogo from './node.png'
import NestJSLogo from './nest.png'
import MongoDBLogo from './mongodb.png'
import PrismaLogo from './prisma.svg'
import TypeORMLogo from './typeORM.png'
import TsLogo from './ts.png'
import SequelizeLogo from './sequelize.png'
import SwaggerLogo from './swagger.png'
import SQLLogo from './sql.png'
import RedisLogo from './redis.png'

interface ITec {
	name: string
	img: string
	descriptionEnglish: string
	descriptionPortuguese: string
}

export const tecs: ITec[] = [
	{
		name: 'NodeJS',
		img: NodeJSLogo,
		descriptionEnglish: "NodeJS is a open-source Javascript runtime that allows the execution of applications developed with the language outside a web browser. It uses the V8 engine and operates on single thread runs. I've developed projects using the technology for just over two months and, since then, I've learned to use frameworks like Express to build RESTful APIs and MVCs using the template engine handlebars. Besides, I've focused on learning more about the implementation of the SOLID principles in a project along with the design pattern DDD, with Clean Archtecture and with TDD. The API for this portfolio was developed using this technology.",
		descriptionPortuguese: 'NodeJS é um ambiente de execução de Javascript open-source que permite executar aplicações desenvolvidas com a linguagem independentemente de um navegador. Utiliza o motor V8 e opera em execuções single thread. Tenho desenvolvido projetos utilizando a tecnologia a pouco mais de dois meses, e desde então, aprendi a utilizar frameworks como Express para contruir APIs RESTful e MVCs utilizando a template engine handlebars. Além disso, tenho focado em aprender mais sobre a implementação dos princípios SOLID em um projeto juntamente com o design pattern DDD, com Clean Archtecture e com TDD. A API para esse portfolio foi desenvolvida utilizando essa tecnologia.'
	},
	{
		name: 'Typescript',
		img: TsLogo,
		descriptionEnglish: "Typescript is a programming language developed by Microsoft. Its a syntatic superset for Javascript that provides funcionalities that aren't natives from the language, as well as data types and object orientation. My first projects with this technology were made along with React in the building of front-end applications, and two months ago I've started to build RESTful APIs with Typescript and frameworks like Express and NestJS. The API for this portfolio was developed using this technology ",
		descriptionPortuguese: 'Typescript é uma linguagem de programação desenvolvida pela Microsoft. Trata-se de um superconjunto sintático para Javascript que providencia funcionalidades que não são nativas da linguagem, como tipagem para dados e orientação a objetos. Meus primeitos projetos com essa tecnologia foram feitos juntamente com React na construção de aplicações front-end, e há dois meses tenho começado a construir APIs RESTful com Typescript e frameworks como Express e NestJS. A API para esse portfólio foi desenvolvida utilizando essa tecnologia.'
	},
	{
		name: 'NestJS',
		img: NestJSLogo,
		descriptionEnglish: "NestJS is a framework for building NodeJS applications. Released in 2017, it has an archtecture strongly inspired by Angular, with decorators to define the responsability of each class and a module system. It has been my main option in the building of Node projects since I started studying it, and I'm constanly learning more about the implementation of archtectures and desing patterns for building scalable and clean systems, besids the test driven development with Jest. The API for this portfolio was developed using this technology.",
		descriptionPortuguese: 'NestJS é um framework para construção de aplicações NodeJS. Lançado em 2017, possui uma arquitetura fortemente inspirada no Angular, com decorators para definir a responsabilidade de cada uma das classes e um sistema de módulos. Têm sido minha principal opção na construção de projetos Node desde que comecei a estudá-la, e estou constantemente procurando aprender mais sobre implementação de arquiteturas e design patterns para construção de sistemas limpos e escaláveis, além de desenvolvimento guiado por testes com Jest. A API para esse portfólio foi desenvolvida utilizando essa tecnologia.'
	},
	{
		name: 'Jest',
		img: JestLogo,
		descriptionEnglish: 'Jest is a framework of automated tests for Javascript. It works in projects that uses technologies like NodeJS, React, VueJS, Angular, Svelte, NestJS, and others. I use Jest in my projects to develop back-end applications using NestJS or Express and applying the TDD (Test Driven Development), by implementing unit tests, to guarantee the funcionality of each use case of a system, as well as integration tests and tests e2e. The API for this portfolio was developed using this technology.',
		descriptionPortuguese: 'Jest é um framework de testes automatizados para Javascript. Funciona em projetos que utilizam tecnologias como NodeJS, React, VueJS, Angular, Svelte, NestSJS, entre outros. Utilizo Jest em meus projetos para desenvolver aplicações Back-end utilizando NestJS ou Express e aplicando os principíos do TDD (Test Driven Development), através da implementação de testes unitários, para garantir a funcionalidade de cada um dos casos de uso de um sistema, assim como de testes de integração e de testes e2e. A API para esse portfólio foi desenvolvida utilizando essa tecnologia.'
	},
	{
		name: 'SQL',
		img: SQLLogo,
		descriptionEnglish: "Structured Query Language (SQL) is a domain-specific language used in programming for the management of relational databases. There are a series of database developed based in this technology, as well as Oracle, SQLite, MySQL, PostgreSQL, MariaDB, and others. In my projects, I've been using mostly the MySQL and PostgreSQL databases, having already worked with others like MariaDB and SQLite. Due to security and practicality, I always use ORMs in my projects, but I have the ability to write raw queries inside a database or in the system code itself when necessary.",
		descriptionPortuguese: 'Structured Query Language (SQL) é uma lingaugem específica de domínio utilizada para o gerenciamento de bancos de dados relacionais. Existe uma série de bancos de dados desenvolvidos com base nessa tecnologia, como Oracle, SQLite, MySQL, PostgreSQL, MariaDB, entre outros. Em meus projetos, tenho utilizado principalmente os bancos de dados MySQL e PostgreSQL, já tendo trabalhado com outros como MariaDB e SQLite. Por conta da facilidade e da segurança, sempre utilizo ORMs em projetos, porém tenho a capacidade de escrever raw queries dentro de um banco ou no próprio código do sistema quando necessário.'
	},
	{
		name: 'Prisma',
		img: PrismaLogo,
		descriptionEnglish: "Prisma is a ORM (Object-Relational Mapping) that allows the creation of schemas using its own syntax and the integration with a various number of SQL databases and MongoDB. Besides having its own SGDB, the Prisma Studio, it also allows the automatic import of already defined schemas. I've using Prisma in all of my projects that requires the use of a ORM since I started studying it.",
		descriptionPortuguese: 'Prisma é um ORM (Object-Relational Mapping) que permite a criação de schemas utilizando uma sintaxe prórpria e a integração com diversos bancos de dados SQL e MongoDB. Além de possuir um SGBD próprio, o Prisma Studio, também permite importação automática de schemas ja definidos. Tenho utilizado Prisma em todos os meus projetos que requerem o uso de um ORM desde que comecei a estudá-lo.'
	},
	{
		name: 'TypeORM',
		img: TypeORMLogo,
		descriptionEnglish: "TypeORM is a ORM (Object-Relational Mapping) for integrating relational databases with a NodeJS project with Typescript support. I've used this technology in several projects that implementing since One-to-One relations to Many-to-Many.",
		descriptionPortuguese: 'TypeORM é um ORM (Object-Relational Mapping) para integração de bancos de dados relacionais com um projeto NodeJS com suporte para Typescript. Tenho utilizado essa tecnologia em diversos projetos que implementam desde relações One-to-One para Many-to-Many.'
	},
	{
		name: 'Sequelize',
		img: SequelizeLogo,
		descriptionEnglish: "Sequelize is a Typescript and NodeJS ORM (Object-Relational Mapping) for most SQL databases, like MySQL, Oracle, PostgreSQL, MariaDB and others. I have the ability of implementing this ORM in a real project to create a RESTful API that works with all kinds of relations.",
		descriptionPortuguese: "Sequelize é um ORM (Object-Relational Mapping) Typescript e NodeJS para maioria de bancos de dados SQL, como MySQL, Oracle, PostgreSQL, MariaDB e outros. Eu possuo a capacidade the implementar esse ORM em um projeto real para criar APIs RESTful que funcionam com todos os tipos de relações."
	},
	{
		name: 'MongoDB',
		img: MongoDBLogo,
		descriptionEnglish: 'MongoDB is a NoSQL database oriented to documents that are similar to JSON, known as BSON. It allows applications to model informations with less restriction than a SQL database, making it easier to query for data and for establishing the relation between documents. I use MongoDB in my projects with the Mongoose library, a NodeJS and Typescript ODM (Object-Data Modeling). The API for this portfolio was developed using this technology.',
		descriptionPortuguese: "MongoDB é um banco de dados NoSQL orientado a documentos semelhantes a JSON, conhecidos como BSON. Suas caracteristicas permitem que aplicações modelem infomrações com menos restrição que um banco SQL, facilitando a busca por dados e o estabelecimento de relationamento entre documents. Utilizo MongoDB em meus projetos com a biblioteca Mongoose, uma ODM (Object-Data Modeling) para NodeJS e Typescript. A API para esse portfolio foi desenvolvida utilizando essa tecnologia"
	},
	{
		name: 'Redis',
		img: RedisLogo,
		descriptionEnglish: 'Redis is a in memory key-value NoSQL database. Mostly used for data caching due to its speed, as well as being able to serve as a messaging agent. The API for this portfolio was developed using this technology.',
		descriptionPortuguese: 'Redis é um banco de dados NoSQL em memória de chave-valor. É utilizado principalemente para cache de dados devido a sua rapidez, podendo servir também como um agente de mensagens. A API para esse portfolio foi desenvolvida utilizando essa tecnologia. '
	},
	{
		name: 'Swagger',
		img: SwaggerLogo,
		descriptionEnglish: "Swagger is a set of tools for model and document the development of APIs, offering the possibility of defining clearly each one of the application's endpoints as well the values that expect to receive and return. The API for this portfolio was developed using this technology.",
		descriptionPortuguese: 'Swagger é um conjunto de ferramentas para modelar e documentar o desenvolvimento de APIs, oferecendo a possiblidade de definir claramente cada uma das rotas da aplicação assim como os valores que espera receber e retornar. A API para esse portfolio foi desenvolvida utilizando essa tecnologia.'
	}
]


