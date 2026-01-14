export const useFetch = async () => {
	// var result = await fetch("/src/data/projects.json")
	var result = await fetch("/public/data/projects.json")
		.then((response) => response)
		.then((result) => result.json())
		.catch((_error) => null);
	return result;
};
