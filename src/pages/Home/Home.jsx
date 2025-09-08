import { Information, Photo } from "./components";

export const Home = () => {
	return (
		<div className="w-[90%] flex flex-wrap justify-center mx-auto mt-10">
			<Photo />
			<Information />
		</div>
	);
};
