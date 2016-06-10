function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};


var root = new BinaryTreeNode(2);
var lRoot = root.insertLeft(0);
var rRoot = root.insertRight(5);
rRoot.insertRight(6);
rRoot.insertLeft(4);

//console.log(secondLargest(root));

/*function secondLargest(root) {
	var binaryStack = [];
	function traverse (root) {
		if (!root) {
			return;
		}
		if (!root.right && !root.left) {
			binaryStack.push(root.value);
			return;
		} else {
			traverse(root.left);
			binaryStack.push(root.value);
			traverse(root.right);
		}
	}
	traverse(root);
	return binaryStack[binaryStack.length-2];
}*/

function traverse2 (leaf, parent) {
	if (!leaf) {
		return parent.left;
	} else if (!leaf.right && !leaf.left) {
		return parent;
	} else {
		var returnedLeaf = traverse2(leaf.right, leaf);
	}
	return returnedLeaf;
}

console.log(traverse2(root));


