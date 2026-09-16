function findOdd(array) {
​
  for (let i = 0; i < array.length; i++) {
​
    let count = 0;
​
    for (let j = 0; j < array.length; j++) {
​
      if (array[i] === array[j]) {
        count++;
      }
    }
​
    if (count % 2 !== 0) {
      return array[i];
    }
  }
}
​
console.log(findOdd([1,1,2]))