/** https://www.acmicpc.net/problem/25501 */
const input = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_09_03/_21/ip/" + addr + ".txt";
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ip = input("25501");
let op = "";
/**
 * @todo 2sec 1024MB
 * @description 재귀의 귀재 [25501]
 * 팰린드롬인지 판별
 */

let cnt = 0;
const recursion = (cArr, l, r) => {
  cnt++;
  if (l >= r) return 1;
  else if (cArr[l] != cArr[r]) return 0;
  else return recursion(cArr, l + 1, r - 1);
};

const isPalindrome = (cArr) => {
  return recursion(cArr, 0, cArr.length - 1);
};

const [N, ...TCs] = ip.split("\r\n");
for (let i = 0; i < N; i++) {
  let tc = TCs[i];
  op += `${isPalindrome(tc)} ${cnt}\n`;
  cnt = 0;
}
console.log(op);
