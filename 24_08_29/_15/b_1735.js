function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_29/_15/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("1735.txt");
let op = "";

let nums = ip.split("\n");
let arr = [];
for (let num of nums) {
  let [n1, n2] = num.split(" ").map(Number);
  arr.push(n1);
  arr.push(n2);
}
let [A, B, C, D] = [...arr];
//b와 d의 최소공배수
let gcd = (a, b) => {
  if (b == 0) return a;
  return gcd(b, a % b);
};
let lcm = (B * D) / gcd(B, D);
let [son, mom] = [(A * lcm) / B + (C * lcm) / D, lcm];
[son, mom] = [son / gcd(son, mom), mom / gcd(son, mom)];
console.log(son, mom);
