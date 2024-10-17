function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_27/_12/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("2231.txt");
let op = "0";

const N = Number(ip);
/**
 * 가장 작은 생성자, 없을 수도 있음
 */
for (let i = 0; i < N; i++) {
  // 각 자릿수와 후보값의 합을 구하기위한 변수
  let sum = 0;
  // 0부터 시작하는 후보값
  const candiValue = i;

  // 각 자릿수를 구하기 위해서 숫자를 string으로 변환
  const strValue = candiValue.toString();
  for (let sv of strValue) {
    sum += Number(sv);
  }
  sum += candiValue;
  if (sum == N) {
    op = candiValue;
    break;
  }
}
console.log(op);
