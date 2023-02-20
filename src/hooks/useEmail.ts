import axios, {AxiosResponse} from "axios"

interface IEmail {
	name: string
	from: string
	subject: string
	content: string
}

export const useEmail = () => {

	const send = async (emailData: IEmail): Promise<AxiosResponse> => {
		return await axios.post("https://app.tomazcx.site/email", emailData)
	}

	return {send}

}
