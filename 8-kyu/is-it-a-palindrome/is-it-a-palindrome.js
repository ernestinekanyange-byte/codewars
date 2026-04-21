function isPalindrome(x) {
let reversed =  x.split("").reverse().join("");
  return reversed.toUpperCase() === x.toUpperCase();
  }
console.log(isPalindrome("BOB"))