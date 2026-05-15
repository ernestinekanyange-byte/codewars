function solution(str) {
 
  if (!str) return [];
  
  return (str.length % 2 !== 0 ? str + "_" : str).match(/.{2}/g);
}
​
console.log(solution("abcdef")); 
console.log(solution("abc"));    
console.log(solution(""));       
​