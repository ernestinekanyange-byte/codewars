function titleToNumber(title) {
  
 let result = 0;
​
  for (let i = 0; i < title.length; i++) {
    let charValue = title.charCodeAt(i) - 64;
    
    result = result * 26 + charValue;
  }
​
  return result;
}
​
console.log(titleToNumber("A"))
​