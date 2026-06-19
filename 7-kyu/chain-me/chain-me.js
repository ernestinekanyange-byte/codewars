function chain(startingValue, functions) {
  let result = startingValue; 
  
  for (let fn of functions) {
    result = fn(result); 
  }
  
  return result;
}