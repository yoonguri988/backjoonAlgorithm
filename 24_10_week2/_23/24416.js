const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_week2/_23/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const ip = readInput("24416.txt");
let op = "";
/**
 * 피보나치 수열을 동적프로그래밍으로
 */
const N = Number(ip);
let [selfCnt, dynamicCnt] = [1, 0];

const fib = (n) => {
  if (n == 1 || n == 2) return 1;
  selfCnt++;
  return fib(n - 1) + fib(n - 2);
};
const arr = [0, 1, 1];
const fibonacci = (n) => {
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    dynamicCnt++;
  }
  return arr[n];
};

fib(N);
fibonacci(N);
console.log(`${selfCnt} ${dynamicCnt}`);
