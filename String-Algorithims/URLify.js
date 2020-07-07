/*
Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters,and that you are given the "true" length of the string.

Input : "Mr John Smith"

Output:"Mr%20John%20Smith"

*/

//Methods to Solve
//Method 1 - Regex Expressions
//Method 2 - Split the string and replace spaces with %20
//Method 3 - Scan for spaces and replace

function URLify(s1){
  let str = s1.split(" ");
  str = str.join("%20");

  console.log(str);
}

URLify("Mr John Smith")

function URLify3(s1){
  let str = "";
  for(let i = 0; i < s1.length; i++){
    if(s1[i] === " "){
      console.log('We found a space');
      str += '%20';
    }
    else{
      str += str[i];
    }
  }

  console.log(str);
}

URLify3("Mr John Smith!")