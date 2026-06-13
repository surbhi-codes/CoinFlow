const baseURL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";

const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const resultDiv = document.getElementById("resultText");

convertBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = amountInput.value;

  const from = fromSelect.value.toLowerCase();
  const to = toSelect.value.toLowerCase();

  if (amount === "" || amount <= 0) {
    resultDiv.innerHTML = "Please enter a valid amount!";
    return;
  }

  resultDiv.innerHTML = "Loading...";

  fetch(baseURL + from + ".json")
    .then((res) => res.json())
    .then((data) => {
      const rate = data[from][to];
      const final = amount * rate;

      resultDiv.innerHTML = `${amount} ${from.toUpperCase()} = ${final.toFixed(
        6
      )} ${to.toUpperCase()}`;
    })
    .catch((err) => {
      resultDiv.innerHTML = "Something went wrong!";
      console.log(err);
    });
});
