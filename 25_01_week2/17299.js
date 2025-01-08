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

// 오등큰수
const ip = readText("17299");
const [[N], NGF] = ip.split("\r\n").map((v) => v.split(" ").map(Number));

const map = new Map();
for (let v of NGF) {
  if (!map.has(v)) map.set(v, 0);
  map.set(v, map.get(v) + 1);
}
// console.log(map);

let stack = [];
for (let i = 0; i < N; i++) {
  while (
    stack.length &&
    map.get(NGF[stack[stack.length - 1]]) < map.get(NGF[i])
  ) {
    NGF[stack.pop()] = NGF[i];
  }
  stack.push(i);
}

while (stack.length) {
  NGF[stack.pop()] = -1;
}
console.log(NGF.join(" "));

// console.log(N);
// console.log(NGF);
