// You can change the `args`
function bind(...args) {
  const [func, obj] = [...args];
  return function (...params) {
    return func.call(obj, ...params);
  };
}

module.exports = { bind };
