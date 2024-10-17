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

const ip = readInput("28279.txt");
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

  length() {
    return this.size;
  }

  empty() {
    return !this.size ? 1 : 0 + "\n";
  }

  getFirstValue() {
    if (!this.size) return -1;
    return this.head.value;
  }
  getLastValue() {
    if (!this.size) return -1;
    return this.tail.value;
  }
}

let [N, ...comments] = ip.split("\r\n");
const deque = new Deque();
for (let i = 0; i < N; i++) {
  let comd = comments[i].split(" ");
  switch (Number(comd[0])) {
    case 1:
      deque.appendleft(Number(comd[1]));
      break;
    case 2:
      deque.append(Number(comd[1]));
      break;
    case 3:
      op += deque.popLeft() + "\n";
      break;
    case 4:
      op += deque.pop() + "\n";
      break;
    case 5:
      op += deque.length() + "\n";
      break;
    case 6:
      op += deque.empty() + "\n";
      break;
    case 7:
      op += deque.getFirstValue() + "\n";
      break;
    case 8:
      op += deque.getLastValue() + "\n";
      break;
  }
}
console.log(op);
