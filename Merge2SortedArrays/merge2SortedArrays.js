function merge2SortedArrays (array1, array2) {
  var counter1 = 0;
  var counter2 = 0;

  while (counter1 < array1.length) {
    if (array1[counter1] > array2[counter2]) {
      array1.splice(counter1, 0, array2[counter2]);
      counter2++;
    }
    counter1++;
  }
  
  while (counter2 < array2.length) {
    array1.push(array2[counter2]);
    counter2++;
  }

  return array1;
}

var array1 = [];
var array2 = [3, 9];
console.log(merge2SortedArrays(array1, array2));
