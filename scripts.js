const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const dolar = 5.2;
const euro = 5.9;
const bitCoin = 0.0000060; 


const convertValues = () => {
    const inputValue = document.getElementById("input-real").value;
    const realValueText = document.getElementById("real-value-text");
    const currencyValueText = document.getElementById("currency-value-text");

    if(inputValue < 0){
        alert("Escolha um número positivo");
        return
    }

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "BRL"
    }).format(inputValue);

    if (select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputValue / dolar);
    }
    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputValue / euro);
    }
    if (select.value === "BitCoin") {
        currencyValueText.innerHTML = (inputValue * bitCoin);
    }

}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.getElementById("currency-img");

    if (select.value === "US$ Dólar americano") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/eua.png"
    }
    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    if (select.value === "BitCoin") {
        currencyName.innerHTML = "BitCoin"
        currencyImg.src = "./assets/bitcoin.png"
    }
    convertValues();
}

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);