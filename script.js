function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
    let exchangeRate;

    // Exchange rates for conversion to PKR
    switch (currency) {
        case 'usd':
            exchangeRate = 277; // Example rate (1 USD = 277 PKR)
            break;
        case 'eur':
            exchangeRate = 300; // Example rate (1 EUR = 300 PKR)
            break;
        case 'gbp':
            exchangeRate = 350; // Example rate (1 GBP = 350 PKR)
            break;
        case 'inr':
            exchangeRate = 3.5;  // Example rate (1 INR = 3.5 PKR)
            break;
        case 'cny':
            exchangeRate = 40; // Example rate (1 CNY = 40 PKR)
            break;
        default:
            alert('Invalid currency selected');
            return;
    }

    const result = amount * exchangeRate;
    document.getElementById('result').textContent = `${amount} ${currency.toUpperCase()} = ${result.toFixed(2)} PKR`;
}
