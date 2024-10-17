/** https://www.acmicpc.net/problem/1010 */
const input = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_09_03/_20/ip/" + addr + ".txt";
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ip = input("1037");
let op = "";
/**
 * @todo 2sec 512MB
 * @description 약수  [1037]
 */
let [N, nums] = ip.split("\n");
nums = nums.split(" ").map(Number);
nums.sort((a, b) => a - b);
if (nums.length == 1) op += Math.pow(nums.pop(), 2);
else op += nums.shift() * nums.pop();
console.log(op);
