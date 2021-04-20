// Given a binary tree, imagine you're standing
// to the right of the tree. Return an array of
// the values of the nodes you can see ordered
// from top to bottom.

const BST = require("./BinarySearchTree");

// Using Breath First Search
const RightSideView = (node) => {
  const result = [];

  let current = node;
  let count = 0;

  const queue = [[current, count]];

  while (queue.length) {
    [current, count] = queue.shift();

    result[count] ? result[count].push(current.value) : (result[count] = [current.value]);

    count++;

    if (current.left) queue.push([current.left, count]);
    if (current.right) queue.push([current.right, count]);
  }

  return result.map((arr) => arr[arr.length - 1]);
};

const tree = new BST();

tree.insert(100);
tree.insert(120);
tree.insert(50);
tree.insert(20);
tree.insert(80);
tree.insert(40);
tree.insert(30);
tree.insert(150);

console.log(RightSideView(tree.head));

// Another BFS Solution
const RightSideView2 = (node) => {
  const result = [];
  const queue = [node];

  while (queue.length) {
    let length = queue.length;
    let count = 0;

    while (count < length) {
      let current = queue.shift();

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);

      count++;

      if (count === length) result.push(current.value);
    }
  }

  return result;
};

console.log(RightSideView2(tree.head));
