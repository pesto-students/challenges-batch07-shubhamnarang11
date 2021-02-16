function removeFalsyValues(array) {
  return array.filter(ele => !!ele);
}

export {
  removeFalsyValues,
};
