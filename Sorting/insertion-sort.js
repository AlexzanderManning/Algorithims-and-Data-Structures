function insertionSort(A) {
  for (let j = 1; j < A.length; j++) {
    //Init key to J
    let key = A[j];
    //Move i to 1 - j;
    let i = j - 1;

    while (i >= 0 && A[i] > key) {
      // Swap both values then move i
      //Move A[i] to where K was.
      A[i + 1] = A[i];
      // reassign i + 1 = key to complete the swap.
      A[i] = key;
      //Back up i one spot
      i = i - 1;

      /* Alternate way to manage pointers - resasign, move i then complete
        //Move A[i] to where K was.
        A[i + 1] = A[i];
        //Back up i one spot
        i = i - 1;
        // reassign i + 1 = key to complete the swap.
        A[i + 1] = key;
      */
    }
  }

  return A;
}

console.log(insertionSort([7, 4, 1, 5, 10, 6, 2, 3, 8, 9]));

/* Lessons learned
  1. That you can do this!
  2. Pointers can be better named as i and j to keep track more easily than prev next.
  3. That for loop does not have to start with i for iterations.
  4. how insertion sort swaps each number in place until all numbers have been sorted.
  5. Best way to manage pointers is to swap values then move pointer locations.
*/

//Insertion sort from largest to smallest
function insertionSortB(A) {
  for (let j = 1; j < A.length; j++) {
    //Init key to J
    let key = A[j];
    //Move i to 1 - j;
    let i = j - 1;

    while (i >= 0 && A[i] < key) {
      //Swap values 
      A[i + 1] = A[i];
      A[i] = key;
      //Back up i one spot
      i = i - 1;
    } b
  }

  return A;
}

console.log(insertionSortB([1, 4, 5, 2, 3]));

console.log({}.length)
