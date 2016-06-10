/*
Given an arrayOfInts, find the highestProduct you can get from three of the integers.
The input arrayOfInts will always have at least three integers.
*/

function highestPositiveProduct2 (arrayOfInts) {
	if (arrayOfInts.length < 3) {
		return 'Need an array greater than length 3';
	}

	var highestNumberIndex = findHighestNumberIndex(arrayOfInts);
	var highestValue = arrayOfInts[highestNumberIndex];
	arrayOfInts.splice(highestNumberIndex, 1);

	var nextHighestNumberIndex = findHighestNumberIndex(arrayOfInts);
	var nextHighestValue = arrayOfInts[nextHighestNumberIndex];
	arrayOfInts.splice(nextHighestNumberIndex, 1);

	return highestValue * nextHighestValue;
}

function lowestNegativeProduct2 (arrayOfInts) {
	if (arrayOfInts.length < 3) {
		return 'Need an array greater than length 3';
	}

	var lowestNumberIndex = findLowestNumberIndex(arrayOfInts);
	var lowestValue = arrayOfInts[lowestNumberIndex];
	arrayOfInts.splice(lowestNumberIndex, 1);

	var nextLowestNumberIndex = findLowestNumberIndex(arrayOfInts);
	var nextLowestValue = arrayOfInts[nextLowestNumberIndex];
	arrayOfInts.splice(nextLowestNumberIndex, 1);

	return lowestValue * nextLowestValue;
}

function findHighestNumberIndex(arrayOfInts) {
	var highest = Math.max.apply(null, arrayOfInts);
	var highestIndex = arrayOfInts.indexOf(highest);

	return highestIndex;
}

function findLowestNumberIndex(arrayOfInts) {
	var lowest = Math.min.apply(null, arrayOfInts);
	var lowestIndex = arrayOfInts.indexOf(lowest);

	return lowestIndex;
}

function highestProduct3(arrayOfInts) {
	var negativeArray = copyArrayOfInts(arrayOfInts);
	var positiveArray = copyArrayOfInts(arrayOfInts);

	var negativeProduct = lowestNegativeProduct2(negativeArray);
	var positiveProduct = highestPositiveProduct2(positiveArray);
	var greatestProduct;

	for(var i=0; i<positiveArray.length; i++) {
		var negProduct = negativeArray[i] * negativeProduct;
		var posProduct = positiveArray[i] * positiveProduct;
		if (!greatestProduct) {
			greatestProduct = posProduct;
		}

		if ((negProduct > posProduct) && (negProduct > greatestProduct)){
			greatestProduct = negProduct;
		}
		else if ((negProduct < posProduct) && (posProduct > greatestProduct)){
			greatestProduct = posProduct;
		}
	}
	return greatestProduct;
}

function copyArrayOfInts(arrayOfInts) {
	var copyArray = arrayOfInts.map(function (value) {
		return value;
	});
	return copyArray;
}

console.log(highestProduct3([-10,0,-3,-3,2]));


