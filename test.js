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


checkPermutation('abc', 'bbb')