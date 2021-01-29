/*
Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters,and that you are given the "true" length of the string.

Input : "Mr John Smith"

Output:"Mr%20John%20Smith"

*/

//Methods to Solve
//Method 1 - Regex Expressions
//Method 2 - Trim the string, Split the string and replace spaces with %20
//Method 3 - Scan for spaces and replace

function URLify(s1){
  let str = s1.trim().split(" ");
  str = str.join("%20");

  console.log(str);
}

URLify("Mr John Smith  ")

//Trim String
//create new array for string
//push current char in array
//if spaces replace with %20
//keep state on spaces to replace them or skip them
function urlify3(s) {
  let str = s.trim();
  let spaceSkipping = true;
  const newString = [];

  for (let i = 0; i < str.length; i++) {
    let current = str[i];

    if (current != " ") {
      spaceSkipping = false;
    }

    if (current == " " && spaceSkipping === false) {
      current = "%20";
      spaceSkipping = true;
      newString.push(current);
      continue;
    }

    if (current == " " && spaceSkipping === true) {
      continue;
    }

    newString.push(current);
  }
  console.log(newString.join(""));
}


urlify3("  Mr John Smith!   ")

//Long version with no js methods.
function urlify4(s) {
  let str = s;
  let spaceSkipping = true;
  const spaces = skipSpaces(str);
  const newString = [];

  for (let i = spaces.start; i < str.length - spaces.end; i++) {
    let current = str[i];

    if (s[i] != " ") {
      spaceSkipping = false;
    }

    if (s[i] == " " && spaceSkipping === false) {
      current = "%20";
      spaceSkipping = true;
      newString.push(current);
      continue;
    }

    if (s[i] == " " && spaceSkipping === true) {
      continue;
    }

    newString.push(current);
  }
  console.log(newString.join(""));

  //Skip Spaces at Start and End
  function skipSpaces(str) {
    let spacesStart = 0;
    let spacesEnd = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        break;
      }

      if (str[i] == " ") {
        spacesStart++;
        continue;
      }
    }

    for (let i = str.length - 1; i > 0; i--) {
      if (str[i] == " ") {
        spacesEnd++;
        continue;
      }

      if (str[i] !== " ") {
        break;
      }
    }

    return {
      start: spacesStart,
      end: spacesEnd,
    };
  }
}

urlify4("  Mr John Smith!   ");