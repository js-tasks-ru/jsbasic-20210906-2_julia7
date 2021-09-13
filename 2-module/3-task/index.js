let calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = +prompt('Print first number', '')
    this.b = +prompt('Print second number', '')
  },
  sum() {
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
