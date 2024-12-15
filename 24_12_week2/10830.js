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

const iData = readText("10830");
/**
 * 10830 행렬 제곱
 * 크기가 N*N인 행렬 A가 주어진다.
 * 이때, A의 B제곱을 구하는 프로그램
 * * A^B의 각 원소를 1,000으로 나눈 나머지
 * * 2 ≤ N ≤  5, 1 ≤ B ≤ 100,000,000,000
 */
const INPUT = iData.split("\r\n");
const [N, B] = INPUT.shift()
  .split(" ")
  .map((v, i) => {
    if (i === 1) return BigInt(v);
    return Number(v);
  });
const NN_ARR = [...INPUT].map((v) => v.split(" ").map(Number));

const mulMatrix = (mat1, mat2) => {
  const res = Array.from(Array(N), () => Array(N).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let z = 0; z < N; z++) {
        res[i][j] += (mat1[i][z] * mat2[z][j]) % 1000;
      }
      // res[i][j] %= 1000;
    }
  }
  return res;
};

const power = (Arr, b) => {
  if (b === 1n) return Arr;
  else {
    // A가 될 때까지 둘로 나눔
    const tmp = power(Arr, b / 2n);
    if (b % 2n === 0n) {
      // 짝수
      return mulMatrix(tmp, tmp);
    } else {
      // 홀수
      return mulMatrix(mulMatrix(tmp, tmp), Arr);
    }
  }
};
const answer = power(NN_ARR, B);
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    answer[i][j] %= 1000;
  }
}
console.log(answer.map((v) => v.join(" ")).join("\n"));

// let rs = `${N} ${B}\n`;
// rs += `${NN_ARR.join("\n")}\n`;
// rs += `${answer.join("\n")}\n`;
// console.log(rs);
