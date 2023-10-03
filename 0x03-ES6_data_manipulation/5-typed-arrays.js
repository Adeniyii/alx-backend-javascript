export default function createInt8TypedArray(length, position, value) {
  if (position + 1 > length) throw new Error('Position outside range');

  const buf = new ArrayBuffer(length);
  // const view = new Uint8Array(buf)
  const view = new DataView(buf, 0, length);

  view.setInt8(position, value);
  // view.set([value], position)
  return view;
}
