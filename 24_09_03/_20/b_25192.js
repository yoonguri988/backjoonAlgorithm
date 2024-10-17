/** https://www.acmicpc.net/problem/25192 */
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

const ip = input("25192");
let op = 0;
/**
 * @todo 1sec 1024MB
 * @description 인사성 밝은 곰곰이  [25192]
 * -ENTER 새로운 사람이 입장했을때
 * -그외는 채팅을 입력한 유저네임
 * = 새로운 사람이 입장한 후 "첫" 채팅은 곰곰티콘
 */
const [N, ...users] = ip.split("\r\n");
let set = new Set();
for (let i = 0; i < N; i++) {
  const user = users[i];
  if (user === "ENTER") {
    set.clear();
    continue;
  }
  if (!set.has(user)) {
    set.add(user);
    op++;
  }
}
console.log(op);
