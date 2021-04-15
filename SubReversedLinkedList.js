// Given a linked list and numbers m and n,
// Return it back with only positions m to n in reverse.

// m = 2 / n = 4
// 1 -> 2 -> 3 -> 4 -> 5 -> null
// 1 -> 4 -> 3 -> 2 -> 5 -> null

const SubReversedLinkedList = (head, m, n) => {
  let currentPos = 1;
  let currentNode = head;
  let start = head;

  while (currentPos < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null;
  let tail = currentNode;

  while (currentPos >= m && currentPos <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPos++;
  }

  start.next = newList;
  tail.next = currentNode;

  if (m > 1) {
    return head;
  } else {
    return newList;
  }
};

console.log(SubReversedLinkedList()); // Big(O): - Time Complexity: O(n) / - Space Complexity: O(1)
