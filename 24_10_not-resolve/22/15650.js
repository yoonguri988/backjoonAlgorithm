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

const inputData = inputTextFile("15650.txt");
const outputData = solution(...inputData.split(" ").map(Number));
console.log(outputData);

function solution(N, M) {
  let result = "";
  let arr = Array(M).fill(0);
  let visited = Array(N + 1).fill(false);

  dfs(0);

  function dfs(n) {
    if (n == M) {
      result += `${arr.join(" ")}\n`;
      return;
    }

    for (let i = 1; i <= N; i++) {
      // 고른 수열을 오름차순
      if (!visited[i]) {
        arr[n] = i;
        if (n == 0 || arr[n - 1] < arr[n]) {
          visited[i] = true;
          dfs(n + 1);
          visited[i] = false;
        }
      }
    }
  }

  return result;
}
