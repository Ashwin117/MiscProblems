'use strict';

/*
Suppose we had an array ↴ of nn integers in sorted order. How quickly could we check if a given integer is in the array?
*/

function isInArray(givenArray, value) {
	var lowBound = 0;
	var upBound = givenArray.length;
	if (givenArray[0] === value || givenArray[givenArray.length-1] === value) {
		return true;
	}

	while(upBound - lowBound > 1) {
		var selectedVal = givenArray[Math.ceil((upBound - lowBound)/2)];
		if (selectedVal === value) {
			return true;
		} else if (selectedVal > value) {
			upBound = givenArray.indexOf(selectedVal);
		} else {
			lowBound = givenArray.indexOf(selectedVal);
		}
	}
	return false;
}

console.log(isInArray([2, 53, 78, 79, 80], 80));
