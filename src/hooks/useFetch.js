export const useFetch = async () => {
	// var result = await fetch("/src/data/projects.json") // https://69670e00bbe157c088b0be54.mockapi.io/proyectos/projects
	var result = await fetch("https://69670e00bbe157c088b0be54.mockapi.io/proyectos/projects")
		.then((response) => response)
		.then((result) => result.json())
		.catch((_error) => null);
	return result;
};

// Se coloco la api fake en: https://mockapi.io/projects/69670e00bbe157c088b0be55