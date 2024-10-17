const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_31/_16/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ip = readInput("2164.txt");
let op = "";

// Node
class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}
// Queue
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push(item) {
    const node = new Node(item);
    if (!this.head) {
      this.head = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }
  pop() {
    if (this.size == 0) return item;
    const item = this.head.item;
    const newHead = this.head.next;
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else if (this.size == 2) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head = newHead;
    }
    this.size--;
    return item;
  }
  getSize() {
    return this.size;
  }
}
let N = Number(ip);
let que = new Queue();
for (let i = 1; i <= N; i++) {
  que.push(i);
}
while (que.getSize() > 1) {
  que.pop();
  let next = que.pop();
  if (next) que.push(next);
}
console.log(que.head.item);
