 function playerRankUp(score) {
  if (score >= 100) {
    return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
  }
  return false;
}
​
// Example usage:
console.log(playerRankUp(105)); // "Well done! You have advanced to the qualifying stage..."
console.log(playerRankUp(99));  // false
​