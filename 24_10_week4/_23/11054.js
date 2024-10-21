/** 11054 가장 긴 바이토닉 부분 수열 */
const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_week4/_23/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

const ip = readInput("11054.txt");
let [N, arr] = ip.split("\n");
N = Number(N);
arr = arr.split(" ").map(Number);

const udp = Array(N).fill(0);
const ddp = Array(N).fill(0);
udp[0] = 1;
ddp[N - 1] = 1;

for (let i = 1; i < N; i++) {
  let max = 1;
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) max = Math.max(max, udp[j] + 1);
  }
  udp[i] = max;
}

for (let i = N - 1; i >= 0; i--) {
  let max = 1;
  for (let j = i + 1; j < N; j++) {
    if (arr[j] < arr[i]) max = Math.max(max, ddp[j] + 1);
  }
  ddp[i] = max;
}
console.log(Math.max(...udp.map((e, i) => e + ddp[i])) - 1);
