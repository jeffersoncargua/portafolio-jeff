import { SectionProject } from "./components";

export const Projects = () => {

	const projectsReactNet = [
		{id: 1, title: "Capernova", image: "https://lh3.googleusercontent.com/d/1BJCoQc_3y-NGyPIgscO8YQVm_AKnnrs9?authuser=0", link: "https://capernovademo.netlify.app/", description:"Plataforma de Ventas Online y Capacitación para emprendedores."},
		{id: 2, title: "Calculadora de Matrícula y Aranceles", image: "https://lh3.googleusercontent.com/d/18RZhISZOOpCvbso80J89ygVW505nKTVE?authuser=0", link: "https://cobromatriculaepn.netlify.app/", description:"Sistema de cálculo del valor a pagar por concepto de matrícula en la EPN."}
	];

	const projectsReact = [
		{id: 1, title: "Cinema", image: "https://lh3.googleusercontent.com/d/18RZhISZOOpCvbso80J89ygVW505nKTVE?authuser=0", link: "https://cinema-project-jeffersoncargua.netlify.app/", description:"Sitio que permite ver la cartelera de películas actuales."},
		{id: 2, title: "Redux Cart", image: "https://lh3.googleusercontent.com/d/13csszjqdsz-2P6T6-X9cHLFvGcdhG8GX?authuser=0", link: "https://shopmate-redux-jeffcargua-ss.netlify.app/", description:"Demo de un carrito de compras con redux."},
		{id: 3, title: "Task Mate", image: "https://lh3.googleusercontent.com/d/1oesWEv0wGG35sMfhKG9KgSYhwpd7pVdp?authuser=0", link: "https://taskmate-jeffcargua-ss.netlify.app/", description:"Demo de un tablero que permite listar tareas a realizar."}
	];

	return( 
	<div className="w-full min-h-full flex flex-col items-center mb-20 space-y-10">
		<SectionProject titleSection={"React + .Net 8"} projects={projectsReactNet} />
		<SectionProject titleSection={"React"} projects={projectsReact} />
	</div>);
};
