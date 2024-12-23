const readText = (fileNm) => {
  const fs = require("fs");
  let addr;
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = `./24_12_week4/ip/${fileNm}.txt`;

  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e.message);
  }
};

const iData = readText("11279");
/**
 * 11279 최대 힙 - 우선순위 큐
 * 모든 부모 노드가 자식노드 보다 크거나 같은 값을 가짐
 */
class MaxHeap {
  // 건설? 기초공사? 기본?
  constructor() {
    this.nodes = [];
  }

  // 데이터 추가
  push(data) {
    this.nodes.push(data);
    this.shiftUp();
  }

  // 버블 정렬
  shiftUp(index = this.nodes.length - 1) {
    if (index < 1) return;
    let currentNode = this.nodes[index];
    let parentIndex = Math.floor((index - 1) / 2);
    let parentNode = this.nodes[parentIndex];

    if (parentNode >= currentNode) return;

    this.nodes[parentIndex] = currentNode;
    this.nodes[index] = parentNode;
    index = parentIndex;
    this.shiftUp(index);
  }
  pop() {
    if (this.nodes.length === 1) return this.nodes.pop();
    if (!this.nodes.length) return 0;

    const max = this.nodes[0];
    this.nodes[0] = this.nodes.pop();
    this.shiftDown(0);

    return max;
  }

  shiftDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    const length = this.nodes.length;
    let largestIndex = index;

    if (
      leftIndex < length &&
      this.nodes[leftIndex] > this.nodes[largestIndex]
    ) {
      largestIndex = leftIndex;
    }

    if (
      rightIndex < length &&
      this.nodes[rightIndex] > this.nodes[largestIndex]
    ) {
      largestIndex = rightIndex;
    }

    if (largestIndex !== index) {
      const t = this.nodes[index];
      this.nodes[index] = this.nodes[largestIndex];
      this.nodes[largestIndex] = t;
      this.shiftDown(largestIndex);
    }
  }
}

const [N, ...N_ARR] = iData.split("\r\n").map(Number);

let result = "";
const priorQueue = new MaxHeap();
for (let v of N_ARR) {
  if (v === 0) {
    result += `${priorQueue.pop()}\n`;
  } else {
    priorQueue.push(v);
  }
}
console.log(result);
