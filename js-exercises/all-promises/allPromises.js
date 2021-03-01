const allPromises = (args) => {
  if (!args || args.length === 0) {
    return Promise.resolve();
  }

  const results = [];
  let resolvedPromises = 0;
  return new Promise((resolve, reject) => {
    args.forEach((arg) => {
      if (typeof arg.then !== 'function') {
        arg = Promise.resolve(arg);
      }
      arg
        .then((result) => {
          results.push(result);
          resolvedPromises += 1;

          if (resolvedPromises === args.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

export { allPromises };
