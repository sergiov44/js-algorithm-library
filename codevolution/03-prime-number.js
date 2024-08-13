/* // SV
function isPrime(n) {
  return n % 2 === 0 || n % 3 === 0 || n % 5 === 0 ? false : true;
}

// GPT-4
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
} */

// Codevolution
function isPrime(n) {
  if (n <= 1) return false; // 1 or less are not prime numbers
  if (n <= 3) return true; // 2 and 3 are prime numbers

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}

console.log(isPrime(2));
console.log(isPrime(151));
console.log(isPrime(994));
console.log(isPrime(997));
console.log(isPrime(11));
console.log(isPrime(9));
console.log(isPrime(23));
console.log(isPrime(994));
console.log(isPrime(997));
