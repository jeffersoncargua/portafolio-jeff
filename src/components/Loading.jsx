import Logo from "../assets/LogoSinFondoJeffCargua.png";

export const Loading = () => {
	return (
		<div className="fixed top-0 left-0 w-full min-h-screen bg-black/60 flex items-center justify-center">
			<div className="z-40">
				<img
					src={Logo}
					alt="Aqui va el Logo"
					className="w-[60%] md:w-[80%] mx-auto"
				/>
				<div className="w-[90%] mx-auto flex flex-col md:flex-row items-end justify-center text-white text-lg md:text-xl font-bold animate-pulse">
					<span className="max-md:w-full w-auto flex flex-row justify-center text-center">
						Espere, mientras se cargan &nbsp;
					</span>
					<span className="max-md:w-full w-auto flex flex-row justify-center text-center items-end space-x-1">
						los recursos &nbsp;
						<span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-amber-50 transition delay-100 duration-100 animate-bounce"></span>
						<span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-amber-50 transition delay-200 duration-100 animate-bounce"></span>
						<span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-amber-50 transition delay-300 duration-100 animate-bounce"></span>
						<span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-amber-50 transition delay-500 duration-100 animate-bounce"></span>
					</span>
				</div>
			</div>
		</div>
	);
};
