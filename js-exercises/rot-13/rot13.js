function rot13(...args) {
  if (args.length === 0) {
    return false;
  }
  let decodedString = '';
  const alphabetACharCode = 'A'.charCodeAt(0);
  for (const arg of args) {
    if (arg.trim() && typeof arg === 'string') {
      for (const letter of arg) {
        if (letter >= 'A' && letter <= 'Z') {
          decodedString += String.fromCharCode(
            letter.charCodeAt(0) <= alphabetACharCode + 12 ? letter.charCodeAt(0) + 13 : letter.charCodeAt(0) - 13);
        } else {
          decodedString += letter;
        }
      }
    }
  }
  return decodedString;
}

export {
  rot13,
};
