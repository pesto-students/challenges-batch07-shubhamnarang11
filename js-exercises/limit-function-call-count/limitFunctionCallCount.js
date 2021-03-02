const limitFunctionCallCount = (...args) => {
  const [func, noOfCalls] = args;
  if (args.length > 0 && (typeof func !== 'function' || Number.isNaN(noOfCalls))) {
    throw new Error('Given arguments are not of correct type!!');
  }

  let countFunctionCall = 0;

  return (...callbackArgs) => {
    if (countFunctionCall === noOfCalls) {
      return null;
    }
    countFunctionCall += 1;
    return func(...callbackArgs);
  };
};

export { limitFunctionCallCount };
