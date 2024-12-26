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

const iData = readText("1927");
const [N, ...N_ARR] = iData.split("\r\n").map(Number);

class MinHeap {
  constructor() {
    this.nodes = [];
  }

  push(v) {
    this.nodes.push(v);
    this.shiftUp();
  }

  shiftUp(idx = this.nodes.length - 1) {
    if (idx < 1) return;
    const curNode = this.nodes[idx];
    const parIdx = Math.floor((idx - 1) / 2);
    const parNode = this.nodes[parIdx];

    if (parNode <= curNode) return;

    this.nodes[parIdx] = curNode;
    this.nodes[idx] = parNode;
    idx = parIdx;
    this.shiftUp(idx);
  }

  pop() {
    if (this.nodes.length === 1) return this.nodes.pop();
    else if (!this.nodes.length) return 0;
    const min = this.nodes[0];
    this.nodes[0] = this.nodes.pop();
    this.shiftDown(0);
    return min;
  }

  shiftDown(idx) {
    let lIdx = idx * 2 + 1;
    let rIdx = idx * 2 + 2;
    let len = this.nodes.length;
    let smallestIdx = idx;

    if (lIdx < len && this.nodes[lIdx] < this.nodes[smallestIdx]) {
      smallestIdx = lIdx;
    }
    if (rIdx < len && this.nodes[rIdx] < this.nodes[smallestIdx]) {
      smallestIdx = rIdx;
    }

    if (smallestIdx !== idx) {
      let tmp = this.nodes[idx];
      this.nodes[idx] = this.nodes[smallestIdx];
      this.nodes[smallestIdx] = tmp;
      this.shiftDown(smallestIdx);
    }
  }
}

const heap = new MinHeap();
let result = "";
for (let v of N_ARR) {
  if (v === 0) {
    result += `${heap.pop()}\n`;
  } else {
    heap.push(v);
  }
}
console.log(result);
