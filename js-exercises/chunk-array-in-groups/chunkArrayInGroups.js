function chunkArrayInGroups(array, chunkSize) {
  const chunkedArray = [];
  let chunkArraySize = 0;
  while (chunkArraySize < array.length) {
    chunkedArray.push(array.slice(chunkArraySize, chunkArraySize + chunkSize));

    chunkArraySize = chunkedArray.length * chunkSize;
  }

  return chunkedArray;
}

export { chunkArrayInGroups };
