// Given a Binary Tree, return the level order
// traversal of the node's values as an array

const BST = require("./BinarySearchTree");

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
tree.insert(175);

console.log(LevelOrder(tree.head));
