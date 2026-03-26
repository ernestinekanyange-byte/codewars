function solution(num){
  if (num < 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < num; i++) {
if (i % 3 ===0 || i % 5 ===0) {
  sum = sum + i;
}
    }
    return sum;
     
  
  
}
console.log(solution(10))