function dist(v, mu) {
  let g = 9.81;
  let t = 1;
  let vms = v / 3.6;
  let reactionDist = vms * t;
  let brakingDist = (vms * vms) / (2 * mu * g);
  return reactionDist + brakingDist;
}
​
function speed(d, mu) {
  let g = 9.81;
  let vms = mu * g * (Math.sqrt(1 + (2 * d) / (mu * g)) - 1);
  return vms * 3.6;
}
​
console.log(dist(100, 0.7));
console.log(speed(83.9598760937531, 0.7));
​