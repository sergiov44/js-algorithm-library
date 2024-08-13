function getFibonacciElements(n) {
  const fElements = [0, 1];
  for (let i = 2; i < n; i++) {
      fElements[i] = fElements[i-2] + fElements[i-1];
  }
  return fElements;
}

console.log(getFibonacciElements(12));

// Big-O = O(n)
// As value of n increases, the times of execution also increase (line 4)