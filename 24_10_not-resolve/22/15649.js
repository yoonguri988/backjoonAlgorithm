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

const inputData = inputTextFile("15649.txt");
let outputData = "";
// 1부터 N까지의 자연수 중 중복없이 M개를 고른 수열
const [N, M] = inputData.split(" ").map(Number);
// DFS
const nrr = Array(M).fill(0);
const visited = Array(N).fill(false);
dfs(0);

function dfs(n) {
  if (n == M) {
    return (outputData += `${nrr.join(" ")}\n`);
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      nrr[n] = i;
      visited[i] = true;
      dfs(n + 1);
      visited[i] = false;
    }
  }
}
console.log(outputData);
