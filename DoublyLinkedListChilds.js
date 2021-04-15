// Given a doubly linked list, list nodes also have a child
// property that can point to a separate doubly linked list.
// These childs can also have one or more child doubly
// linked lists of their own, and so on.
// Return the list as a single flattened doubly linked list.

const DoublyLinkedList = require("./DoublyLinkedList");

const DoublyLinkedListChilds = (list) => {
  let currentNode = list.head;
  let parrentNode = null;
  let childNode = null;

  while (currentNode) {
    if (currentNode.child) {
      let next = currentNode.next;
      parrentNode = currentNode;
      childNode = parrentNode.child;
      parrentNode.next = childNode.head;
      childNode.head.prev = parrentNode;
      next.prev = childNode.tail;
      childNode.tail.next = next;

      parrentNode.child = null;
    }
    currentNode = currentNode.next;
  }

  return list;
};

const doublyLinkedList = new DoublyLinkedList();
const doublyLinkedList2 = new DoublyLinkedList();
const doublyLinkedList3 = new DoublyLinkedList();

doublyLinkedList3.push(7, null);

doublyLinkedList2.push(4, null);
doublyLinkedList2.push(5, null);
doublyLinkedList2.push(6, doublyLinkedList3);

doublyLinkedList.push(1, null);
doublyLinkedList.push(2, doublyLinkedList2);
doublyLinkedList.push(3, null);

console.log(DoublyLinkedListChilds(doublyLinkedList));
