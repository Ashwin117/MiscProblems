/*
Writing programming interview questions hasn't made me rich. Maybe trading Apple stocks will.
Suppose we could access yesterday's stock prices as an array, where:

The indices are the time in minutes past trade opening time, which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.
So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

Write an efficient function that takes stockPricesYesterday and returns the best profit 
I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
*/

function getMaxProfit (stockPricesYesterday) {
	var maxProfit = 0;
	var minPrice = stockPricesYesterday[0];
	var noTrade = true;

	for (var i=1; i<stockPricesYesterday.length; i++) {

		minPrice = Math.min(minPrice, stockPricesYesterday[i]);

		if (stockPricesYesterday[i] - minPrice > maxProfit) {
			noTrade = false;
			maxProfit = stockPricesYesterday[i] - minPrice;
		}
	}

	if (noTrade) {
		return 'Do not buy';
	}
	return maxProfit;
}

console.log(getMaxProfit([100, 120, 50, 60]));