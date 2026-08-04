​
function toAcronym(str) {
  return str.split(' ').map(word => word[0].toUpperCase()).join('');
}
​
console.log(toAcronym('kanyange ernestine'))
console.log(toAcronym('norbert nsengiyumva'))