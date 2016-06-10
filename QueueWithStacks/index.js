'use strict';

/*
Implement a queue ↴ with 2 stacks ↴ . Your queue should have an enqueue and a dequeue function and it should be "first in first out" (FIFO).

*/

var stackA = []; 
var stackB = [];

function enqueue (element) {
  // Add to StackA
  stackA.push(element);
}

function dequeue (element) {
 // if length of stackB is empty then add from stackA
 if (stackB.length === 0) {
  while (stackA.length > 0) {
    stackB.push(stackA.pop());
  }
 }
  // if length of stackB is not empty then simply pop
  return stackB.pop();
}


enqueue(2);
enqueue(3);
console.log(stackA);
console.log(dequeue());
enqueue(4);
console.log(dequeue());
console.log(dequeue());

console.log(dequeue());
