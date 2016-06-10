/*
Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
*/

function getProductsOfAllIntsExceptAtIndex(numbersArray) {
	var productsArray1 = [1];
	var product = 1;
	
	for (var i=1; i<numbersArray.length; i++) {
		product = product * numbersArray[i-1];
		productsArray1.push(product);
	}

	var productsArray2 = [1];
	product = 1;
	for (var i=numbersArray.length-1; i>0; i--) {
		product = product * numbersArray[i];
		productsArray2.unshift(product);
	}
	console.log(productsArray1);
	console.log(productsArray2);

	var finalProduct = [];
	for (var i=0; i<productsArray1.length; i++) {
		finalProduct.push(productsArray1[i] * productsArray2[i]);
	}
	return finalProduct;
}

console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));