​
const scales = {
  data: [1, 1, 1, 1, 1, 2, 1, 1], // Ball at index 5 is heavy
  getWeight: function(left, right) {
    const sum = arr => arr.reduce((acc, idx) => acc + this.data[idx], 0);
    const leftW = sum(left);
    const rightW = sum(right);
    if (leftW > rightW) return -1;
    if (rightW > leftW) return 1;
    return 0;
  }
};
​
​
function findBall(scales) {
  const result1 = scales.getWeight([0, 1, 2], [3, 4, 5]);
​
  if (result1 === -1) {
    const result2 = scales.getWeight([0], [1]);
    if (result2 === -1) return 0;
    if (result2 === 1) return 1;
    return 2;
  }
​