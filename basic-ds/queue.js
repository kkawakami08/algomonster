class Queue {
  constructor(queueArray = []) {
    this.queueArray = queueArray;
  }
  enqueue(item) {
    this.queueArray.push(item);
    return this;
  }
  dequeue() {
    if (this.queueArray.length === 0) {
      throw new Error("Nothing to remove");
    }
    this.queueArray.shift();
    return this;
  }
  peek() {
    return this.queueArray[0];
  }
}

const myQueue = new Queue();
console.log(myQueue.enqueue("Daisy"));
console.log(myQueue.enqueue("Lola"));
console.log(myQueue.enqueue("Mike"));
console.log(myQueue.dequeue());
console.log(myQueue.peek());
