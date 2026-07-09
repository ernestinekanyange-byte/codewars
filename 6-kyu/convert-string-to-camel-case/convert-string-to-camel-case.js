function toCamelCase(str){
  if (!str) return "";
​
  const words = str.split(/[-_]/);
​
  return words[0] + words.slice(1).map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
}
console.log(toCamelCase("the-greatest-of-all-the-times"))
​