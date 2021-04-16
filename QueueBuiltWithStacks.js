// Implement the class Queue using stacks.
// The queue methods you need to implement are:
// enqueue, dequeue, peek and empty

class QueueBuiltWithStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.length) {
      return this.stack2.pop();
    }

    while (this.stack1.length) {
      const poped = this.stack1.pop();
      this.stack2.push(poped);
    }

    return this.stack2.pop();
  }

  peek() {
    if (this.stack2.length) {
      return this.stack2[this.stack2.length - 1];
    }

    while (this.stack1.length) {
      const poped = this.stack1.pop();
      this.stack2.push(poped);
    }

    return this.stack2[this.stack2.length - 1];
  }

  empty() {
    if (!this.stack1.length && !this.stack2.length) {
      return true;
    } else {
      return false;
    }
  }
}

const queue = new QueueBuiltWithStacks();

queue.enqueue(1);
queue.enqueue(2);

queue.dequeue();

console.log(queue.peek());
console.log(queue.empty());

// A cleaner implementation
class QueueBuiltWithStacks2 {
  constructor() {
    this.in = [];
    this.out = [];
  }

  enqueue(val) {
    this.in.push(val);
  }

  dequeue() {
    if (!this.out.length) {
      while (this.in.length) {
        const poped = this.in.pop();
        this.out.push(poped);
      }
    }
    return this.out.pop();
  }

  peek() {
    if (!this.out.length) {
      while (this.in.length) {
        const poped = this.in.pop();
        this.out.push(poped);
      }
    }
    return this.out[this.out.length - 1];
  }

  empty() {
    return !this.in.length && !this.out.length;
  }
}
