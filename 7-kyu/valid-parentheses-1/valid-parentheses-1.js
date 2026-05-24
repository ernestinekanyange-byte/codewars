/**
 * Determines if the order of parentheses in a string is valid.
 * @param {string} str - The string containing parentheses.
 * @return {boolean} True if valid, false otherwise.
 */
function validParentheses(str) {
  let count = 0;
​
  for (const char of str) {
    if (char === '(') {
      count++;
    } else if (char === ')') {
      count--;
    }
​
    // A closing parenthesis appeared before an opening one
    if (count < 0) {
      return false;
    }
  }
​
  // Returns true only if all parentheses are perfectly matched
  return count === 0;
}
​
// === Test Cases ===
console.log(validParentheses("()"));              // Output: true
console.log(validParentheses(")(()))"));          // Output: false
console.log(validParentheses("("));               // Output: false
console.log(validParentheses("(())((()())())"));  // Output: true
​