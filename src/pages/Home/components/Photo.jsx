import Photography from "../../../../src/assets/JeffCarguaCV.png";

export const Photo = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="flex justify-center items-center w-48 h-48 md:w-72 md:h-72 bg-cyan-200/20 rounded-full inset-shadow-sm inset-shadow-amber-50 shadow-md shadow-amber-50">
				<img className="mask-b-from-75% mask-b-to-95% mask-y-from-80% mask-y-to-90% mask-x-from-70% mask-x-to-90% w-48 h-32 md:w-72 md:h-56 p-5 mb-2 md:mb-7" src={Photography} alt="not found" />
			</div>
		</div>
	);
};
