/* 
 Given a string, write a function to check if it is a permutation of a palin­drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

 EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco eta", etc.)
 */

//What is a palindrome?
//Palindrome must have some duplicate letters
//Palindrome has and even or odd count of letters.
//For a even palindrome every character must have an even count of letters.
//For an odd palindrome all characters must be even, only one character, the middle char may be odd and that is one.

let phrase = "Taco Cato";

function isEven(s) {
  let result = s.length % 2;

  if (result === 1) {
    console.log("String is odd");
    return false;
  }

  if (result === 0) {
    console.log("String is even");
    return true;
  }
}

function palindromeCheckOdd(table) {
  //Find out how many odd values this string has

  for (key in table) {
    let count = 0;
    if (table[key] % 2 === 1 || table[key] % 2 === 0) {
      count++;
    }

    if (count < 1 || count > 1) {
      return console.log("It is not a palindrome!");
    }

    if (count === 1) {
      return console.log("It is a palindrome!");
    }
  }
}

function palindromeCheckEven(table){
  for(key in table){
    let count = 0;

    if(table[key] % 2 === 1){
      count++;
    }

    if(count > 0 ){
      return console.log("It is not a palindrome!");
    }

    if(count === 0 ){
      return console.log("It is a palindrome!")
    }
  }
}

function palindromePermutation(s) {
  //do something
  let str = s.toLowerCase().split(" ").join("");
  let result = isEven(str);
  let table = {};

  //maps charcters and their character count to table
  for (let i = 0; i < str.length; i++) {
    if (!table[str[i]]) {
      table[str[i]] = 1;
    } else {
      table[str[i]] += 1;
    }
  }

  //Calls a function based on the value of result.
  result ? palindromeCheckEven(table) : palindromeCheckOdd(table);
}

palindromePermutation(phrase);
