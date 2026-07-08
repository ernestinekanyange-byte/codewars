function palindrome(num) {
    if (!Number.isInteger(num) || num < 0) {
        return "Not valid";
    }
​
    const number = num.toString();
    let palindromeSet = new Set();
​
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 2; j <= number.length; j++) {
            let combination = number.slice(i, j);
​
            if (combination.startsWith('0') || combination.endsWith('0')) continue;
​
            let reversedCombination = combination.split('').reverse().join('');
            if (combination === reversedCombination) {
                palindromeSet.add(Number(combination));
            }
        }
    }
​
    if (palindromeSet.size === 0) {
        return "No palindromes found";
    }
​
    return Array.from(palindromeSet).sort((a, b) => a - b);
}
​