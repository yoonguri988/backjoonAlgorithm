const readText = (fileNm) => {
  const fs = require("fs");
  let addr;
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = `./25_01_week2/ip/${fileNm}.txt`;
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e.message);
  }
};

// 오큰수
const ip = readText("17298");
const [[N], NGE] = ip.split("\r\n").map((v) => v.split(" ").map(Number));

let stack = [];
for (let i = 0; i < N; i++) {
  while (stack.length && NGE[stack[stack.length - 1]] < NGE[i]) {
    NGE[stack.pop()] = NGE[i];
  }
  stack.push(i);
}
while (stack.length) {
  NGE[stack.pop()] = -1;
}
console.log(NGE.join(" "));

/**
 * [실패] : 시간 초과
 *
 * for (let i = 0; i < N; i++) {
 *   const Ai = ARR[i];
 *   for (let j = i + 1; j < N; j++) {
 *     if (Ai < ARR[j]) {
 *       NGE[i] = ARR[j];
 *       break;
 *     }
 *   }
 * }
 * console.log(NGE.join(" "));
 */

/**
 * [실패]: 메모리 초과
 *
 * for (let i = 0; i < N; i++) {
 *   let stack = [];
 *   const Ai = ARR[i];
 *   for (let j = i + 1; j < N; j++) {
 *     if (Ai < ARR[j]) stack.push(ARR[j]);
 *   }
 *   if (stack.length > 0) NGE[i] = stack[0];
 * }
 * console.log(NGE.join(" "));
 */
