import {TextareaHTMLAttributes} from "react"

interface IInput extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string
}

export const Textarea = ({label, ...rest}: IInput) => {

	return (
		<fieldset className="flex flex-col gap-2 w-full">
			<label htmlFor={rest.id} className="text-lg font-bold">{label}</label>
			<textarea {...rest} className="w-full bg-gray-700 rounded-xl p-1.5"></textarea>
		</fieldset>
	)
}
