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

const ip = readInput("2346.txt");
let op = "";

class Node {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}
/**
 * Deque 덱: 스택+큐
 * 두 개의 포인터를 사용하여,
 * 양쪽에서 삭제와 삽입을 발생
 */
class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(x) {
    // x를 deque의 오른쪽 끝에 삽입
    const curNode = new Node(x);
    if (!this.size) {
      this.head = curNode;
      this.tail = curNode;
    } else {
      const cache = this.tail;
      cache.next = curNode;
      this.tail = curNode;
      // this.head.next = cache;
      if (!this.tail.prev) this.tail.prev = cache;
    }
    this.size++;
  }
  appendleft(x) {
    // x를 deque의 왼쪽 끝에 삽입
    const curNode = new Node(x);
    if (!this.size) {
      this.head = curNode;
      this.tail = curNode;
    } else {
      const cache = this.head;
      cache.prev = curNode;
      this.head = curNode;
      if (!this.head.next) this.head.next = cache;
      // this.tail = cache;
    }
    this.size++;
  }
  popLeft() {
    if (!this.size) return -1;
    const outValue = this.head.value;
    if (this.head.next) {
      const cache = this.head.next;
      cache.prev = null;
      this.head = cache;
    }
    this.size--;
    return outValue;
  }
  pop() {
    if (!this.size) return -1;
    const outValue = this.tail.value;
    if (this.tail.prev) {
      const cache = this.tail.prev;
      cache.next = null;
      this.tail = cache;
    }
    this.size--;
    return outValue;
  }
}

let [N, balloons] = ip.split("\n");
balloons = balloons.split(" ").map(Number);
let dict = {};
let deque = new Deque();
for (let i = 0; i < N; i++) {
  deque.append(balloons[i]);
  dict[balloons[i]] = i + 1;
}
op = [];
let T = deque.popLeft();
while (deque.size > 0) {
  op += dict[T] + " ";
  if (deque.size == 1) {
    op += dict[deque.popLeft()] + " ";
    break;
  }
  if (T > 0) {
    for (let i = 0; i < T - 1; i++) {
      deque.append(deque.popLeft());
    }
    T = deque.popLeft();
  } else {
    for (let i = T; i > 0; i--) {
      deque.appendleft(deque.pop());
    }
    T = deque.pop();
  }
}
console.log(op.trim());
