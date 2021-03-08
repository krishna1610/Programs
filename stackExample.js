// - 4 buttons -- Add, Remove and Sort, Shuffle
// Grid 4 columns
// Shuffle [1, 2, 3, 4, 5, 6] --> [6, 4, 3, 1, 2, 5]
// Add [6, 4, 3, 1, 2, 5] --> [6, 4, 3, 1, 2, 5, 7]
// Add [6, 4, 3, 1, 2, 5, 7] --> [6, 4, 3, 1, 2, 5, 7, 8]
// Shuffle [6, 4, 3, 1, 2, 5, 7, 8] --> [8, 6, 4, 1, 7, 2, 5, 7, 3]
// Remove --> [8, 6, 4, 1, 7, 2, 5, 7, 3] --> [8, 6, 4, 1, 7, 2, 5, 7]
// Sort --> [1, 2, 3, 4, 5, 6, 7]

// list = [];

// add()

// remove()

class StackExample {
  constructor() {
    this.list = [];
    this.counter = 0;
  }

  add() {
    let addItem = this.counter + 1;
    this.list.push(addItem);
    this.counter = this.counter + 1;
    return this.list;
  }

  remove() {
    this.list.pop();
    this.counter = this.counter - 1;
    return this.list;
  }

  sort() {
    this.list.sort((a, b) => a - b);
    return this.list;
  }

  shuffle() {
    for (let i = this.list.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.list[i];
      this.list[i] = this.list[j];
      this.list[j] = temp;
    }
    return this.list;
  }
}

const stackExp = new StackExample();
console.log(stackExp.add());
console.log(stackExp.add());
console.log(stackExp.add());
console.log(stackExp.add());
console.log(stackExp.remove());
console.log(stackExp.add());
console.log(stackExp.shuffle());
console.log(stackExp.shuffle());
console.log(stackExp.add());
console.log(stackExp.sort());
