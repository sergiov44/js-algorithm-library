function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1; // j is Index of sorted element
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

const arr = [-6, 20, 8, -2, 4];
insertionSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]

// Big-O = O(n^2)