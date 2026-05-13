function sumArray(array) {
 
  if (!array || array.length <= 1) {
    return 0;
  }
const lowest = Math.min(...array);
const highest = Math.max(...array);
  
 const totalSum = array.reduce((acc, curr) => acc + curr, 0);
  
  return totalSum - lowest - highest;
}
console.log(sumArray([6, 2, 1, 8, 10]))
console.log(sumArray([1, 1, 11, 2, 3]))
​