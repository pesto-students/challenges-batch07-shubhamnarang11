function balancedBraces(str) {
  const mappedBrackets = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const bracketStack = [];
  for (const char of str) {
    if (Object.values(mappedBrackets).includes(char)) {
      bracketStack.push(char);
    } else if (bracketStack[bracketStack.length - 1] === mappedBrackets[char]) {
      bracketStack.pop();
    }
  }
  return bracketStack.length === 0;
}

export { balancedBraces };
