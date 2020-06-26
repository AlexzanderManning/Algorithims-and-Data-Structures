/* There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

EXAMPLE
pale, ple -> true 
pales, pale -> true 
pale, bale -> true
pale, bake -> false

 */

//Ways to Solve

//Method 1 - implement a hashtable. --> O(n)
//Method 2 - Nested for loops. --> O(n^2)


const oneAway = (s1, s2) => {
  let edits = s1.length - s2.length;
  let hashMap = {};

  if (edits > 1) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== hashMap[s1[i]]) {
      hashMap[s1[i]] = true;
    }
  }

  //Compare both strings to each other.
  for (let i = 0; i < s2.length; i++) {
    if (!(s2[i] in hashMap)) {
      edits++;
    }
  }

  //If string is only missing 1 char return true.
  if (edits <= 1) {
    console.log("The string is 1 only edit away");
    return true;
  }
  //If string is missing more than one char then return false.
  if (edits > 1) {
    console.log("This string is more than one edit away");
    return false;
  }
};

oneAway("pale", "bale"); //O(n)
