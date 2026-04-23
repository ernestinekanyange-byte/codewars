function all(sequence, func) {
  return sequence.every(func);
}
​
const greater_than_9 = (x) => x > 9;
const less_than_9 = (x) => x < 9;
​
console.log(all([1, 2, 3, 4, 5], greater_than_9)); 
​