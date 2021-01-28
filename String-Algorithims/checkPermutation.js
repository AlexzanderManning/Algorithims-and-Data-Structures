//Given two strings, write a method to determine if one is a permutation of the other.
//Input1 "abcd"
//Input 2 "cdba"
//Input 1 & 2 are permuations of each other.

function checkPerumatation1(str1, str2) {
  //sort each string
  let a = str1.split("").sort().join("");
  let b = str2.split("").sort().join("");

  //compare both strings

  if (a == b) {
    console.log("String b is a permuation of a!");
  }
} //O(n log n)

checkPerumatation1("dcba", "abcd");

//LESSONS
// sort() by defualt will sort strings and chars with no params
//arrays cant be directly compared with and == or ===

/*
Ways to Solve

Method 1 - Sort the strings and then compare. O(n log n)

Method 2 - Store one string in a hash table and then see if the other string chars are there and check their counts.

*/

//O(S + B) - Linear Time
function checkPermutation(s1, s2){
//check if string
//if strings are not same length SC

  let hash = {};

  for(let i =0; i < s1.length; i++){
    if(!hash[s1[i]]){
      hash[s1[i]] = 1
    }else if(hash[s1[i]]){
      hash[s1[i]]++
    }
  }

   console.log(hash);

 for(let i = 0; i < s2.length; i++){
   let char = s2[i];

   if(!hash[char]){
     return false;
   }else if(hash[s2[i]]){
     hash[s2[i]]--;
   }
 }

 for(i in hash){
   if(hash[i] != 0){
     console.log("Not a perumtation!!");
     return false;
   }
 }

 return true;
}
