document.getElementById('convertBtn').addEventListener('click', function() {
    const currency = document.getElementById('currency').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(amount) || amount <= 0) {
        resultDiv.innerText = "Please enter a valid amount.";
        resultDiv.style.color = "red";
        return;
    }

    let exchangeRate;

    // Static exchange rates
    switch (currency) {
        case 'usd':
            exchangeRate = 280; // 1 USD = 280 PKR
            break;
        case 'eur':
            exchangeRate = 300; // 1 EUR = 300 PKR
            break;
        case 'gbp':
            exchangeRate = 350; // 1 GBP = 350 PKR
            break;
        default:
            exchangeRate = 0;
    }

    const convertedAmount = amount * exchangeRate;
    resultDiv.innerText = `Converted Amount: PKR ${convertedAmount.toFixed(2)}`;
    resultDiv.style.color = "#1E88E5";
});
