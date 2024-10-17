const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_week1/_22/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const ip = readInput("15649.txt");
let op = "";

/**
 * 1부터 N까지의 자연수 중에서 중복없이 M개를 고른 수열
 */
const [N, M] = ip.split(" ").map(Number);
let seq = Array(M).fill(0);
let visited = Array(N).fill(false);

function dfs(k) {
  if (k === M) {
    return (op += seq.join(" ") + "\n");
  }
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      seq[k] = i;
      visited[i] = true;
      dfs(k + 1);
      visited[i] = false;
    }
  }
}

dfs(0);
console.log(op);
