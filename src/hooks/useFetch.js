export const useFetch = async () => {
	var result = await fetch("/src/data/projects.json")
		.then((response) => response)
		.then((result) => result.json())
		.catch((_error) => null);
	return result;
};
