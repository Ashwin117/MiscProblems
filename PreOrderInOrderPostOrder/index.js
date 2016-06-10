/*
Write functions to traverse and print contents of a binary tree in-order, pre-order and post-order.

*/

function inOrder(root) {
  if (!root) {
    return;
  }

  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
}

function preOrder(root) {
  if (!root) {
    return;
  }

  console.log(root.value);
  preOrder(root.left);
  preOrder(root.right);
}

function postOrder(root) {
  if (!root) {
    return;
  }

  postOrder(root.left);
  postOrder(root.right);
  console.log(root.value);
}


var root4 = {
  value: 9,
  left: null,
  right: null
}

var root3 = {
  value: 5,
  left: null,
  right: null
}

var root2 = {
  value: 4,
  left: root4
}

var root1 = {
  value: 3,
  left: root2,
  right: root3
}

preOrder(root1);


