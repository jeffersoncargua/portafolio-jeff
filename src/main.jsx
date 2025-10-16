import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ToastContainer as Toaster } from "react-toastify";
import App from "./App.jsx";
import "../node_modules/react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Toaster
			position="bottom-right"
			autoClose={1000}
			hideProgressBar
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="colored"
		/>
		<Router>
			<App />
		</Router>
	</StrictMode>,
);
