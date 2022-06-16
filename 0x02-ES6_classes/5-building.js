/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.getAllFuncs(this).indexOf('evacuationWarningMessage') === -1) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  getAllFuncs(toCheck) {
    const props = [];
    let obj = this;
    do {
      props.push(...Object.getOwnPropertyNames(obj));
      // eslint-disable-next-line no-cond-assign
    } while ((obj = Object.getPrototypeOf(obj)));

    // eslint-disable-next-line array-callback-return
    return props.sort().filter((e, i, arr) => {
      if (e !== arr[i + 1] && typeof toCheck[e] === 'function') return true;
    });
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {}
}
