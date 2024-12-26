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

const iData = readText("11286");
const [N, ...N_ARR] = iData.split("\r\n").map(Number);

class AbsHeap {
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

    if (
      Math.abs(parNode) < Math.abs(curNode) ||
      (Math.abs(parNode) == Math.abs(curNode) && parNode < curNode)
    ) {
      return;
    }

    this.nodes[parIdx] = curNode;
    this.nodes[idx] = parNode;
    idx = parIdx;
    this.shiftUp(idx);
  }

  pop() {
    if (this.nodes.length === 0) return 0;
    if (this.nodes.length === 1) return this.nodes.pop();
    const abs = this.nodes[0];
    this.nodes[0] = this.nodes.pop();
    this.shiftDown(0);
    return abs;
  }

  shiftDown(idx) {
    let lIdx = idx * 2 + 1;
    let rIdx = idx * 2 + 2;
    let len = this.nodes.length;
    let sIdx = idx;

    let absLeft = Math.abs(this.nodes[lIdx]);
    let absRight = Math.abs(this.nodes[rIdx]);
    let absSmall = Math.abs(this.nodes[sIdx]);

    if (lIdx < len) {
      if (absLeft < absSmall) {
        sIdx = lIdx;
      } else if (absLeft == absSmall) {
        if (this.nodes[lIdx] < this.nodes[sIdx]) {
          sIdx = lIdx;
        }
      }
    }

    absSmall = Math.abs(this.nodes[sIdx]);
    if (rIdx < len) {
      if (absRight < absSmall) {
        sIdx = rIdx;
      } else if (absRight == absSmall) {
        if (this.nodes[rIdx] < this.nodes[sIdx]) {
          sIdx = rIdx;
        }
      }
    }
    // if (
    //   rIdx < len &&
    //   (absRigthIdx < absSmallIdx ||
    //     (absRigthIdx == absSmallIdx && this.nodes[rIdx] < this.nodes[sIdx]))
    // ) {
    //   sIdx = rIdx;
    // }

    console.log(this.nodes);
    if (sIdx !== idx) {
      let tmp = this.nodes[idx];
      this.nodes[idx] = this.nodes[sIdx];
      this.nodes[sIdx] = tmp;
      this.shiftDown(sIdx);
    }
  }
}

const heap = new AbsHeap();
let result = "";
for (let v of N_ARR) {
  if (v === 0) {
    result += `${heap.pop()}\n`;
  } else {
    heap.push(v);
  }
}
console.log(result);
