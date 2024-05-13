const sum = (numA, numB) => {
  if (numA === undefined || numB === undefined) {
    return new Error("method needs two defined inputs");
  }
  if (!isNumber(numA) || !isNumber(numB)) {
    return new Error("input(s) cannot be converted to numerical values");
  }
  let result = (numA - 0) + (numB - 0);
  return result;
};

const isNumber = (n) => {
  if (typeof n === 'boolean') return true;
  const regExp = /[a-zA-Z]/g;
  return !(typeof n === "object" || regExp.test(n));
};

module.exports = sum;
