function drawStairs(n) {
  // your code here
 let stairs = [];
  
  for (let i = 0; i < n; i++) {
   //for creating stairs 
    stairs.push(" ".repeat(i) + "I");
  }
  
  // for the purpose of Joining  with newlines
  return stairs.join("\n");
}
​
​
console.log(drawStairs(3));
​