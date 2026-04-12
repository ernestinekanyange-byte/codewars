​
  
 function sortByBinaryOnes(list) {
  return list.sort((a, b) => {
   
    const binA = a.toString(2);
    const binB = b.toString(2);
​
  
    const onesA = binA.split('1').length - 1;
    const onesB = binB.split('1').length - 1;
​
  
    if (onesA !== onesB) {
      return onesB - onesA;
    }
​
    if (binA.length !== binB.length) {
      return binA.length - binB.length;
    }
​
    return a - b;
  });
}
​
​
const input = [1, 15, 5, 7, 3];
console.log(sortByBinaryOnes(input)); 
​
​
​
​