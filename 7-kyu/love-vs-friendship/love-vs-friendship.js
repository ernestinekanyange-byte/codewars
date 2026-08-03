function wordsToMarks(string) {
  let sum = 0;
​
  for (let char of string) {
    sum += char.charCodeAt(0) - 96;
  }
​
  return sum;
}