export const CardProjectDetail = ({ title, list }) => {
	var svgIcon;

	switch (title) {
		case "Herramientas de Desarrollo":
			svgIcon = (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					className="sm:w-5 sm:h-5 w-3 h-3 bi bi-gear-fill text-gray-500 me-2.5 flex-none"
					viewBox="0 0 16 16"
				>
					<path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
				</svg>
			);
			break;

		case "Desafíos":
			svgIcon = (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					className="sm:w-5 sm:h-5 w-3 h-3 bi bi-award-fill text-yellow-300 me-2.5 flex-none"
					viewBox="0 0 16 16"
				>
					<path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
					<path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
				</svg>
			);
			break;

		case "Resuelto con":
			svgIcon = (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					className="sm:w-5 sm:h-5 w-3 h-3 bi bi-check2-circle text-green-700 me-2.5 flex-none"
					viewBox="0 0 16 16"
				>
					<path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
					<path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
				</svg>
			);
			break;
	}

	return (
		// <div className="w-[80%] md:w-[45%] lg:w-[30%] mx-auto border border-gray-900 p-4 rounded-lg bg-slate-50/50 text-xs sm:text-sm">
		<div className={`w-full mx-auto border border-gray-900 p-4 rounded-lg bg-slate-50/50 text-xs sm:text-sm ${title === "Resuelto con" && 'md:col-start-1 md:col-end-3 lg:col-start-3 lg:col-end-4'}`}>
			<h3 className="font-semibold mb-2">{title} :</h3>
			<ul className="flex flex-col space-y-2">
				{list.map((item) => (
					<li key={Math.random()} className="inline-flex items-center text-wrap">
						{svgIcon}
						<span className="">{item}</span>
					</li>
				))}
				
			</ul>
		</div>
	);
};
