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

const iData = readText("2740");
/**
 * N*M크기의 행렬 A
 * M*K크기의 행렬 B
 * 두 행렬을 곱하는 프로그램
 */

const NNrr = iData.split("\r\n");
const [N, MA] = NNrr.shift().split(" ").map(Number);
const Arr = Array.from(Array(N), () => Array(MA));
for (let i = 0; i < N; i++) {
  Arr[i] = NNrr.shift().split(" ").map(Number);
}
const [MB, K] = NNrr.shift().split(" ").map(Number);
const Brr = Array.from(Array(MB), () => Array(K));
for (let i = 0; i < MB; i++) {
  Brr[i] = NNrr.shift().split(" ").map(Number);
}

const ResArr = Array.from(Array(N), () => Array(K).fill(0));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < K; j++) {
    let ans = 0;
    for (let z = 0; z < MA; z++) {
      ans += Arr[i][z] * Brr[z][j];
    }
    ResArr[i][j] = ans;
  }
}

// console.log(`${N}, ${MA}`);
// console.log(`${Arr.join("\n")}`);
// console.log(`${MB}, ${K}`);
// console.log(`${Brr.join("\n")}`);
console.log(
  `${ResArr.map((v) => {
    return v.join(" ");
  }).join("\n")}`
);
