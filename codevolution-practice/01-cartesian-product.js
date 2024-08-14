function cartesianProduct(arrA, arrB) {
  const arrAB = [];
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      arrAB.push([arrA[i], arrB[j]]);
    }
  }
  return arrAB;
}

const A = [1, 2];
const B = [3, 4];
// AB = [ [1, 3], [1, 4], [2, 3], [2, 4] ]

const C = [1, 2];
const D = [3, 4, 5];
// CD = [ [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5] ]

// console.log(cartesianProduct(A, B))
console.log(cartesianProduct(C, D));

// Big-O = O(mn)
