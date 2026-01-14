import "../styles/Information.css";

export const Information = () => {
	return (
		<div className="z-0 md:z-30 relative information md:flex-1 -mt-10 md:mt-0 overflow-hidden w-[90%] p-5 md:p-8 rounded-2xl bg-linear-to-t from-green-800/30 to-cyan-400/30 hover:from-green-500/40 hover:to-cyan-600/40 border border-gray-50 inset-shadow-2sm inset-shadow-amber-50 shadow-xl/30 shadow-amber-50 mx-auto md:w-2/3 text-justify text-wrap transition delay-500 duration-300 md:hover:scale-105 text-xs sm:text-sm">
			<div className="space-y-4 text-center  my-5  ">
				<label
					className={`block text-xl md:text-2xl font-extrabold md:animate-bounce`}
					htmlFor="Name"
				>
					Jefferson Guillermo Cargua Medina
				</label>
				<label
					className="text-sm md:text-lg block underline underline-offset-4 font-bold italic"
					htmlFor="Role"
				>
					Ingeniero en Electrónica y Redes de Información
				</label>
			</div>
			<p className="tracking-normal text-black text-sm md:text-lg align-middle leading-6 md:leading-8">
				Soy desarrollador full stack, especializado en el desarrollo web de front-end y back-end. 
				Soy un apasionado del desarrollo, por lo que siempre estoy trabajando en mejorar mis habilidades 
				y conocimientos; sobre todo me apasiona aprender nuevas tecnologías que me ayuden a mejorar como 
				profesional y desarrollador. Mi objetivo es aportar con mis conocimientos en el desarrollo de 
				aplicaciones y sistemas que permitan solucionar y ayudar a las personas y empresas a alcanzar 
				sus metas y objetivos.
			</p>
		</div>
	);
};
