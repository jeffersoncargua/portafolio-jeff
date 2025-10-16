import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components";
import { useFetch } from "../../hooks/useFetch";
import { CardProjectDetail } from "./components";

export const ProjectDetail = () => {
	const params = useParams();
	const [proyecto, setProyecto] = useState({});
	const [loading, setLoading] = useState(true);

	const FetchData = useCallback(async () => {
		//setLoading(true);
		const result = await useFetch();
		if (result !== null) {
			let response = result.find((item) => item.id === +params.id) 
			if(response !== null){
				setProyecto(response);
			}
		}
		//setLoading(false);
		return result;
	}, [params.id]);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2500);
		FetchData();

	}, [FetchData]);

	return (
		<div className="w-full min-h-full flex flex-col items-center justify-center z-20 space-y-8 mb-10">
			{loading ? (
				<Loading />
			) : (
				<>
					{/* Aqui va el video y el titulo */}
					<section className="w-[90%] mx-auto p-5 z-40 border border-gray-900 bg-slate-50/50 rounded-lg ">
						<img
							src={proyecto.image}
							alt={`Aquí va la imagen de ${proyecto.title}`}
							className="w-[90%] mx-auto rounded-lg"
						/>
						<h3 className="text-center font-semibold mt-5">{proyecto.title}</h3>
					</section>
					{/* Aqui va la descripcion */}
					<section className="w-[90%] mx-auto z-40 text-xs sm:text-sm bg-slate-50/50 border border-gray-900 space-y-3 rounded-lg p-10">
						<h3 className="underline underline-offset-2 font-semibold">
							Descripción :
						</h3>
						<p className="text-justify leading-6">{proyecto.resumen}</p>
					</section>
					{/* Aqui va las Tecnologias, Desafios y Entregables */}
					<section className="w-[90%] h-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 z-40">
						<CardProjectDetail title={"Herramientas de Desarrollo"} list={proyecto.tecnology} />
						<CardProjectDetail title={"Desafíos"} list={proyecto.challenge} />
						<CardProjectDetail title={"Resuelto con"} list={proyecto.goals} />
					</section>
					<div className="w-[90%] flex flex-wrap justify-center space-x-8 z-40 text-xs sm:text-sm">
						{proyecto.repositoryBackEnd && (
							<button
								type="button"
								onClick={() => window.open(proyecto.repositoryBackEnd, "_blank")}
								className={`inline-flex items-center z-40 px-2.5 py-2 rounded-lg bg-white hover:bg-black hover:scale-110 focus:ring focus:ring-offset-1 focus:ring-gray-400 text-black hover:text-white hover:text-shadow-lg/10 hover:text-shadow-white mb-6`}
							>
								Ver Repositorio .Net
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									className="w-5 h-5 bi bi-github ms-2.5"
									viewBox="0 0 16 16"
								>
									<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
								</svg>
							</button>
						)}
						{proyecto.repositoryFrontEnd && (
							<button
								type="button"
								onClick={() => window.open(proyecto.repositoryFrontEnd, "_blank")}
								className={`inline-flex items-center z-40 px-2.5 py-2 rounded-lg bg-white hover:bg-black hover:scale-110 focus:ring focus:ring-offset-1 focus:ring-gray-400 text-black hover:text-white hover:text-shadow-lg/10 hover:text-shadow-white mb-6`}
							>
								Ver Repositorio React
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									className="w-5 h-5 bi bi-github ms-2.5"
									viewBox="0 0 16 16"
								>
									<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
								</svg>
							</button>
						)}
						
						<button
							type="button"
							onClick={() => window.open(proyecto.link, "_blank")}
							className="inline-flex items-center z-40 px-2.5 py-2 rounded-lg bg-green-500 hover:bg-green-600 hover:scale-110 focus:ring focus:ring-offset-1 focus:ring-gray-400 text-black hover:text-white hover:text-shadow-lg/30 hover:text-shadow-black mb-6"
						>
							Ir a la demo
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								className="w-5 h-5 bi bi-arrow-right ms-2.5"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
								/>
							</svg>
						</button>
					</div>
				</>
			)}
		</div>
	);
};
