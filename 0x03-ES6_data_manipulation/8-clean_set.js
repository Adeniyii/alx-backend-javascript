export default function cleanSet(set, startStr) {
  if (!startStr || !set) return ''

  return Array.from(set).reduce((acc, el, idx) => {
    let prefix = acc;
    if (startStr.trim() && el.startsWith(startStr)) {
      if (idx > 0) { prefix += '-'; }
      return prefix + el.slice(startStr.length);
    }
    return acc;
  }, '');
}
