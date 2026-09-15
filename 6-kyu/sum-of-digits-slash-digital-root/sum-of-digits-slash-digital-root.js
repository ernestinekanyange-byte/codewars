function digitalRoot(n) {
  let numbers = n.toString().split('');
  
  let sum = 0;
​
  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
  }
​
  while (sum > 9) {
​
    numbers = sum.toString().split('');
​
    sum = 0;
​
    for (let i = 0; i < numbers.length; i++) {
      sum += Number(numbers[i]);
    }
  }
​
  return sum;
}