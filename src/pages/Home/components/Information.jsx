import "../styles/Information.css";

export const Information = () => {
	return (
		<div className="z-0 md:z-30 relative information md:flex-1 -mt-10 md:mt-0 overflow-hidden w-[90%] p-5 md:p-8 rounded-lg bg-linear-to-t from-green-800/30 to-cyan-400/30 hover:from-green-500/40 hover:to-cyan-600/40 border border-gray-50 inset-shadow-2sm inset-shadow-amber-50 shadow-xl/30 shadow-amber-50 mx-auto md:w-2/3 text-justify text-sm text-wrap transition delay-500 duration-300 md:hover:scale-105">
			<div className="space-y-4 text-center text-sm my-5  ">
				<label
					className={`block text-xl md:text-2xl font-extrabold md:animate-bounce`}
					htmlFor="Name"
				>
					Jefferson Guillermo Cargua Medina
				</label>
				<label
					className="block underline underline-offset-4 font-bold italic"
					htmlFor="Role"
				>
					Ingeniero en Electrónica y Redes de Información
				</label>
			</div>
			<p className="tracking-normal align-middle leading-6 md:leading-8">
				Soy desarrollador full stack, especializado en el desarrollo front-end y
				back-end. Me apasiona el desarrollo, por lo que siempre estoy buscando
				mejorar mis habilidades y conocimientos, sobre todo en aprender de
				nuevas tecnologías, que me ayuden a mejorar como desarrollador y
				entregar mejores resultados que satisfagan las necesidades de los
				clientes y de los usuarios.
			</p>
		</div>
	);
};
