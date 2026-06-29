function calcType(a, b, res) {
  if (res === a/b){
    return "division"
  } else if( res === a+b){
    return "addition"
  } else if (res === a*b){
    return "multiplication"
  } else if (res === a-b)
    return "subtraction"
​
    
  }
  
​
console.log(calcType(3, 5, 15))