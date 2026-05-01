function position(letter) {
  //  Here  i had first to Get ASCII code of the lowercase letter and subtract 96
  const alphabetPosition = letter.charCodeAt(0) - 96;
  
  return `Position of alphabet: ${alphabetPosition}`;
}
​
​
console.log(position("g"));
​
​