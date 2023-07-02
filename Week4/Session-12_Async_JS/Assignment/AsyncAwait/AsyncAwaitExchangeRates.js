async function getExchangeRate(currencyCode) {
  // Your code here
  try {
    // API endpoint URL
    let apiUrl = "https://api.exchangerate.host/latest";

    // Fetch data from the API
    let response = await fetch(apiUrl);

    // Parse the response as JSON
    let data = await response.json();
    const Rate = data.rates[currencyCode];

    // Handle the data
    if (!Rate) {
      return null;
    } else return Number(Rate.toFixed(4));
  } catch (error) {
    // Handle any errors
    console.error("Error:", error);
  }
}

getExchangeRate("USD")
  .then((rate) => {
    console.log(rate); // Output: 1.0963
  })
  .catch((error) => {
    console.error(error);
  });
