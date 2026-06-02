function convert(decimalDegree) {
  
  let degrees = Math.floor(decimalDegree);
  
  const remainingMinutes = (decimalDegree - degrees) * 60;
  
  let minutes = Math.floor(remainingMinutes);
  
  let seconds = Math.round((remainingMinutes - minutes) * 60);
​
  if (seconds === 60) {
    seconds = 0;
    minutes = minutes + 1;
  }
  if (minutes === 60) {
    minutes = 0;
    degrees = degrees + 1;
  }
​
  const result = [degrees, minutes, seconds];
​
  while (result.length > 1 && result[result.length - 1] === 0) {
    result.pop();
  }
​
  return result;
}
​