export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
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
    if (typeof nm !== 'string') throw 'TypeError: Name must be a string';
    this._name = nm;
  }

  set length(len) {
    if (typeof len !== 'number') throw 'TypeError: Length must be a number';
    this._length = len;
  }

  set students(st) {
    if (!Array.isArray(st)) throw 'TypeError: Students must be an array of strings';
    if (!st.every((s) => typeof s === 'string')) throw 'TypeError: Students must be an array of strings';
    this._students = st;
  }
}
