// Librerias necesarias para utilizar el fondo de pantalla con particulas
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
// Librerias necesarias para utilizar AOS que permite realizar efectos de scroll cuando
// se nevega por la la ventana del sitio web. Nota: se recomienda revisar el sitio oficial https://github.com/michalsnik/aos
import Aos from "aos";
import { useEffect, useMemo, useState } from "react";
import { Header } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import "../node_modules/aos/dist/aos.css";

import "./App.css";

function App() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	useEffect(() => {
		Aos.init({
			disable: false,
			startEvent: "DOMContentLoaded",
			initClassName: "aos-init",
			animatedClassName: "aos-animate",
			useClassNames: false,
			disableMutationObserver: false,
			debounceDelay: 50,
			throttleDelay: 99,
		});
		Aos.refresh();
	}, []);

	const particlesLoaded = (container) => {
		console.log(container);
	};

	const options = useMemo(
		() => ({
			background: {
				color: {
					value: "#418af9",
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: "#ffffff",
				},
				links: {
					color: "#ffffff",
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: {
						default: "bounce",
					},
					random: false,
					speed: 6,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 80,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[],
	);

	return (
		//<main className="App container bg-linear-to-t from-sky-500 to-indigo-500">
		<main className="App container">
			{init && (
				<Particles
					id="tsparticles"
					particlesLoaded={particlesLoaded}
					options={options}
				/>
			)}
			<Header />
			<AllRoutes />
		</main>
	);
}

export default App;

/**
 * Para utilizar tsParticules se debe revisar la documentacion de https://github.com/tsparticles/react, donde se detalla
 * el proceso que se debe seguir e instalar las dependencias necesarias para que el efecto de las particulas funcione
 * correctamente
 *
 * También se recomienda trabajar con z-index para que los objetos queden visibles y no se pongan por detras del efecto de
 * las particulas
 */
