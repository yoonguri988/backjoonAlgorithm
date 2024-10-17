const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_31/_16/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ip = readInput("28278.txt");
let op = "";
/**
 * 1 X : 정수 X를 스택에 넣는다
 * 2: 스택에 정수가 있다면, 맨 위 정수를 빼고 출력
 *    없다면 -1
 * 3: 스택에 들어있는 정수의 갯수
 * 4: 스택이 비어있으면 1, 아니면 0
 * 5: 스택에 정수가 있다면 맨위의 정수를 출력한다
 *    없다면 -1
 */
let [N, ...commends] = ip.split("\n");
let stack = [];
let len = 0;
for (let commend of commends) {
  commend = commend.split(" ").map(Number);
  switch (commend[0]) {
    case 1:
      stack.push(commend[1]);
      break;
    case 2:
      if (stack.length) {
        op += stack.pop() + "\n";
      } else {
        op += -1 + "\n";
      }
      break;
    case 3:
      op += +stack.length + "\n";
      break;
    case 4:
      op += (stack.length == 0 ? 1 : 0) + "\n";
      break;
    case 5:
      len = stack.length - 1;
      if (stack.length) {
        op += +stack[len] + "\n";
      } else {
        op += -1 + "\n";
      }
      break;
  }
}
console.log(op);
