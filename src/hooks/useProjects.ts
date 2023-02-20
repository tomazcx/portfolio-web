import axios, {AxiosResponse} from "axios"

interface IProject {
	name: string
	description: string
	url: string
	image: string
	tags: string[]
}

export const useProjects = () => {

	const getProjectsByTag = async (tag: string): Promise<AxiosResponse> => {
		return await axios.get(`https://app.tomazcx.site/projects/all/${tag}`)
	}

	return {getProjectsByTag}
}
