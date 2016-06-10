'use strict'

var combinations = [];

function waysToMakeMoney(amount, denominations, combo) {	
	if (amount === 1) {
		combinations.push(combo + '1');
		return '1';
	} else {
		for (var i=0; i<denominations.length; i++) {
			if (amount - denominations[i] === 0) {
				combinations.push(combo + denominations[i]);
			} else if (amount - denominations[i] > 0) {
				waysToMakeMoney(amount - denominations[i], denominations, combo + denominations[i] + ',');
			}
		}
	}
}

waysToMakeMoney(4, [1,2,3,4], '');
console.log(combinations);