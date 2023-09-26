export default function iterateThroughObject(reportWithIterator) {
  let out = '';
  const sep = ' | ';

  let i = 0;
  for (const v of reportWithIterator) {
    if (i !== 0) {
      out = out.concat(sep);
    }
    out = out.concat(v);
    i += 1;
  }
  return out;
}
