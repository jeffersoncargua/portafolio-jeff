import { useNavigate } from "react-router-dom";
import ReactFlipCard from "reactjs-flip-card";

import "../style/BorderAnimation.css";
import { useCallback } from "react";

export const CardProject = ({ item }) => {
	const navigate = useNavigate();

	const HandleClick = useCallback(
		(item) => {
			navigate(`/projectsDetail/${item.id}`);
		},
		[navigate],
	);

	return (
		<div className="w-[80%] md:w-[90%] lg:w-[90%] mb-8 group ">
			<ReactFlipCard
				containerStyle={{ width: "100%", height: "100%" }}
				flipTrigger="onClick"
				direction="horizontal"
				frontComponent={
					<div className="w-full bg-slate-50/70 rounded-lg transition delay-300 duration-500 group-hover:scale-105 hover:cursor-pointer shadow-lg/30 shadow-white border border-gray-950">
						<div className="w-full mx-auto flex flex-col items-center space-y-2">
							<img
								src={item.image}
								//C:\Users\Juan Medina\Desktop\Portafolio\portafolio-jeff\src\assets\Portada Calendario.png
								alt={item.title}
								className="w-full grayscale rounded-t-lg object-contain border-b"
							/>
							<div className="text-center my-2 space-y-3">
								<h3 className="w-[90%] mx-auto text-wrap font-semibold">
									{item.title}
								</h3>
								<p className=" w-[90%] mx-auto text-sm text-gray-900 italic text-justify leading-6">
									{item.description}
								</p>
							</div>
						</div>
					</div>
				}
				backComponent={
					<div className="border-animation w-full h-full transition delay-300 duration-500 group-hover:scale-110">
						<div className="w-[98%] h-[98%] mx-auto bg-slate-50 rounded-lg flex flex-col items-center space-y-2">
							<img
								src={item.image}
								alt={item.title}
								className="w-full rounded-t-lg border-b"
							/>
							<div className="text-center my-2 font-semibold text-gray-900">
								<span>{item.title}</span>
							</div>
							<button
								onClick={() => HandleClick(item)}
								type="button"
								className="w-full flex justify-end my-2 me-10 space-x-2 font-bold text-purple-900 hover:underline hover:underline-offset-2"
							>
								Ver Detalles
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									className="w-5 h-5 bi bi-box-arrow-up-right ms-2.5 hover:scale-120"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
									/>
									<path
										fillRule="evenodd"
										d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
									/>
								</svg>
							</button>
						</div>
					</div>
				}
			/>
		</div>
	);
};
