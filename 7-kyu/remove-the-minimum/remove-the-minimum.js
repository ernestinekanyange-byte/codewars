function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
​
  const smallest = Math.min(...numbers);
  const index = numbers.indexOf(smallest);
​
  return [...numbers.slice(0, index), ...numbers.slice(index + 1)];
}