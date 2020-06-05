//Implement an algorithim to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(s) {
  const set = {};
  let str = s.split("");

  for(let i = 0; i < str.length; i++) {
    if (str[i] in set) {
      return false;
    } else {
      set[str[i]] = true;
    }
  }

  return true
}

console.log(isUnique("abcd"));

//Is Unique Without Data Structures
//Use double for loops O(n^2)
//You could also sort the string and check if neighboring characters are identical.

function isUnique1(s){
  let s1 = s.split("");
  let next;

  for(let i = 0; i < s1.length; i++){
    next = s1[i + 1];
    if(s1[i] === next){
      return false
    }
  }

  return true;
}

console.log(isUnique1('abccd'));
