function readInput(addr) {
  const fs = require("fs");
  if (process.platform === "linux") {
    addr = "/dev/stdin";
  } else {
    addr = "./24_08_21/_3/ip/" + addr;
  }
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("15552.txt");
let op = "";

const tmpArr = ip.trim().split("\n");
const T = parseInt(tmpArr[0]);
for (let i = 1; i <= T; i++) {
  let tc = tmpArr[i].split(" ").map((n) => parseInt(n));
  // console.log를 사용함으로 시간초과 발생
  op += tc[0] + tc[1] + "\n";
}
console.log(op);
