function elipse(a, b) {
  const area = (Math.PI * a * b).toFixed(1);
  const perimeter = (
    Math.PI * ((3 / 2) * (a + b) - Math.sqrt(a * b))
  ).toFixed(1);
​
  return `Area: ${area}, perimeter: ${perimeter}`;
}