import { useCallback, useEffect, useState } from "react";
import { Loading } from "../../components";
import { useFetch } from "../../hooks/useFetch";
import { SectionProject } from "./components";

export const Projects = () => {
	const [projectsReactNet, setProjectsReactNet] = useState([]);
	const [projectsReact, setProjectsReact] = useState([]);
	const [loading, setLoading] = useState(true);

	const FetchData = useCallback(async () => {
		//setLoading(true);
		const result = await useFetch();
		if (result !== null) {
			setProjectsReactNet(result.slice(0, 2));
			setProjectsReact(result.slice(2));
		}
		//setLoading(false);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2500);
		FetchData();
	}, [FetchData]);

	return (
		<div className="w-full min-h-full flex flex-col items-center mb-20 space-y-10">
			{loading ? (
				<Loading />
			) : (
				<>
					<SectionProject
						titleSection={"React + .Net 8"}
						projects={projectsReactNet}
					/>
					<SectionProject titleSection={"React"} projects={projectsReact} />
				</>
			)}
		</div>
	);
};
