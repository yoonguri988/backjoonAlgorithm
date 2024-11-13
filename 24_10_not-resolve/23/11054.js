function readText(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_not-resolve/inputTextFile/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (err) {
    console.error(err);
  }
}
// 가장 긴 바이토닉 부분 수열
const iData = readText("11054.txt");
const [[N], NRR] = iData.split("\r\n").map((v) => v.split(" ").map(Number));

const ddp = Array(N).fill(0);
const udp = Array(N).fill(0);
ddp[0] = 1;
udp[N - 1] = 1;

for (let i = 1; i < N; i++) {
  ddp[i] = 1;
  for (let j = 0; j < i; j++) {
    if (NRR[i] > NRR[j]) ddp[i] = Math.max(ddp[i], ddp[j] + 1);
  }
}

for (let i = N - 1; i >= 0; i--) {
  udp[i] = 1;
  for (let j = i + 1; j < N; j++) {
    if (NRR[i] > NRR[j]) udp[i] = Math.max(udp[i], udp[j] + 1);
  }
}
const dp = [...ddp].map((v, i) => v + udp[i]);
console.log(Math.max(...dp) - 1);
