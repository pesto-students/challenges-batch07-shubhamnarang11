function duplicateLetters(...args) {
  const result = Object.values([...args[0]].reduce((obj, val) => {
    obj[val] = obj[val] ? obj[val] + 1 : 1;
    return obj;
  }, {})).reduce((max, val) => { return val > max ? val : max; }, 0);

  return result === 1 ? false : result;
}

export {
  duplicateLetters,
};
