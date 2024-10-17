function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data;
  } catch (err) {
    console.log(err);
  }
}

const ip = readInput("ip/ip_10171.txt");
console.log("\\    /\\");
console.log(" )  ( ')");
console.log("(  /  )");
console.log(" \\(__)|");

console.log("|\\_/|");
console.log("|q p|   /}");
console.log('( 0 )"""\\');
console.log('|"^"`    |');
console.log("||_/=\\\\__|");
