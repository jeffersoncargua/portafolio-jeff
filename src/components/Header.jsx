import { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/Header.css";

export const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="w-[90%] relative container mx-auto md:p-5 md:mb-20">
			<nav className="bg-transparent dark:bg-gray-900 md:absolute w-full z-20 top-0 start-0">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
					<div className="flex w-full justify-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
						<div className="w-full flex justify-center" id="button-menu">
							<button
								data-collapse-toggle="navbar-sticky"
								type="button"
								onClick={() => setShowMenu(!showMenu)}
								className="relative button-menu overflow-hidden inline-flex items-center p-2 w-[50%] h-10 justify-center border border-white shadow-md shadow-purple-300 rounded-lg text-sm bg-cyan-400/40 hover:bg-cyan-600/40 md:hidden dark:text-gray-400 dark:hover:bg-gray-700"
								aria-controls="navbar-sticky"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!showMenu ? (
									<svg
										className="w-5 h-5 text-black"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 17 14"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M1 1h15M1 7h15M1 13h15"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										fill="currentColor"
										className="w-5 h-5 bi bi-x-lg transition hover:delay-150 hover:duration-150 hover:rotate-180 "
										viewBox="0 0 16 16"
									>
										<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
									</svg>
								)}
							</button>
						</div>
					</div>
					<div
						className={`items-center justify-between ${!showMenu && "hidden"} w-full md:flex md:w-auto md:order-1`}
						id="navbar-sticky"
					>
						<ul className="max-md:space-y-3 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50/30 text-sm md:text-lg md:text-shadow-lg md:font-semibold text-center md:space-x-24 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li className="max-md:transition max-md:hover:delay-50 max-md:hover:duration-300 max-md:hover:underline max-md:hover:decoration-4 max-md:hover:underline-offset-4 max-md:rounded-lg max-md:bg-green-600/50 max-md:hover:bg-green-700/50 md:hover:scale-125 md:transition md:delay-100 md:duration-200 md:ease-in-out md:hover:shadow md:hover:shadow-gray-900 md:rounded-lg">
								<Link
									to="/"
									onClick={() => setShowMenu(!showMenu)}
									className="block py-2 px-3 text-gray-900 bg-transparent md:px-4 md:py-3 dark:text-white dark:hover:text-white"
									viewTransition
								>
									Sobre mi
								</Link>
							</li>
							<li className="max-md:transition max-md:hover:delay-50 max-md:hover:duration-300 max-md:hover:underline max-md:hover:decoration-4 max-md:hover:underline-offset-4 max-md:rounded-lg max-md:bg-green-600/50 max-md:hover:bg-green-700/50 md:hover:scale-125 md:transition md:delay-100 md:duration-200 md:ease-in-out md:hover:shadow md:hover:shadow-gray-900 md:rounded-lg">
								<Link
									to="/skills"
									onClick={() => setShowMenu(!showMenu)}
									className="block py-2 px-3 text-gray-900 bg-transparent md:px-4 md:py-3 dark:text-white dark:hover:text-white"
									viewTransition
								>
									Mis Habilidades
								</Link>
							</li>
							<li className="max-md:transition max-md:hover:delay-50 max-md:hover:duration-300 max-md:hover:underline max-md:hover:decoration-4 max-md:hover:underline-offset-4 max-md:rounded-lg max-md:bg-green-600/50 max-md:hover:bg-green-700/50 md:hover:scale-125 md:transition md:delay-100 md:duration-200 md:ease-in-out md:hover:shadow md:hover:shadow-gray-900 md:rounded-lg">
								<Link
									to="/projects"
									onClick={() => setShowMenu(!showMenu)}
									className="block py-2 px-3 text-gray-900 bg-transparent md:px-4 md:py-3 dark:text-white dark:hover:text-white"
									viewTransition
								>
									Mis Proyectos
								</Link>
							</li>
							<li className="max-md:transition max-md:hover:delay-50 max-md:hover:duration-300 max-md:hover:underline max-md:hover:decoration-4 max-md:hover:underline-offset-4 max-md:rounded-lg max-md:bg-green-600/50 max-md:hover:bg-green-700/50 md:hover:scale-125 md:transition md:delay-100 md:duration-200 md:ease-in-out md:hover:shadow md:hover:shadow-gray-900 md:rounded-lg">
								<Link
									to="/contact"
									onClick={() => setShowMenu(!showMenu)}
									className="block py-2 px-3 text-gray-900 bg-transparent md:px-4 md:py-3 dark:text-white dark:hover:text-white"
									viewTransition
								>
									Contacto
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
