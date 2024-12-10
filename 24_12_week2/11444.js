const readText = (addr) => {
  const fs = require("fs");
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = `./24_12_week2/ip/${addr}.txt`;

  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e.message);
    return;
  }
};

const iData = readText("11444");
/**
 * 피보나치 수 6
 * @argument n BigInt, P BigInt
 * @function fibo
 * @returns res BigInt
 */
const N = BigInt(iData);
const MOD = 1_000_000_007n;
let memo = new Map();

function fibo(n) {
  if (n === 0n) return 0n;
  if (n === 1n) return 1n;
  if (n === 2n) return 1n;
  if (memo[n] > 0n) return memo[n];

  if (n % 2n === 0n) {
    memo[n] = (fibo(n / 2n) * (fibo(n / 2n + 1n) + fibo(n / 2n - 1n))) % MOD;
  }

  if (n % 2n === 1n) {
    memo[n] = (fibo((n + 1n) / 2n) ** 2n + fibo((n - 1n) / 2n) ** 2n) % MOD;
  }
  return memo[n];
}

const res = fibo(N);
// console.log(N, MOD);
console.log(`${res}`);
