/** 1463 1로 만들기 */
const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_week3/_23/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

const ip = readInput("1463.txt");
let op = "";

/** 풀이 */
// 1부터 x까지의 연산 최소화
// 부분합을 이용, 연산의 최솟값
// X는 최대 10^6이므로 바텀업 - tabulation
const N = Number(ip);
const dp = Array(N + 1).fill(0);
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= N; i++) {
  // -1 하는 경우 => 이전 값의 경우의 수 +1
  dp[i] = dp[i - 1] + 1;
  // 3으로 나눠지는 경우 => 3으로 나눈 값의 경우의 수 + 1
  if (i % 3 == 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  // 2으로 나눠지는 경우 => 2으로 나눈 값의 경우의 수 + 1
  if (i % 2 == 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
}
console.log(dp[N]);

/* 메모리 초과
const N = Number(ip);
let cnt = 0;
let dp = [[N]];

for (let i = 0; i < dp.length; i++) {
  let arr = [];
  for (let j = 0; j < dp[i].length; j++) {
    if (dp[i][j] == 0) continue;
    if (dp[i][j] == 1) break;

    tmp = Array(2).fill(0);
    if (dp[i][j] % 2 == 0) tmp[0] = dp[i][j] / 2;
    if (dp[i][j] % 3 == 0) tmp[0] = dp[i][j] / 3;
    tmp[1] = dp[i][j] - 1;
    arr = [...arr, ...tmp];
  }
  cnt++;
  if (Math.min(...arr) == 1) break;
  dp[cnt] = [...arr];
}
console.log(`${cnt}`);
*/
