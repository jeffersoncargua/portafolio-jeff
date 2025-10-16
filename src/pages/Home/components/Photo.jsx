import ReactFlipCard from "reactjs-flip-card";
import Photography from "../../../../src/assets/JeffCarguaCV.png";
import Logo from "../../../assets/LogoSinFondoJeffCargua.png";

export const Photo = () => {
	return (
		<div className="z-20 w-full h-full md:w-1/3 md:flex-1 flex justify-center items-center">
			<ReactFlipCard
				containerStyle={{ width: "100%", height: "100%"}}
				flipTrigger="onHover"
				direction="horizontal"
				frontComponent={
					<div className="mx-auto flex-1 flex justify-center items-center w-48 h-48 md:w-72 md:h-72 bg-cyan-600 md:bg-cyan-200/20 rounded-full inset-shadow-sm inset-shadow-amber-50 shadow-md shadow-amber-50">
						<img
							className="flex-1 mask-b-from-95% mask-b-to-95% mask-x-from-70% mask-x-to-90% object-cover md:mb-2"
							src={Photography}
							alt="not found"
						/>
					</div>
				}
				backComponent={
					<div className="mx-auto flex-1 overflow-hidden flex items-center bg-gray-800 w-48 h-48 md:w-72 md:h-72 rounded-full border-2 border-amber-50 shadow-md shadow-amber-50">
						<img className="contrast-200 flex-1" src={Logo} alt="not found" />
					</div>
				}
			/>
		</div>
	);
};
