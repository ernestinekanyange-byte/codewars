​
  
 function tripleTrouble(one, two, three) {
  let result = "";
  
  for (let i = 0; i < one.length; i++) {
    
    result += one[i] + two[i] + three[i];
  }
  
  return result;
}
​
​
console.log(tripleTrouble("aa", "bb", "cc")); 
​
​