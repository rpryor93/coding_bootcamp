/**
 * Buy Low, Sell High -- Solution
 **/
console.log('called');
// Stock prices
iagStockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];

// Function to find the biggest possible profit in the stock bracket.
// Your Biggest Profit function
var biggestProfit = function (stockArray, sharesBought) {
    var min = stockArray[0];
    var max = stockArray[1] - stockArray[0];
    var maxprice = stockArray[1];
    for (var i = 1; i < stockArray.length; i++) {
        var current = stockArray[i];

        var potential = current - min;

        if (max < potential) {
            max = potential;
            maxprice = current;
        }
        if (min > current && i < stockArray.length-1) {
            min = current;
        }

    }

    document.write("Profit: $" + (max * 10000));
    document.write("Buy price: " + min);
    document.write("Sell price: " + maxprice);
};

// Call the function.
var biggestProfit = biggestProfit(iagStockPrices, 10000);
console.log('biggestProfit', biggestProfit);
document.getElementById('profit').innerHTML = '<h1>Biggest Profit = $' + biggestProfit + '</h1>';