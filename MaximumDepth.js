// Given a binary tree, find its maximumdepth.
// Maximum depth is the number of nodes along the
// longest path from the root node to the further leaf node

const Maximumdepth = (node, count = 0) => {
  if (!node) {
    return count;
  }

  count++;

  return Math.max(Maximumdepth(node.left, count), Maximumdepth(node.right, count));
};

// Big(O): - Time Complexity: O(n) / - Space Complexity: O(n)

console.log(Maximumdepth());
