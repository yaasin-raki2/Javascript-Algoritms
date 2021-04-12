// Given a Linked-List ... REVERSE IT '-'

// 1 -> 2 -> 3 -> 4 -> 5 -> null
// 5 -> 4 -> 3 -> 2 -> 1 -> null

const ReverseLinkedList = (head) => {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

console.Log(ReverseLinkedList()); // Big(O): - Time Complexity: O(n) / - Space Complexity: O(1)
