/*
 Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).
 */

/* 
 Key Points

 1. String will be A-Z uppercase lowercase.
 2. String should output compressed string or og string if compressed string is longer.
 3. Longer === more chars

 */

//Method 1 - loop through the string using the runner technique to count duplicate chars, and then print char+count when there is no duplicate char remaining .

//input = string A-Z
const stringCompression = (s) => {
  let result = "";
  let charCount = 1;

  for (let i = 0; i < s.length; i++) {
    let next = s[i + 1];
    let current = s[i];
    if (next === current) {
      charCount++;
    }
    
    // if next not === current char then print current char and count
    if (next !== current) {
      result += `${current}${charCount}`;
      charCount = 1;
    }
  }
  
  //return compressed string or og string
  if(result.length < s.length){
    return result;
  }else if(result.length > s.length){
    return s
  }else{
    return s;
  }
}; // O(n)

console.log(stringCompression("aabcccccaaa")); //should output -> a2b1c5a3