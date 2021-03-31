class Cycled {
  constructor(cycledArray) {
    this.cycledArray = cycledArray;
    this.index = 0;
  }

  *iterator(arr) {
    let i;
    for (i = this.index; i < arr.length; i++) {
      yield arr[i];
    }

    if (this.index !== 0) {
      for (i = 0; i < this.index; i++) {
        yield arr[i];
      }
    }
  }
  get index() {
    return this._index;
  }

  set index(value) {
    if (value >= 0) {
      this._index = value;
    }
  }

  current() {
    return this.cycledArray[this.index];
  }

  next() {
    this.index =
      this.index === this.cycledArray.length - 1 ? 0 : this.index + 1;
    return this.cycledArray[this.index];
  }

  previous() {
    this.index =
      this.index === 0 ? this.cycledArray.length - 1 : this.index - 1;
    return this.cycledArray[this.index];
  }

  indexOf(value) {
    return this.cycledArray.findIndex((ele) => ele === value);
  }

  step(stepValue) {
    const arrIndex = this.index + stepValue;
    return this.cycledArray[
      arrIndex < 0
        ? 0
        : arrIndex > this.cycledArray.length - 1
        ? this.cycledArray.length - 1
        : arrIndex
    ];
  }

  reversed() {
    return this.iterator(
      JSON.parse(JSON.stringify(this.cycledArray)).reverse()
    );
  }

  [Symbol.iterator]() {
    return this.iterator(this.cycledArray);
  }
}
export { Cycled };
