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

// Using the Floyd's Tortoise and Hare Algorithm
const LinkedListCycleDetection2 = (head) => {
  let tortoise = head.next;
  let hare = head.next.next;

  while (tortoise !== hare) {
    if (!hare.next || !hare) return false;

    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  tortoise = head;

  while (tortoise !== hare) {
    tortoise = tortoise.next;
    hare = hare.next;
  }

  return tortoise;
};

LinkedListCycleDetection(); // Big(O): - Time Complexity: O(n) / - Space Complexity: O(1)

// Another implementation
const LinkedListCycleDetection2 = (head) => {
  let hare = head;
  let tortoise = head;

  while (true) {
    hare = hare.next;
    tortoise = tortoise.next;

    if (!hare || !hare.next) {
      return false;
    } else {
      hare = hare.next;
    }

    if (tortoise === hare) break;
  }

  let p1 = head;
  let p2 = tortoise;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
};

LinkedListCycleDetection3(); // Big(O): - Time Complexity: O(n) / - Space Complexity: O(1)
