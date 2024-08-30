const apiKey = import.meta.env.VITE_API_KEY; //comes from .env file
const apiURL = import.meta.env.VITE_API_URL;


export const fetchData = async () => { //function from RapidAPI
	// console.log(apiKey);
	// console.log(apiURL);
	const url = apiURL; 
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': apiKey,
			'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		console.error(error);
		return null;
	}
}
