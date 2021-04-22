// Given a binary tree, determine if it is
// a valid binary search tree

const BST = require("./BinarySearchTree");

const CheckIfBST = (node, min = -Infinity, max = Infinity) => {
  if (node.value <= min) return false;

  if (node.value >= max) return false;

  if (node.left) {
    if (!CheckIfBST(node.left, min, node.value)) {
      return false;
    }
  }

  if (node.right) {
    if (!CheckIfBST(node.right, node.value, max)) {
      return false;
    }
  }

  return true;
};

const tree = new BST();

tree.insert(100);
tree.insert(120);
tree.insert(50);
tree.insert(80);
tree.insert(90);

// Big(O): - Time Complexity: O(n) / - Space Complexity: O(n)

console.log(CheckIfBST(tree.head));
