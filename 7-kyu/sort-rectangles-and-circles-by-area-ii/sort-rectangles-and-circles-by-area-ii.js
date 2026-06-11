function sortByArea(shapes) {
 
  const getArea = (shape) => {
    if (Array.isArray(shape)) {
   
      return shape[0] * shape[1];
    }
    
    return Math.PI * Math.pow(shape, 2);
  };
​
 
  return [...shapes].sort((a, b) => getArea(a) - getArea(b));
}
​