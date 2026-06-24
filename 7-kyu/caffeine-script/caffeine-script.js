function caffeineBuzz(num) {
    let result = "";
​
    if (num % 3 === 0 && num % 4 === 0) {
        result = "Coffee";
    } else if (num % 3 === 0) {
        result = "Java";
    } else {
        return "mocha_missing!";
    }
​
    if (num % 2 === 0) {
        result += "Script";
    }
​
    return result;
}