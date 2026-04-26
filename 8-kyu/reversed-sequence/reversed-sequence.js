function reverseSeq(n) {
  let arr = [];
​
  for (let i = n; i >= 1; i--) {
    arr.push(i);
  }
​
  return arr;
}