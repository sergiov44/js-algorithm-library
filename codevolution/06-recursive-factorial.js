function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(12));
console.log(factorial(3));

// Big-O = O(n)