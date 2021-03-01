const allSettled = (args) => {
  if (!args || args.length === 0) {
    return Promise.resolve();
  }

  const results = [];
  let settledPromises = 0;

  return new Promise((resolve) => {
    args.forEach((arg) => {
      if (typeof arg.then !== 'function') {
        arg = Promise.resolve(arg);
      }
      arg
        .then((result) => {
          results.push({ status: 'fulfilled', value: result });
          settledPromises += 1;

          if (settledPromises === args.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          results.push({ status: 'rejected', value: err });
          settledPromises += 1;

          if (settledPromises === args.length) {
            resolve(results);
          }
        });
    });
  });
};

export { allSettled };
