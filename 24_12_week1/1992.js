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

const iData = readText("1992");
/**
 * 1992 쿼드트리
 * white = 0 black = 1
 * *모두 0이면, 0으로 압축
 * *모두 1이면, 1로 압축
 * *둘다 아니라면, 4분할로 나눠 확인
 * result = 압축 결과를 괄호 안에 묶어서 표현
 */
const data = iData.split("\r\n");
const N = data.shift();
const POINT_ARR = [...data].map((v) => v.split("").map(Number));

let result = "";
function dfs(x, y, n) {
  let cnt = 0; // 해당 범위의 1의 갯수
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (POINT_ARR[i][j]) cnt++;
    }
  }

  if (!cnt) result += "0";
  else if (cnt == n * n) result += "1";
  else {
    result += "(";
    dfs(x, y, n / 2);
    dfs(x, y + n / 2, n / 2);
    dfs(x + n / 2, y, n / 2);
    dfs(x + n / 2, y + n / 2, n / 2);
    result += ")";
  }
}

dfs(0, 0, N);

console.log(`${N}`);
// console.log(`${POINT_ARR.join("\n")}`);
console.log(`${result}`);
// console.log(`ans: ((110(0101))(0010)1(0001))`);
