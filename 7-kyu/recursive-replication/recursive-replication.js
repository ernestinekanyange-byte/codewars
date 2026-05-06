function replicate(times, number) {
 
  if (times <= 0) {
    return [];
  }
​
  return [number].concat(replicate(times - 1, number));
}
​