function getAverage(marks){
  let sum = 0;
  let average = 0;
  for (let i = 0; i< marks.length; i++){
    sum += marks[i];
    
}
  average = Math.floor(sum/marks.length);
  return average;
  }
​
console.log(getAverage([20, 30, 50]))