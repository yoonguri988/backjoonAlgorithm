function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_24/_7/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("2738.txt");
let op = "";

const [NM, ...matrixArr] = ip.trim().split("\r\n");
const [N, M] = NM.trim().split(" ");

matrixArr.forEach((v, i, arr) => {
  arr[i] = arr[i].split(" ").map((n) => n * 1);
});

const matArr1 = matrixArr.splice(0, N);
const matArr2 = matrixArr.splice(0, N);

for (let i = 0; i < N; i++) {
  let tmp = [];
  for (let j = 0; j < M; j++) {
    tmp.push(matArr1[i][j] + matArr2[i][j]);
  }
  op += tmp.join(" ") + "\n";
}
console.log(op);
