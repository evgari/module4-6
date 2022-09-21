'use strict';

const n = +prompt('введите число');

const isPrime = n => {
  if (Number.isNaN(n)) {
    alert('Вы ввели не число');
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(isPrime(n));

