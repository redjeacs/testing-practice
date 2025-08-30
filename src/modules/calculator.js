export default class Calculator {
  constructor() {}

  add(x, y) {
    return Math.round((x + y) * 1000) / 1000;
  }

  subtract(x, y) {
    return Math.round((x - y) * 1000) / 1000;
  }

  multiply(x, y) {
    return Math.round(x * y * 1000) / 1000;
  }

  divide(x, y) {
    return Math.round((x / y) * 1000) / 1000;
  }
}
