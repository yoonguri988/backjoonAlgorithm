/** https://www.acmicpc.net/problem/20920 */
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

const ip = input("20920");
let op = "";
/**
 * @todo 1sec 1024MB
 * @description 영단어 암기는 괴로워 [20920]
 * 1. 자주 나오는 단어일수록 앞에
 * 2. 해당 단어의 길이가 길수로 앞에
 * 3. 알파벳 사전 순으로 앞에 있는 단어 일수록 앞에
 */

const ipData = ip.split("\r\n");
const [N, M] = ipData.shift().split(" ").map(Number);
const engWords = ipData;

let map = new Map();
for (let ew of engWords) {
  if (ew.length < M) continue;
  if (map.get(ew) >= 0) {
    map.set(ew, map.get(ew) + 1);
  } else {
    map.set(ew, 0);
  }
}
let wordArr = [];
for (let [k, v] of map) {
  let tmp = [v, k.length, k];
  wordArr.push(tmp);
}

wordArr.sort((a, b) => {
  if (a[0] != b[0]) return b[0] - a[0];
  else if (a[1] != b[1]) return b[1] - a[1];
  else {
    if (b[2] > a[2]) return -1;
    else if (b[2] < a[2]) return 1;
    else return 0;
  }
});

op = [];
for (let wa of wordArr) {
  op.push(wa[2]);
}
console.log(op.join("\n"));
