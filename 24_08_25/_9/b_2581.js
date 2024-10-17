function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_25/_9/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("2581.txt");
let op = "";

const [N, M] = ip
  .trim()
  .split("\n")
  .map((n) => n * 1);

let arr = Array(M + 1).fill(0);
arr[0] = 1;
arr[1] = 1;

for (let i = 2; i < Math.sqrt(arr.length); i++) {
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] == 1) continue;
    if (j % i == 0 && i != j) arr[j] = 1;
  }
}

let [sum, min] = [0, M];
for (let i = N; i <= M; i++) {
  if (arr[i] == 0) {
    sum += i;
    if (min > i) min = i;
  }
}

if (sum == 0) op = "-1";
else {
  op += `${sum}\n${min}`;
}
console.log(op);
