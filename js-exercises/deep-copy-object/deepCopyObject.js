const cloneObject = (obj, copyDescriptors) => {
  const copyOfObj = {};

  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      copyOfObj[key] = cloneObject(obj[key], copyDescriptors);
    } else {
      copyOfObj[key] = obj[key];
    }
    if (copyDescriptors) {
      const keyDescriptors = Object.getOwnPropertyDescriptor(obj, key);
      delete keyDescriptors.value;

      Object.defineProperty(copyOfObj, key, keyDescriptors);
    }
  }
  return copyOfObj;
};

const deepCopyObject = (objToCopy, copyDescriptors = false) => {
  if (typeof objToCopy !== 'object' || objToCopy === null) {
    return objToCopy;
  }
  return cloneObject(objToCopy, copyDescriptors);
};

export { deepCopyObject };
