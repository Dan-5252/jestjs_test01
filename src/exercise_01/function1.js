import * as subFunction from "./subFunction.js";
const isCool = subFunction.isCool;

function doStuff(x) {
  console.log("i am doStuff");
  return isCool(x);
}

export { doStuff };
