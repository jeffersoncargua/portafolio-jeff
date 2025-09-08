import { Route, Routes } from "react-router-dom";
import { Contact, Home, Projects, Skills } from "../pages";

export const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/skills" element={<Skills />} />
		</Routes>
	);
};
