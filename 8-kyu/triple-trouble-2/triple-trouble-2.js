​
  //Solution
 function tripleTrouble(one, two, three) {
  let result = "";
  
  for (let i = 0; i < one.length; i++) {
    // Append the i-th character from each string in order
    result += one[i] + two[i] + three[i];
  }
  
  return result;
}
​
// Example usage:
console.log(tripleTrouble("aa", "bb", "cc")); 
​
​