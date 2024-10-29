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

const inputData = inputTextFile("15652.txt");
const [N, M] = inputData.split(" ").map(Number);
const outputData = solution(N, M);
console.log(outputData);

function solution(N, M) {
  // 같은 수 여러번 사용가능
  // 비내림차순
  let result = "";
  let arr = Array(M).fill(0);

  const dfs = (n) => {
    if (n == M) {
      result += `${arr.join(" ")}\n`;
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (n == 0 || arr[n - 1] <= i) {
        arr[n] = i;
        dfs(n + 1);
      }
    }
  };
  dfs(0);

  return result;
}
