export default function appendToEachArrayValue(array, appendString) {
  const appendedArray = [];
  for (const idx of array) {
    const value = idx;
    appendedArray.push(appendString + value);
  }

  return appendedArray;
}
