function inputTextFile(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_not-resolve/inputTextFile/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const inputData = inputTextFile("14888.txt");
/**
 * N
 * Arr
 * [+, -, *, /]
 */
const iArr = inputData.split("\n");
const N = Number(iArr.shift());
const Arr = iArr.shift().split(" ").map(Number);
const oper = iArr.shift().split(" ").map(Number);

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
let tmp = [];

function dfs(n) {
  if (n == N - 1) {
    let num1 = Arr[0];
    for (let i = 0; i < tmp.length; i++) {
      let op = tmp[i];
      let num2 = Arr[i + 1];
      switch (op) {
        case 0:
          num1 += num2;
          break;
        case 1:
          num1 -= num2;
          break;
        case 2:
          num1 *= num2;
          break;
        case 3:
          if (num1 > 0) num1 = Math.floor(num1 / num2);
          else num1 = Math.floor(-num1 / num2);
          break;
      }

      max = Math.max(max, num1);
      min = Math.min(min, num1);
    }
    return;
  }

  for (let i = 0; i < oper.length; i++) {
    if (oper[i] > 0) {
      oper[i] -= 1;
      tmp.push(i);
      dfs(n + 1);
      oper[i] += 1;
      tmp.pop();
    }
  }
}

dfs(0);
console.log(`${max}\n${min}`);
