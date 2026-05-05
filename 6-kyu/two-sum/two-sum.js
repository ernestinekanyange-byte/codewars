function twoSum(numbers, target) {
    let arr = [];
  for (let a = 0 ; a < numbers.length ; a++){
    for (let b = a+1 ; b <numbers.length ; b++){
    let c = numbers[a] + numbers[b];
  if (c === target){ 
     arr.push (a,b);
    return arr; 
  
  
    }
      }
    }
  
  
  
  
}