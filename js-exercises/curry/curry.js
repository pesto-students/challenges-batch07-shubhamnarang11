function curry(func) {
  return function partialCurry(...args) {
    if (args.length >= func.length) {
      return func(...args);
    }
    return function (...moreArgs) {
      return partialCurry.call(this, ...args.concat(moreArgs));
    };
  };
}

export { curry };
