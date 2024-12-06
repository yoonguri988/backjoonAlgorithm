const readText = (addr) => {
  const fs = require("fs");
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = `./24_12_week1/ip/${addr}.txt`;

  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e.message);
    return;
  }
};

const iData = readText("1629");
/**
 * 1629 곱셈
 * 자연수 A를 B번 곱한 수
 * (단, C로 나눈 나머지를 구한다)
 *
 * 분할 정복 => 재귀
 */

const [A, B, C] = iData.split(" ").map(BigInt);
const pow = (exponent) => {
  if (exponent === 1n) return A % C;
  const half = pow(exponent / 2n) % C;
  if (exponent % 2n === 0n) {
    return (half * half) % C;
  }
  return (half * half * (A % C)) % C;
};
console.log(`${pow(B).toString()}`);
