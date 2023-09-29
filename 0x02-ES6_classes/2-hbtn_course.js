export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(nm) {
    if (typeof nm !== 'string') throw new Error('TypeError: Name must be a string');
    this._name = nm;
  }

  set length(len) {
    if (typeof len !== 'number') throw new Error('Length must be a number');
    this._name = len;
  }

  set students(st) {
    if (!Array.isArray(st)) throw new Error('Students must be an array of strings');
    if (!st.every((s) => typeof s === 'string')) throw new Error('Students must be an array of strings');
    this._students = st;
  }
}
