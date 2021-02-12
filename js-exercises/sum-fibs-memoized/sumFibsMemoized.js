function sumFibs(num) {
  if (num < 1) {
    return 0;
  }
  let firstNum = 1;
  let secondNum = 1;
  let sum = firstNum + secondNum;
  let oddFibSeriesSum = 2;
  while (sum <= num) {
    if (sum % 2 !== 0) {
      oddFibSeriesSum += sum;
    }
    firstNum = secondNum;
    secondNum = sum;
    sum = firstNum + secondNum;
  }
  return oddFibSeriesSum;
}

function cacheFunction(func) {
  const cachedObject = {};

  return function (param) {
    if (!cachedObject.hasOwnProperty(param)) {
      cachedObject[param] = func(param);
    }
    return cachedObject[param];
  };
}

export { sumFibs, cacheFunction };
