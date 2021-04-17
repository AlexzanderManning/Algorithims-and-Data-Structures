//Solution t = O(log n) | s = O(1)

function binarySearch(A, key) {
  let low = 0;
  let high = A.length - 1;
  let mid;

  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (A[mid] === key) {
      return mid;
    } else if (A[mid] > key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));

// Recursive Solution t = O(log n) | s = O(n)
// Linear space becuase each recursive call consumes memory from being put on the call stack.

function binarySearch2(A, key) {
  let low = 0;
  let high = A.length - 1;
  return binarySearchRecursion(A, key, low, high);
}

function binarySearchRecursion(A, key, low, high) {
  if (low > high) {
    return -1;
  }
  let mid = low + Math.floor((high - low) / 2);

  if (A[mid] === key) {
    return mid;
  } else if (A[mid] < key) {
    low = mid + 1;
    return binarySearchRecursion(A, key, low, high);
  } else {
    high = mid - 1;
    return binarySearchRecursion(A, key, low, high);
  }
}

console.log(binarySearch2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));

//Lessons learned
// Array is 0 indexed!duh
// Recursive functions take up memory on the call stack.
//Recursive functions should be used as a last resort due to thier complexity and memory consumption.
// If using 2 recurive functions you have to return the b function.