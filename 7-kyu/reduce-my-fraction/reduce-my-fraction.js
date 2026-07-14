function reduce(fraction) {
  let [numerator, denominator] = fraction;
​
  let n = Math.min(numerator, denominator);
​
  for (let i = n; i >= 1; i--) {
    if (numerator % i === 0 && denominator % i === 0) {
      return [numerator / i, denominator / i];
    }
  }
}