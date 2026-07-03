Array.prototype.containsAll = function(targetArray) {
  // the way of Creating a Set from 'this' (the current array) for fast O(1) lookups
  const currentSet = new Set(this);
  
  // Checking if every item in the targetArray exists in the set
  return targetArray.every(item => currentSet.has(item));
};