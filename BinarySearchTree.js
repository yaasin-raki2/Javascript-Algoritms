class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

export class BST {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return this;
    }

    let current = this.head;

    while (current) {
      if (value === current.value) {
        return undefined;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  find(value) {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let found = false;

    while (current && !found) {
      if (value === current.value) {
        found = !found;
      } else if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      }
    }

    if (!found) {
      return "This Element Does Not Exist On THis Tree";
    }

    return current;
  }

  BFS(start) {
    let queue = [];
    let data = [];

    let current = start ? this.find(start) : this.head;

    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      data.push(current.value);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }

    return data;
  }

  delete(value) {
    let parrent = null;
    let current = this.head;

    const pickSide = (side) => {
      if (!current[side]) {
        return "No node Found";
      }
      parrent = current;
      current = current[side];
    };

    const deleteNode = (side) => {
      if (current.value === value) {
        const children = this.BFS(current.value);
        parrent[side] = null;
        children.shift();
        children.forEach((child) => this.insert(child));
      }
    };

    while (current.value !== value) {
      if (value < current.value) {
        pickSide("left");
        deleteNode("left");
      } else if (value > current.value) {
        pickSide("right");
        deleteNode("right");
      }
    }

    return current;
  }
}

const tree = new BST();

tree.insert(100);
tree.insert(150);
tree.insert(200);
tree.insert(120);
tree.insert(20);
tree.insert(175);

console.log(tree.head);
console.log(tree.find(200));
console.log(tree.BFS());
console.log(tree.delete(150));
