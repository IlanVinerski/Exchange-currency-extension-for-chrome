
document.addEventListener('DOMContentLoaded',function() {

const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const convert = document.getElementById("convert");
const result = document.getElementById("result");

const API_KEY = "EarDvdRf99OIB0nQVcloiw==AEVG7ObOt6H3ltLg";
const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_";

convert.addEventListener("click", () => {
  const amountTotal = amount.value;
  const currencyTotoal = currency.value;
  const url = apiUrl + currencyTotoal;

  fetch(url, {
    headers: {
        "X-Api-Key" : API_KEY
    }
  })
    .then((response) => response.json())
    .then((data) => {
      const rate = data.exchange_rate;
      const resultPrice = amountTotal * rate;
      result.innerHTML = `${amountTotal} USD = ${resultPrice.toFixed(2)} ${currencyTotoal}`;
    })

    .catch((error) => {
      console.error("Request failed", error);
      result.innerHTML = "An error occurred please try again later.";
    });
});

})