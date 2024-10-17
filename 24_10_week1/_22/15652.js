const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_week1/_22/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const ip = readInput("15652.txt");
let op = "";

/**
 * 1부터 N까지의 자연수 중에서 M개를 고른 수열
 * - 같은 수를 여러번 골라도 된다.
 * - 고른 수열은 비내림차순
 */
const [N, M] = ip.split(" ").map(Number);
let arr = Array(M).fill(0);

function func(k) {
  if (k == M) {
    return (op += `${arr.join(" ")}\n`);
  }
  for (let i = 1; i <= N; i++) {
    if (k > 0) {
      if (arr[k - 1] > i) continue;
    }
    arr[k] = i;
    func(k + 1);
  }
}

func(0);
console.log(op);
