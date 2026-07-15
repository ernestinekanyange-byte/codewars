function comp(a, b) {
    if (a === null || b === null) return false;
    if (a.length !== b.length) return false;
​
    const squared = a.map(num => num * num).sort((a, b) => a - b);
    const sortedB = b.slice().sort((a, b) => a - b);
​
    return squared.every((value, index) => value === sortedB[index]);
}