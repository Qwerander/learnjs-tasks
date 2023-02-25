// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true

// возможно для этого функции должны возвращать ссылку на один и тот же объект

let obj = {};

function A() {
  return obj
}

function B() {
  return obj
}

alert(new A() == new B()); // true