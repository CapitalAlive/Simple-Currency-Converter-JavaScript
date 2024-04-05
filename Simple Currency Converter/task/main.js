const input = require('sync-input');

const currencyRates = {USD: 1.0, JPY: 113.5, EUR: 0.89, RUB: 74.36, GBP: 0.75}

function displayRates(rates) {
    for (const [key, value] of Object.entries(rates)) {
        console.log(`1 USD equals ${value} ${key}`)
    }
}

function checkAmountInput(input) {
    if(String(input) === "NaN") {
        console.log("The amount has to be a number\n");
        return false
    } else if (input < 1) {
        console.log("The amount cannot be less than 1\n")
        return false
    }
    return true
}

function checkCurrencyInput(input) {
    if(currencyRates[input] === undefined) {
        console.log("Unknown currency\n\n");
        return false
    }
    return true
}

function calculateConversion(from, to, quantity) {
    return ((quantity * currencyRates[to]) / currencyRates[from]).toFixed(4)
}

function runCurrencyConverter() {
    console.log(`Welcome to Currency Converter!`)
    displayRates(currencyRates)
    while (true) {
    console.log("What do you want to do?")
    let menu = Number(input("1-Convert currencies 2-Exit program\n"))
    if (menu === 2) {console.log("Have a nice day!"); return} else if (menu === 1){} else {console.log("Unknown input"); continue}
    console.log(`What do you want to convert?`)
    let convertFrom = input("From: ").toUpperCase()
    if (checkCurrencyInput(convertFrom) === false) {continue}
    let convertTo = input("To: ").toUpperCase()
    if (checkCurrencyInput(convertTo) === false) {continue}
    let amount = Number(input("Amount: "))
    if (checkAmountInput(amount) === false) {continue}
    let conversionResult = calculateConversion(convertFrom, convertTo, amount)
    console.log(`Result: ${amount} ${convertFrom} equals ${conversionResult} ${convertTo}`)
    }

}

runCurrencyConverter()