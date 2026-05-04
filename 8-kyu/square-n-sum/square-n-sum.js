function squareSum(numbers) {
  let sum = 0;
​
  numbers.forEach(function(num) {
    sum += num ** 2;
  });
​
  return sum;
}
​
console.log(squareSum([1, 2, 2])); // 9