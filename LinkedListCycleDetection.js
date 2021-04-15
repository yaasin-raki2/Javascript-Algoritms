// Given a linked list, return whether it's cycled or not
// and from where the cycle begins

const LinkedListCycleDetection = (head) => {
  let current = head;
  let seen = new Set();

  while (seen.has(current)) {
    if (current.next === null) return false;

    seen.add(current);
    current = current.next;
  }

  return current;
};

LinkedListCycleDetection(); // Big(O): - Time Complexity: O(n) / - Space Complexity: O(n)
