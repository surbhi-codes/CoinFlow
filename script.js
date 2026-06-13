const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const resultText = document.getElementById("resultText");
const convertBtn = document.getElementById("convertBtn");

const apiURL = "https://open.er-api.com/v6/latest/";

async function getExchangeRate() {
    let amountValue = amountInput.value;
    
    if (amountValue == "" || amountValue <= 0) {
        amountValue = 1;
        amountInput.value = 1;
    }

    resultText.innerText = "Fetching live rates...";

    let fullLink = apiURL + fromCurrency.value;

    try {
        let response = await fetch(fullLink);
        let data = await response.json();


        let rate = data.rates[toCurrency.value];
        

        let finalResult = (amountValue * rate).toFixed(2);


        resultText.innerText = amountValue + " " + fromCurrency.value + " = " + finalResult + " " + toCurrency.value;
        
    } catch (error) {
        resultText.innerText = "Something went wrong. Try again!";
    }
}


convertBtn.addEventListener("click", function(e) {
    e.preventDefault(); 
    getExchangeRate();
});


window.addEventListener("load", function() {
    getExchangeRate();
});