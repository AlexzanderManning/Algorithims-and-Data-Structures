//Given two strings, write a method to determine if one is a permutation of the other.
//Input1 "abcd" 
//Input 2 "cdba" 
//Input 1 & 2 are permuations of each other.

function checkPerumatation1(str1, str2) {
  //sort each string
   let a = str1.split("").sort().join("");
   let b = str2.split("").sort().join("");

  //compare both strings

  if(a == b){
    console.log("String b is a permuation of a!")
  }


}//O(n log n)

checkPerumatation1('dcba', 'abcd');



//LESSONS
// sort() by defualt will sort strings and chars with no params
//arrays cant be directly compared with and == or ===

/*
Ways to Solve

Method 1 - Sort the strings and then compare. O(n log n)

Method 2 - Store one string in a hash table and then compare.

Method 3 - Compare the char codes of each string O(n)

*/

function checkPerumatation2(s1, s2){
  let c1 = 0;
  let c2 = 0;

  for(let i = 0; i < s1.length; i++){
    c1 += s1.charCodeAt(i);
  }

  for(let i = 0; i < s2.length; i++){
    c2 += s2.charCodeAt(i);
  }

  if(c1 === c2){
    return true;
  }else{
    return false
  }
  
} //O(A + B)

console.log(checkPerumatation2("abcd", "dcba"));

