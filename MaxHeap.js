// Implementation of a maximum heap using Arrays

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  parrentOf(value) {
    if (this.heap.length <= 1) return null;

    const idx = this.heap.indexOf(value);

    return this.heap[Math.floor((idx - 1) / 2)];
  }

  leftOf(value) {
    const idx = this.heap.indexOf(value);

    return this.heap[idx * 2 + 1];
  }

  rightOf(value) {
    const idx = this.heap.indexOf(value);

    return this.heap[idx * 2 + 2];
  }

  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  insert(value) {
    if (!this.heap.length) return this.heap.push(value);

    this.heap.push(value);

    let idx = this.heap.length - 1;

    while (true) {
      let parrent = Math.floor((idx - 1) / 2);

      if (this.heap[parrent] > this.heap[idx] || parrent < 0) return this;

      this.swap(idx, parrent);

      idx = parrent;
    }
  }

  delete(val) {
    let valIdx = this.heap.indexOf(val);

    this.heap.pop();

    let idx = valIdx;

    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;

      let big;

      this.heap[left] > this.heap[right] ? (big = left) : (big = right);

      if (this.heap[idx] < this.heap[big]) {
        this.swap(valIdx, this.heap.length - 1);
        idx = big;
      } else {
        break;
      }
    }
  }
}

const maxHeap = new MaxHeap();

maxHeap.insert(50);
maxHeap.insert(40);
maxHeap.insert(25);
maxHeap.insert(20);
maxHeap.insert(35);
maxHeap.insert(10);
maxHeap.insert(15);
maxHeap.insert(45);
maxHeap.insert(75);

console.log(maxHeap.heap);

console.log(maxHeap.delete(75));
console.log(maxHeap.heap);
console.log(maxHeap.delete(20));

console.log(maxHeap.heap);
