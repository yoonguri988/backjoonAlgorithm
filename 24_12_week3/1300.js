const readText = (addr) => {
  const fs = require("fs");
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = `./24_12_week3/ip/${addr}.txt`;

  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e.message);
    return;
  }
};

const iData = readText("1300");
const [N, K] = iData.split("\r\n").map(Number);

let [start, end] = [1, K];
while (start < end) {
  let mid = Math.floor((start + end) / 2);
  let cnt = 0;
  for (let i = 1; i <= N; i++) {
    cnt += Math.min(Math.floor(mid / i), N);
  }

  if (K <= cnt) end = mid;
  else start = mid + 1;
}
console.log(start);
// console.log(N, K);
// console.log(start, end);
