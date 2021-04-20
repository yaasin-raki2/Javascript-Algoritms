// Given a Binary Tree, return the level order
// traversal of the node's values as an array

const BST = require("./BinarySearchTree");

// Using Breath First Search
const LevelOrder = (node) => {
  const data = [];
  const queue = [];
  let current = node;
  let count = 0;

  queue.push([current, count]);

  while (queue.length) {
    [current, count] = queue.shift();

    if (!data[count]) {
      data[count] = [];
      data[count].push(current.value);
    } else if (data[count]) {
      data[count].push(current.value);
    }

    count++;

    if (current.left) {
      queue.push([current.left, count]);
    }
    if (current.right) {
      queue.push([current.right, count]);
    }
  }

  return data;
};

const tree = new BST();

tree.insert(100);
tree.insert(150);
tree.insert(200);
tree.insert(120);
tree.insert(20);
tree.insert(30);
tree.insert(175);

// Big(O): - Time Complexity: O(n) / - Space Complexity: O(n + n/2 + 1) => O(2n) => O(n)

console.log(LevelOrder(tree.head));

// Anoter Implementation using Breath First Search
const LevelOrder2 = (root) => {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];

  while (queue.length) {
    let length = queue.length;
    let count = 0;
    const currentLevelValue = [];

    while (count < length) {
      const currentNode = queue.shift();

      currentLevelValue.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      count++;
    }

    result.push(currentLevelValue);
  }

  return result;
};

// Big(O): - Time Complexity: O(n) / - Space Complexity: O(n + n/2 + 1) => O(2n) => O(n)

console.log(LevelOrder2(tree.head));
