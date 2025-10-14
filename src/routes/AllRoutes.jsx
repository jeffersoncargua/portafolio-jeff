import { Route, Routes } from "react-router-dom";
import { Contact, Home, PageNotFound, ProjectDetail, Projects, Skills } from "../pages";

export const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/projectsDetail/:id" element={<ProjectDetail />} />
			<Route path="/skills" element={<Skills />} />
			<Route path="/*" element={<PageNotFound />} />
		</Routes>
	);
};
