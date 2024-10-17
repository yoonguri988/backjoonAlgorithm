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

const ip = readInput("4949.txt");
let op = "";
/**
 * "(" ")" 와 짝을 이뤄야함
 * "[" "]" 와 짝을 이뤄야함
 * 1:1 매칭이며, 짝을 이루는 두 괄호가 있을 때,
 * 그 사이에 있는 문자열도 균형이 잡혀있음
 * = 입력 종료 조건으로 온점(.)하나
 */
let sentences = ip.split(".\r\n");
for (let sentence of sentences) {
  if (sentence == ".") break;
  let alphaArr = sentence.split("").filter((v) => v != " ");
  let partnerArr = alphaArr.filter((v) => "[]()".includes(v));
  let arr = [];
  for (let ps of partnerArr) {
    let len = arr.length - 1;
    if (!arr.length) arr.push(ps);
    else if (arr[len] + ps == "()" || arr[len] + ps == "[]") arr.pop();
    else if (ps == "(" || ps == "[") arr.push(ps);
    else if (ps == ")" || ps == "]") break;
  }
  op += (arr.length ? "no" : "yes") + "\n";
}
console.log(op);
