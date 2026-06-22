const mostFrequentItemCount = collection => 
  collection.length === 0 ? 0 : Math.max(...collection.map(num => collection.filter(n => n === num).length));
​
​