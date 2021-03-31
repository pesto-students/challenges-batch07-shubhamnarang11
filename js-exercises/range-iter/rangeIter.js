function rangeIter(lb, ub) {
  if (!lb || !ub) {
    throw new TypeError('undefined is not a number');
  }

  if (isNaN(lb)) {
    throw new TypeError(`${lb} is not a number`);
  }
  if (isNaN(ub)) {
    throw new TypeError(`${ub} is not a number`);
  }
  if (lb > ub) {
    return [];
  }

  if (lb === ub) {
    return [lb];
  }
  const iterator = function () {
    return {
      next() {
        if (lb <= ub) {
          return { value: lb++, done: false };
        }
        return { value: lb, done: true };
      },
    };
  };

  return {
    [Symbol.iterator] : iterator
  };
}

export { rangeIter };
