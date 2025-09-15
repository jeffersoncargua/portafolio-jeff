import { IconsContact } from "./components";

export const Contact = () => {
	return (
		<div className="w-[90%] mx-auto flex flex-col justify-center items-center min-h-screen md:mt-10">
			<div className="z-20 flex my-auto">
				<h2 className="text-center font-semibold text-2xl md:text-5xl text-blue-100 text-shadow-2xs text-shadow-black">Puedes contactarte conmigo en:</h2>
			</div>
			<div className="w-full my-auto grid grid-cols-2 md:grid-cols-4 gap-y-32 justify-items-center">
				<IconsContact iconType={"facebook"} color={"text-blue-600"} />
				<IconsContact iconType={"linkedin"} color={"text-blue-800"} />
				<IconsContact iconType={"whatsapp"} color={"text-green-800"} />
				<IconsContact iconType={"gmail"} />
			</div>
		</div>
	);
};
