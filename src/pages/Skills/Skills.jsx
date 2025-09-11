import { AcordionItem } from "./components";


export const Skills = () => {

	const programmingLanguaje = ['HTML','CSS','JavaScript','C Sharp']
	const db = ['Microsoft SQL Server']
	const toolsDevelopment = [".NET 8","React JS", "Git", "Github", "Github Actions(Pipiline)"]
	const ide = ["Visual Studio", "Visual Studio Code"]


	return (
	<div className="w-[90%] flex justify-center items-center gap-y-2 md:gap-y-10 min-h-full md:min-h-screen mx-auto md:mt-10">
		<div className="z-10 w-full flex flex-col space-y-5">
			<AcordionItem title={'Lenguajes de Programación'} items={programmingLanguaje} />
			<AcordionItem title={'Manejo Base de Datos'} items={db} />
			<AcordionItem title={'Herramientas de Desarrollo'} items={toolsDevelopment} />
			<AcordionItem title={'Editores de Código'} items={ide} />
		</div>
	</div>
	)
};
