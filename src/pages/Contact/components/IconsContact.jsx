import copy from "copy-to-clipboard";
import { useCallback, useRef, useState } from "react";
// Librerias necesarias para activar el toast y copiar texto de un elemento html(input) paa este caso
import { toast } from "react-toastify";
import { Tooltip as ReactToolTip } from "react-tooltip";
import Whatasapp from "../../../assets/WhatsappQR.png";

export const IconsContact = ({ iconType, color = "" }) => {
	const [isClick, setIsClick] = useState(false);
	const textRef = useRef();
	//transition delay-300 duration-700 easi-in-out ${!isClick ? "md:hover:animate-bounce" : "animate-none"}
	const icons = {
		facebook: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				className={`bi bi-facebook w-12 h-12 md:w-16 md:h-16 ${color} rounded-full bg-amber-50 `}
				viewBox="0 0 16 16"
			>
				<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
			</svg>
		),
		linkedin: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				className={`w-12 h-12 md:w-16 md:h-16 bi bi-linkedin ${color} rounded-lg bg-amber-50 `}
				viewBox="0 0 16 16"
			>
				<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
			</svg>
		),
		gmail: (
			<svg
				viewBox="0 0 24 24"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				className={`w-12 h-12 md:w-16 md:h-16 ${color} `}
			>
				<path
					d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
					fill="#EA4335"
				/>
			</svg>
		),
		whatsapp: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				className={`w-12 h-12 md:w-16 md:h-16 bi bi-whatsapp  ${color} `}
				viewBox="0 0 16 16"
			>
				<path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
			</svg>
		),
	};

	const messageToolTip = {
		facebook:
			"Haz clic en el icono para direccionarte a mi perfil de Facebook.",
		gmail: "Haz clic en el icono para copiar mi correo electrónico.",
		linkedin:
			"Haz clic en el icono para direccionarte a mi perfil de Linkedin.",
		whatsapp: "Haz clic en el icono para direccionarte a WhatsApp Web.",
	};

	//Mensajes que se muestran cuando son pantallas pequeñas
	const messageToolTipSmall = {
		facebook:
			"Presiona el botón para direccionarte a mi perfil de Facebook.",
		gmail: "Presiona el botón para copiar mi correo electrónico.",
		linkedin:
			"Presiona el botón para direccionarte a mi perfil de Linkedin.",
		whatsapp: "Presiona el botón para direccionarte a mi WhatsApp.",
	};

	const url = {
		facebook: "https://www.facebook.com/jeff.cargua/",
		gmail: "jeffersoncargua@gmail.com",
		linkedin: "https://www.linkedin.com/in/jefferson-cargua-medina/",
		whatsapp: "https://wa.me/593992649161",
	};

	//HandleCopy es la funcion que permite copiar el texto del correo electronico del input con ref
	const HandleCopy = useCallback(() => {
		const copyText = textRef.current.value;
		const isCopy = copy(copyText);
		if (isCopy) {
			toast.success("Se copió el correo electrónico");
		}
	}, []);

	// HandleClick permite cambiar el estado del boton para que se pueda leer el mensaje de entrada o se
	// pueda leer el mensaje luego de dar clic para realizar otra operacion. Tambien, una vez que se active
	// el boton este podra redireccionar a la pagina segun corresponda al icono que presione el usuario
	const HandleClick = useCallback(() => {
		if (isClick) {
			iconType !== "gmail" && window.open(url[iconType], "_blanck");
			iconType === "gmail" && HandleCopy();
			setIsClick(!isClick);
		} else {
			setIsClick(!isClick);
		}
	}, [isClick, iconType, HandleCopy]);

	return (
		<div className="z-50 group">
			{/* Esta boton es para pantallas grandes hasta el punto de ruptura en md */}
			<button
				type="button"
				onMouseLeave={() => setIsClick(false)}
				onClick={() => HandleClick()}
				data-tooltip-id={iconType}
				className={`w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-full hidden md:flex justify-center items-center bg-amber-50/70 border-2 border-amber-100 transition delay-300 duration-700 easi-in-out ${!isClick ? "md:group-hover:animate-bounce" : "md:animate-none"} `}
			>
				{/*En este apartado se muestra el icono de las redes de contacto */}
				{icons[iconType] && icons[iconType]}
			</button>
			{/* Esta boton es para pantallas pequeñas */}
			<button
				type="button"
				onClick={() => HandleClick()}
				data-tooltip-id={iconType}
				className={`w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-full flex md:hidden justify-center items-center bg-amber-50/70 border-2 border-amber-100 transition delay-300 duration-700 easi-in-out`}
			>
				{/*En este apartado se muestra el icono de las redes de contacto */}
				{icons[iconType] && icons[iconType]}
			</button>
			{/**Esta seccion es para pantallas grandes */}
			<div className="hidden md:block">
				<ReactToolTip
					id={`${iconType}`}
					place="top"
					style={{ backgroundColor: "rgba(171, 247, 244, 0.7)", color: "#222" }}
				>
					{!isClick ? (
						<span className="hidden md:block">
							Haz clic para detener el icono
						</span>
					) : (
						`${messageToolTip[iconType]}`
					)}
					{iconType === "whatsapp" && isClick && (
						<img
							src={Whatasapp}
							alt=""
							className="hidden md:block w-36 h-44 mx-auto mt-2 rounded-md"
						/>
					)}
					{iconType === "gmail" && isClick && (
						<input
							type="text"
							name="gmail"
							ref={textRef}
							value={url.gmail}
							disabled
							hidden
						/>
					)}
				</ReactToolTip>
			</div>
			{/**Esta seccion es para pantallas pequeñas */}
			<div className="block md:hidden">
				<ReactToolTip
					id={`${iconType}`}
					place="top"
					style={{ backgroundColor: "rgba(171, 247, 244, 0.7)", color: "#222" }}
				>
					<span className="flex w-32 p-2 text-justify">
						{messageToolTipSmall[iconType]}
					</span>
					{iconType === "gmail" && isClick && (
						<input
							type="text"
							name="gmail"
							ref={textRef}
							value={url.gmail}
							disabled
							hidden
						/>
					)}
				</ReactToolTip>
			</div>
		</div>
	);
};

/**
 * Nota importante: para resolver los saltos infinitos con la animacion: animate-bounce, se debe emplear el 'group'
 * para que el elemento padre pueda controlar los efectos o animaciones de los elementos hijos, en este caso los iconos
 * de las redes sociales que se estan implementtando
 */
