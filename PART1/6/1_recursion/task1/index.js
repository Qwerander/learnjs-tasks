function sumToFormula(n) {
  return n * (n + 1) / 2;
}

function sumToCicle(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumToRecursion(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

// функции идут в порядке скорости выполнения