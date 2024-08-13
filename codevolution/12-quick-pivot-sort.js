function pivotSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1]
  const left = []
  const right = []
  
  for (let i = 0; i < arr.length - 1; i++) {    
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...pivotSort(left), pivot, ...pivotSort(right)]
}

const arr = [-6, 20, 8, -2, 4]
console.log(pivotSort(arr)) // [-6, -2, 4, 8, 20]

// Big-O = O(n^2)
// Avg Case = O(nlogn)