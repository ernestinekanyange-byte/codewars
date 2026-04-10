function maxTriSum(numbers){
  let unique = [...new Set(numbers)];
  // I used this method for removing suplicates before sorting
let sorted = unique.sort ((a,b) => b-a);
  let sum = sorted [0]+ sorted [1] + sorted [2];
  
  return sum;
  }
console.log(maxTriSum([3,5,2,6,1,2,1]));
  
  
  
​
​
​
​
​