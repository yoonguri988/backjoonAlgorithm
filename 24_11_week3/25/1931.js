const readText = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = `./24_11_week3/25/ip/${addr}.txt`;
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e);
  }
};

const iData = readText("1931");
/**
 * 1931 회의실 배정
 * N: 회의의 갯수
 * USE_TIME[start, end]: 회의실 사용시간[시작시간, 종료시간]
 */
const [[N], ...USE_TIME] = iData
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));
USE_TIME.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

let nextTime = USE_TIME[0][1];
let cnt = 1;
for (let j = 1; j < N; j++) {
  const [start, end] = USE_TIME[j];
  if (nextTime <= start) {
    nextTime = end;
    cnt++;
  }
}

// console.log(`${N}`);
// console.log(`${USE_TIME.join("\n")}`);
console.log(`${cnt}`);
