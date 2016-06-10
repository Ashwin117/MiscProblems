'use strict'

var Node = {
  value: null,
  next: null
}

function incrementByOne(input) {
  // Find last 0.
  var lastZeroIndex = findLastZero(input);

  // If found 0, then flip values at 0 and above
  if (lastZeroIndex !== null) {
    flipValues(input, lastZeroIndex);
    return input;
  } else { // If not found 0, then create new binary number
    return createNewNumber(input);
  }
}


function findLastZero(input) {
  var lastZeroIndex = null;
  var index = 0;

  while (input) {
    if (input.value === 0) {
      lastZeroIndex = index;
    }
    input = input.next;
    index++;
  }

  return lastZeroIndex;
}

function flipValues (input, lastZeroIndex) {
  var index = 0;

  while (input) {
    if (index >= lastZeroIndex) {
      if (input.value === 0) {
        input.value = 1;
      } else {
        input.value = 0;
      }
    }
    input = input.next;
    index++;
  }
}

function createNewNumber(input) {
  var head = input;
  var index = 0; 
  
  //find current length of linkedList && set values to 0
  while (input) {
    input.value = 0;
    input = input.next;
    index++;
  }

  //replace all values with 0
  var newHead = createNewNode();
  newHead.value = 1;
  newHead.next = head;

  return newHead;
}

function createNewNode () {
  var Node = {
    value: null,
    next: null
  }

  return Node;
}

var node4 = {
  value: 1,
  next: null
}

var node3 = {
  value: 1,
  next: node4
}
var node2 = {
  value: 1,
  next: node3 
}

var node1 = {
  value: 1,
  next: node2
}

console.log(incrementByOne(node1));

