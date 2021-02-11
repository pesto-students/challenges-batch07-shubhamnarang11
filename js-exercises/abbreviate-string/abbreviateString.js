import { isString } from 'util';

function abbreviateString(str) {
  if (isString(str)) {
    const words = str.split(' ');

    return words.length > 1 ? `${words[0]} ${words[words.length - 1][0].toUpperCase()}.` : words[0];
  } else {
    throw new Error();
  }
}

export { abbreviateString };
