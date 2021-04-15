class Node {
  constructor(value, child) {
    this.value = value;
    this.next = null;
    this.prev = null;
    this.child = child;
  }
}

module.exports = class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value, child) {
    const newNode = new Node(value, child);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    return this;
  }
};
