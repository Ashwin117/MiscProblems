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


/*function isBinaryTree(root, traverse, boundValue) {
	if (root.left === null && root.right === null) {
		return true;
	} else {
		var isBinary;
		if (root.right) {
			if ((root.right.value > root.value) && (!traverse || traverse === 'right') && (!boundValue || (root.right.value > boundValue))) {
				isBinary = isBinaryTree(root.right, 'right', root.value);
			} else if ((root.right.value > root.value) && (!traverse || traverse === 'left') && (!boundValue || root.right.value < boundValue) ) {
				isBinary = isBinaryTree(root.right, 'right', root.value);
			}
			else {
				return false;
			}
		}
		if (root.left) {
			if ((root.left.value < root.value) && (!traverse || traverse === 'right') && (!boundValue || root.left.value > boundValue)) {
				isBinary = isBinary && isBinaryTree(root.left, 'left', root.value);
			} else if ((root.left.value < root.value) && (!traverse || traverse === 'left') && (!boundValue || root.left.value < boundValue)) {
				isBinary = isBinary && isBinaryTree(root.left, 'left', root.value);
			} else {
				return false;
			}
		}

		return isBinary;
	}
}*/

function bstCheckerRecursive(treeRoot, lowerBound, upperBound) {
	lowerBound = lowerBound || -Infinity;
	upperBound = upperBound ||  Infinity;

	if (!treeRoot) return true;

	if (treeRoot.value > upperBound || treeRoot.value < lowerBound) {
	    return false;
	}

	return bstCheckerRecursive(treeRoot.left, lowerBound, treeRoot.value) &&
	       bstCheckerRecursive(treeRoot.right, treeRoot.value, upperBound);

}

var root = new BinaryTreeNode(2);
var lRoot = root.insertLeft(0);
var rRoot = root.insertRight(5);
rRoot.insertRight(6);
rRoot.insertLeft(4);

console.log(bstCheckerRecursive(root));
