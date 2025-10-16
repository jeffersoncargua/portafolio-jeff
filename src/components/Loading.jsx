import Logo from "../assets/LogoSinFondoJeffCargua.png";

export const Loading = () => {
	return (
		<div className="absolute top-0 left-0 w-full min-h-full bg-black/60 flex items-center justify-center">
			<div className="z-40">
				<img
					src={Logo}
					alt="Aqui va el Logo"
					className="w-[60%] md:w-[80%] mx-auto"
				/>
				<div className="flex items-end justify-center space-x-3">
					<span className="text-white text-lg md:text-xl font-bold animate-pulse">
						Espere, mientras se cargan los recursos{" "}
					</span>
					<span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-amber-50 transition delay-100 duration-100 animate-bounce"></span>
					<span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-amber-50 transition delay-200 duration-100 animate-bounce"></span>
					<span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-amber-50 transition delay-300 duration-100 animate-bounce"></span>
					<span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-amber-50 transition delay-500 duration-100 animate-bounce"></span>
				</div>
			</div>
		</div>
	);
};
