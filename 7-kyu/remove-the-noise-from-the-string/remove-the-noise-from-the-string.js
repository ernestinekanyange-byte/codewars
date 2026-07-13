function removeNoise(str){
​
   const noisePattern = /[%$&/#·@|º\\ª]/g;
  return str.replace(noisePattern, "");
  
}
console.log(removeNoise("h%e&·%$·llo w&%or&$l·$%d"))