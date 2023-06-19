class Stack {
  constructor(stackArray = []) {
    this.stackArray = stackArray;
    this.length = stackArray.length;
  }
  push(item) {
    this.stackArray.push(item);
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      throw new Error("Nothing to remove");
    } else {
      this.stackArray.pop();
      this.length--;
      return this;
    }
  }
  peek() {
    return this.stackArray[this.length - 1];
  }
}

const myStack = new Stack(["Kaori", "Mike"]);
console.log(myStack.push("Daisy"));
console.log(myStack.push("Ragnar"));
console.log(myStack.push("Lola"));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
