function getDigits (n) {
  if (n === 0) return 1;
  return Math.floor(Math.log10(Math.abs(n)) + 1); // or return Math.abs(n).toString().length;
}

console.log(getDigits(13124)) // 5
console.log(getDigits(0)) // 1
console.log(getDigits(-12381428)) // 8
console.log(getDigits(12)) // 2
console.log(getDigits(42)) // 2
console.log(getDigits(1000)) // 4
console.log(getDigits(136)) // 3
console.log(getDigits(1000000000)) // 10
console.log(getDigits(2147483647)) // 10
console.log(getDigits(-2147483647)) // 10