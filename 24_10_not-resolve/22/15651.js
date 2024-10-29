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

const inputData = inputTextFile("15651.txt");
const outputData = solution(...inputData.split(" ").map(Number));
console.log(outputData);

function solution(N, M) {
  //같은 수를 여러번 사용가능
  let result = "";
  let arr = Array(M).fill(0);
  const dfs = (n) => {
    if (n === M) {
      result += `${arr.join(" ")}\n`;
      return;
    }

    for (let i = 1; i <= N; i++) {
      arr[n] = i;
      dfs(n + 1);
    }
  };
  dfs(0);

  return result;
}
