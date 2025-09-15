import { AcordionItem } from "./components";

export const Skills = () => {
	const programmingLanguaje = ["HTML", "CSS", "JavaScript", "C Sharp"];
	const db = ["Microsoft SQL Server"];
	const toolsDevelopment = [
		".NET 8",
		"React JS",
		"Git",
		"Github",
		"Github Actions CI/CD",
	];
	const ide = ["Visual Studio", "Visual Studio Code"];

	return (
		<div className="w-[90%] flex justify-center items-center gap-y-2 md:gap-y-10 min-h-screen mx-auto md:mt-10">
			<div className="z-10 w-full flex flex-col space-y-5">
				<AcordionItem
					title={"Lenguajes de Programación"}
					items={programmingLanguaje}
					delay={20}
					duration={400}
				/>
				<AcordionItem
					title={"Manejo Base de Datos"}
					items={db}
					delay={40}
					duration={600}
				/>
				<AcordionItem
					title={"Herramientas de Desarrollo"}
					items={toolsDevelopment}
					delay={60}
					duration={800}
				/>
				<AcordionItem
					title={"Editores de Código"}
					items={ide}
					delay={80}
					duration={1000}
				/>
			</div>
		</div>
	);
};
