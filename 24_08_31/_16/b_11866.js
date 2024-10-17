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

const ip = readInput("11866.txt");
let op = "";

/**
 * N명의 사람이 원을 이루며,
 * K번째 사람들 제거
 * => 모두 제거될 때까지 계속
 */
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

let [N, K] = ip.split(" ").map(Number);
const que = new Queue();
for (let i = 1; i <= N; i++) {
  que.push(i);
}
let yosep = [];
let j = 0;
while (que.getSize() > 0) {
  if (j == K - 1) {
    yosep.push(que.pop());
    j = 0;
  } else {
    que.push(que.pop());
    j++;
  }
}
op = "<" + yosep.join(", ") + ">";
console.log(op);
