let findSumOfThree = function (arr, sum) {
  // TODO: Write - Your - Code
  let A = arr.sort();
  let hash = {};
  let x;

  A.forEach((el) => (hash[el] = 1));
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      x = sum - (A[i] + A[j]);
      console.log(`${x} = ${sum} - ${A[i]} + ${A[j]}`);
      if (x != A[j] && hash[x]){
        return true;
      }
    }
  }
  return false;
};


console.log(findSumOfThree([1, 2, 3, 4, 5, 7, 8], 21));
