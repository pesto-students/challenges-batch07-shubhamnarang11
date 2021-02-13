const sumEvenArgs = (...args) => {
  if (args.length === 0) {
    return 0;
  }

  const evenArgs = [...args].filter((arg) => typeof arg === 'number' && arg % 2 === 0);

  return evenArgs.length !== 0 ? evenArgs.reduce((acc, num) => acc + num, 0) : 0;
};

export { sumEvenArgs };
