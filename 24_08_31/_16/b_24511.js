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

const ip = readInput("24511.txt");
let op = "";

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

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
    if (this.size == 0) return -1;

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
}

let [N, Arr, Brr, M, Crr] = ip.split("\n");
Arr = Arr.split(" ").map(Number);
Brr = Brr.split(" ").map(Number);
Crr = Crr.split(" ").map(Number);

op = [];
let que = new Queue();
for (let i = N - 1; i >= 0; i--) {
  if (Arr[i] == 0) que.push(Brr[i]);
}

for (let i = 0; i < M; i++) {
  que.push(Crr[i]);
  op.push(que.pop());
}
console.log(op.join(" "));
