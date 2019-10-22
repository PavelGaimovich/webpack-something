export default class Car {
  constructor(name) {
    this.name = name;
  }

  sound() {
    return `${ this.name } say Wroooo!`;
  }
}
