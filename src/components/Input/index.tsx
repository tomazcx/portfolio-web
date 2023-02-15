import {InputHTMLAttributes} from "react"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	register: any
}

export const Input = ({label, register, ...rest}: IInput) => {

	return (
		<fieldset className="flex flex-col gap-2 w-full">
			<label htmlFor={rest.id} className="text-lg font-bold">{label}</label>
			<input {...rest} {...register(rest.name)} className="w-full bg-gray-700 rounded-xl p-1.5" />
		</fieldset>
	)
}
