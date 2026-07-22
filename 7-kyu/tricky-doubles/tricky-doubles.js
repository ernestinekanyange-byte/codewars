function trickyDoubles(num) {
  let str = String(num);
​
  // If the number of digits is odd, it can't be a tricky double
  if (str.length % 2 !== 0) {
    return num * 2;
  }
​
  let middle = str.length / 2;
  let firstHalf = str.slice(0, middle);
  let secondHalf = str.slice(middle);
​
  // If both halves are identical, return the original number
  if (firstHalf === secondHalf) {
    return num;
  }
​
  // Otherwise, return twice the number
  return num * 2;
}