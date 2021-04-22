// Given a complete binary tree
// Count the number of nodes

const BST = require("./BinarySearchTree");

// BruteForce Using BFS
const CompleteBinaryTreeNodes = (root) => {
  let totalNodes = 0;
  let current = root;
  const queue = [current];

  while (queue.length) {
    current = queue.shift();

    totalNodes++;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return totalNodes;
};

const tree = new BST();

tree.insert(100);
tree.insert(120);
tree.insert(110);
tree.insert(150);
tree.insert(50);
tree.insert(80);
tree.insert(90);
tree.insert(85);
tree.insert(20);
tree.insert(40);
tree.insert(10);

console.log(CompleteBinaryTreeNodes(tree.head));

// BruteForce using DFS

const CompleteBinaryTreeNodes2 = (root) => {
  let num = 0;

  const DFS = (node) => {
    if (!node) return;

    num++;

    if (node.left) DFS(node.left);
    if (node.right) DFS(node.right);

    return num;
  };

  DFS(root);

  return num;
};

console.log(CompleteBinaryTreeNodes2(tree.head));

// Optimal Solution Using DFS
const CompleteBinaryTreeNodes3 = (root) => {
  if (!root) return 0;

  const GetTreeHeight = (root) => {
    let height = 0;

    while (root.left) {
      height++;
      root = root.left;
    }

    return height;
  };

  const NodeExists = (idxToFind, height, node) => {
    let left = 0;
    let right = Math.pow(2, height) - 1;
    let count = 0;

    while (count < height) {
      let midOfNode = Math.ceil((left + right) / 2);

      if (idxToFind >= midOfNode) {
        node = node.right;
        left = midOfNode;
      } else {
        node = node.left;
        right = midOfNode - 1;
      }

      count++;
    }

    return !!node;
  };

  const height = GetTreeHeight(root);
  if (height === 0) return 1;

  const upperCount = Math.pow(2, height);

  let left = 0;
  let right = upperCount;

  while (left < right) {
    let idxToFind = Math.ceil((left + right) / 2);

    if (NodeExists(idxToFind, height, root)) {
      left = idxToFind;
    } else {
      right = idxToFind - 1;
    }
  }

  return upperCount + left + 2;
};

console.log(CompleteBinaryTreeNodes3(tree.head));
