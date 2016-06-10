'use strict';
'use strict'

/*
You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.
*/

var occurances = [];
var totalTemps = 0;
var max;
var min;
var mean;
var mode;

function insert(newTemp) {	
	if(!mode) {
		mode = newTemp;
		occurances[mode] = 1;
	} else {
		if (occurances[newTemp]) {
			occurances[newTemp]++;
		} else {
			occurances[newTemp] = 1;
		}
		if (occurances[newTemp] > occurances[mode]) {
			mode = newTemp;
		}
	}
	totalTemps++;

	if (!max) {
		max = newTemp;
	} else {
		max = Math.max(max, newTemp);
	}

	if (!min) {
		min = newTemp;
	} else {
		min = Math.min(min, newTemp);
	}

	if (!mean) {
		mean = newTemp;
	} else {
		mean = (parseInt(mean*(totalTemps-1)) + parseInt(newTemp)) / totalTemps;
	}
}

function getMax() {
	return max;
}

function getMin() {
	return min;
}

function getMean() {
	return mean;
}

function getMode() {
	return mode;
}

insert('101');
insert('50');
insert('23');
insert('50');
insert('23');
insert('23');
insert('28');

console.log(getMax());
console.log(getMean());
console.log(getMin());
console.log(getMode());

console.log(occurances);
