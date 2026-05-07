function sumAverage(arrays) {
  let sum = 0;
for (const array of arrays) {
    let innerSum = 0;
​
for (const num of array) {
      innerSum += num;
    }
​
let average = innerSum / array.length;
    sum += average;
  }
​
  return sum;
}
    
  
​