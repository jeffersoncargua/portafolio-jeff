import { Header } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

import "./App.css";

function App() {
	return (
		<main className="App container bg-linear-to-t from-sky-500 to-indigo-500">
			<Header />
			<AllRoutes />
		</main>
	);
}

export default App;
