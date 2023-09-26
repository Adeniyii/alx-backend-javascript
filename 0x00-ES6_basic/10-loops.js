export default function appendToEachArrayValue(array, appendString) {
  const out = [];

  for (const v of array) {
    out.push(appendString + v);
  }

  return out;
}
