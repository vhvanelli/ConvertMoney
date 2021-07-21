const button = document.getElementById("convert-button"); 
const select = document.getElementById("currency-select");

 const dolar = 5.2;


const convertValues = () => {
    const inputValue = document.getElementById("input-real").value;
    const realValueText = document.getElementById("real-value-text");
    const currencyValueText = document.getElementById("currency-value-text");

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency", currency: "BRL"}).format(inputValue)

    currencyValueText.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency", currency: "USD"}).format(inputValue / dolar)

}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name");
    
    if (select.value === "€ Euro"){
        currencyName.innerHTML = "Euro"
    }
}

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);