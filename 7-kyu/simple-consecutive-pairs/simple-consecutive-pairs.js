function pairs(arr) {
    let count = 0;
    
    for (let i = 0; i < arr.length - 1; i += 2) {
        if (Math.abs(arr[i] - arr[i + 1]) === 1) {
            count++;
        }
    }  
return count;
}
console.log([1,2,5,8,-4,-3,7,6,5])
​