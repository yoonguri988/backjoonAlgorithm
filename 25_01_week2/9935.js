const readText = (fileNm) => {
  const fs = require("fs");
  let addr;
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = `./25_01_week2/ip/${fileNm}.txt`;
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e.message);
  }
};

const ip = readText("9935");
const [str, bomb] = ip.split("\r\n");

let stack = [];
const check = () => {
  if (stack.length < bomb.length - 1) return false;
  for (let i = 1; i < bomb.length; i++) {
    if (bomb[bomb.length - 1 - i] != stack[stack.length - i]) {
      return false;
    }
  }
  return true;
};

for (let i = 0; i < str.length; i++) {
  if (str[i] === bomb[bomb.length - 1] && check()) {
    for (let j = 0; j < bomb.length - 1; j++) {
      stack.pop();
    }
  } else {
    stack.push(str[i]);
  }
}
// console.log(stack);
console.log(stack.length ? stack.join("") : "FRULA");

// console.log(strArr);
// console.log(strArr.join("").includes(bombStr));
// console.log(bombStr);
