function sumFactorial(arr) {
 
  function getFactorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
​
  return arr.reduce((sum, currentNum) => sum + getFactorial(currentNum), 0);
}