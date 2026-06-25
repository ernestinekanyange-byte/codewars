function splitOddAndEven(n) {
  let str = n.toString();
  let result = [];
  let group = str[0];
​
  for (let i = 1; i < str.length; i++) {
    let current = Number(str[i]);
    let previous = Number(str[i - 1]);
​
    if (current % 2 === previous % 2) {
      group += str[i];
    } else {
      result.push(Number(group));
      group = str[i];
    }
  }
​
  result.push(Number(group));
  return result;
}