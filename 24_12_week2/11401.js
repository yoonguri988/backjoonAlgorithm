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

const iData = readText("11401");
/**
 * 이항 계수 3
 * : 범위 (1 ≤ N ≤ 4,000,000) (0 ≤ K ≤ N)
 * - 파스칼의 삼각형
 * 1 1
 * 1 2 1
 * 1 3 3 1
 * 1 4 6 4 1
 *
 * <페르마의 소정리>
 * 정수 a와 p가 있고 a가 p의 배수가 아니면서
 * p가 소수(Prime number)일 때 다음이 성립한다.
 * a의 p제곱 = a (mod p);
 */

const [N, K] = iData.split(" ").map(BigInt);
const MOD = 1_000_000_007n;
let numerator = 1n;
let denominator = 1n;

for (let i = 0n; i < K; i++) {
  numerator = (numerator * (N - i)) % MOD;
  denominator = (denominator * (K - i)) % MOD;
}

const modPow = (a, p) => {
  if (p == 1) return a % MOD;
  let res = modPow(a, p / 2n);
  let pow = res * res;
  let mod = pow % MOD;
  if (p % 2n == 0) return mod;
  else return (mod * a) % MOD;
};

const inverse = modPow(denominator, 1_000_000_005n);
console.log(`${(numerator * inverse) % MOD}`);

// const dp = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
// dp[0][0] = 1;
// dp[1][0] = 1;
// dp[1][1] = 1;
// for (let i = 2; i <= N; i++) {
//   dp[i][0] = 1;
//   for (let j = 1; j < i; j++) {
//     dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % NMG;
//   }
//   dp[i][i] = 1;
// }

// function dfs(n, k) {
//   if (k === 0) return 1;
//   if (k === 1) return n % NMG;
//   if (n === k) return 1;
//   return (dfs(n - 1, k) + dfs(n - 1, k - 1)) % NMG;
// }
// let res = dfs(N, K);
// console.log(`${N} ${K}`);
