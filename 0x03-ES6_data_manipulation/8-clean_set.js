// returns a string of all the set values
// that start with a specific string (startString).
export default function cleanSet(set, startString) {
  return startString !== ''
    ? [...set]
      .filter((item) => item.slice(0, startString.length) === startString)
      .map((item) => item.slice(startString.length))
      .reduce((prev, cur) => `${prev}-${cur}`, '')
      .slice(1)
    : '';
}
