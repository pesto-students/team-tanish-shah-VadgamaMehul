// console.log(process.env.REACT_APP_RAPID_API_KEY);

export const url = 'https://hapi-books.p.rapidapi.com/nominees/romance/2020';
export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
	}
};

export const fetchdata = async(url,options) => {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
}

// fetchdata(url,options);
// console.log(...data);

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }