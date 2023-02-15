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
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'Typescript',
		img: TsLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'NestJS',
		img: NestJSLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'Jest',
		img: JestLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'SQL',
		img: SQLLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'Prisma',
		img: PrismaLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'TypeORM',
		img: TypeORMLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'Sequelize',
		img: SequelizeLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'MongoDB',
		img: MongoDBLogo,
		descriptionEnglish: 'ansdjnad',
		descriptionPortuguese: 'asdsa'
	},
	{
		name: 'Redis',
		img: RedisLogo,
		descriptionEnglish: 'jadjnsajdn',
		descriptionPortuguese: 'ijdasjd'
	}
]


