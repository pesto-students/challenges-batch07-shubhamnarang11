function debounce(debouncedFn, delayTime) {
  if (typeof debouncedFn !== 'function' || isNaN(delayTime)) {
    throw new Error('You have passed illegal arguments, Please check!!!');
  }

  let debouncedFuncTimer;

  return function (...args) {
    if (debouncedFuncTimer) clearTimeout(debouncedFuncTimer);

    debouncedFuncTimer = setTimeout(() => {
      debouncedFn.apply(this, args);
    }, delayTime);
  };
}

export { debounce };
