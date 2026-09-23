function replaceCommon(string, letter) {
  
  let highestCount = 0;
  let mostCommon = "";
​
for (let i = 0; i < string.length; i++) {
    
    let character = string[i];
​
  if (character === " ") continue;
    let count = 0;
for (let j = 0; j < string.length; j++) {
  if (character === string[j]) {
        count++;
      }
    }
if (count > highestCount) {
      highestCount = count;
      mostCommon = character;
    }
  }
return string.replaceAll(mostCommon, letter);
}
​
console.log(replaceCommon("kanyange" ,"G"))