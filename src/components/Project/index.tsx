export const Project = () => {
	return (
		<div className="lg:grid lg:grid-cols-12 flex flex-col w-10/12 lg:w-full items-center mx-auto gap-12 ">
			<div className="bg-gray-800 flex justify-center items-center w-full h-[300px] col-span-6">
				<span>Project image</span>
			</div>
			<div className="flex flex-col gap-4 col-span-6 lg:text-lg">
				<span>Title: <span className="text-blue-400">Example title</span></span>
				<span>Description: <span className="text-blue-400">Example desc</span></span>
				<span>URL: <span className="text-blue-400">Example url</span></span>
				<span>Technologies that were used: <span className="text-blue-400">Tec1, Tec2</span></span>
			</div>
		</div>
	)
}
