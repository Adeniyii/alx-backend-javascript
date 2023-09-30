export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    console.log(Object.getOwnPropertySymbols(this.constructor));
    return new this.constructor[Symbol.species]();
  }
}
