'use strict';

/*
When some elements at the beginning of an array are moved to the end, it becomes a rotation of the original array. Please implement a function to get the minimum number in a rotation of an increasingly sorted array. For example, the array {3, 4, 5, 1, 2} is a rotation of array {1, 2, 3, 4, 5}, of which the minimum is 1. 

*/

function checkForSubstructure (rootA, rootB) {

  var stackAPostOrder = [];
  var stackAPreOrder = [];
  var stackBPostOrder = [];
  var stackBPreOrder = [];

  preOrderTraversal(rootA, stackAPreOrder);
  postOrderTraversal(rootA, stackAPostOrder);

  preOrderTraversal(rootB, stackBPreOrder);
  postOrderTraversal(rootB, stackBPostOrder);

  console.log(stackAPostOrder);
  console.log(stackBPostOrder);
  console.log('--------------');
  console.log(stackAPreOrder);
  console.log(stackBPreOrder);

  return checkArray(stackAPostOrder, stackBPostOrder) ||
  checkArray(stackAPreOrder, stackBPreOrder);

  function checkArray (stackA, stackB) {
    var stringA = stackA.toString();
    var stringB = stackB.toString();

    if (stringA.indexOf(stringB) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  function preOrderTraversal (node, stack) {
    if (!node) {
      return;
    }
    stack.push(node.value);
    preOrderTraversal(node.left, stack);
    preOrderTraversal(node.right, stack);
  }

  function postOrderTraversal (node, stack) {
    if (!node) {
      return;
    }
    postOrderTraversal(node.left, stack);
    postOrderTraversal(node.right, stack);
    stack.push(node.value);
  }

}


var node3 = {
  value: 2
}

var node2 = {
  value: 9
}

var node1 = {
  value: 8,
  left: node2,
  right: node3
}

var root7 = {
  value: 7
}

var root6 = {
  value: 4
}

var root5 = {
  value: 2,
  left: root6,
  right: root7
}

var root4 = {
  value: 9,
  left: null,
  right: null
}

var root3 = {
  value: 7,
  left: null,
  right: null
}

var root2 = {
  value: 8,
  left: root4,
  right: root5
}

var root1 = {
  value: 8,
  left: root2,
  right: root3
}


console.log(checkForSubstructure(root1, node1));



