function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
  if (left > right) {
    return -1;
  }
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return search(arr, target, mid + 1, right);
  } else {
    return search(arr, target, left, mid - 1);
  }
}

// Big-O = O(log(n))

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)) // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)) // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)) // -1