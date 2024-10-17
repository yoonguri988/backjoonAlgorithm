/** https://www.acmicpc.net/problem/2231 */
const input = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./27_09_02_repeat/ip/" + addr + ".txt";
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ip = input("2231");
let op = 0;
/**
 * @todo 2sec 256MB
 * @description 분해합 [2231]
 */
const N = Number(ip);
let M = 0;
for (let i = 0; i < N; i++) {
  //각 자리수와 후보값의 합을 구하기 위한 변수
  let sum = 0;

  // 0부터 시작하는 후보값
  const candidateValue = i;

  //각 자리수를 구하기 위해서 숫자를 string으로 변환하여 계산한다.
  const stringValue = candidateValue.toString();

  for (let j = 0; j < stringValue.length; j++) {
    sum += parseInt(stringValue[j]);
  }

  sum += candidateValue;

  if (sum == N) {
    M = candidateValue;
    break;
  }
}

console.log(M);
