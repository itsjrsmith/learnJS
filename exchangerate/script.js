const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


// Fetch exchange rates and update the DOM
function calculate() {
    const currencyOneValue = currencyOne.value;
    const currencyTwoValue = currencyTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOneValue}`)
        .then(res => res.json())
        .then(data => {
           const rate = data.rates[currencyTwoValue];

           rateEl.innerText = `1 ${currencyOneValue} = ${rate} ${currencyTwoValue}`;

           amountTwo.value = (amountOne.value * rate).toFixed(2);
        });
}


// Event listeners
currencyOne.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
currencyTwo.addEventListener('change', calculate);
amountTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
})

calculate();