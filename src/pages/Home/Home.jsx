import TypewriterComponent from 'typewriter-effect';
import { Information, Photo } from "./components";

export const Home = () => {
	return (
		<div className="w-[90%] flex flex-col justify-center items-center gap-y-2 md:gap-y-10 min-h-full mx-auto md:mt-10">
			<div className="my-10" >
				<label className='text-2xl md:text-5xl font-bold text-center'>
					<TypewriterComponent
						options={
							{
								autoStart: true,
								loop: true,
								strings: [`Bienvenido a mi página personal`,`Entérate de mis habilidades`,`Explora mis proyectos`,`Conoce más sobre mi`],
								cursor: '',
								delay: 100,
							}
						} 	
					/>
				</label>
			</div>
			<div className='w-full realtive flex flex-wrap md:flex-nowrap justify-center items-center mx-auto mb-10'>
				<Photo />
				<Information />
			</div>
		</div>
	);
};
