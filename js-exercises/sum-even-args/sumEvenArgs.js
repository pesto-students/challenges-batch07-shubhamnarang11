const sumEvenArgs = (...args) => {
  if (args.length === 0) {
    return 0;
  }

  return args.reduce((acc, num) => {
    if (num % 2 === 0) {
      return acc + num;
    } else {
      return acc;
    }
  }, 0);
};

export { sumEvenArgs };
