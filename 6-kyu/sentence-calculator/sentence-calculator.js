function lettersToNumbers(str) {
  let total = 0;
​
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
​
    if (char >= "a" && char <= "z") {
      total += char.charCodeAt(0) - 96;
​
    } else if (char >= "A" && char <= "Z") {
      total += (char.charCodeAt(0) - 64) * 2;
​
    } else if (char >= "0" && char <= "9") {
      total += Number(char);
    }
  }
​
  return total;
}