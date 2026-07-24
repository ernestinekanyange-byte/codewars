function encryptThis(text) {
  return text
    .split(" ")
    .map(word => {
      if (word.length === 0) return "";
​
      const ascii = word.charCodeAt(0);
​
      if (word.length === 1) {
        return String(ascii);
      }
​
      if (word.length === 2) {
        return ascii + word[1];
      }
​
      return (
        ascii +
        word[word.length - 1] +
        word.slice(2, -1) +
        word[1]
      );
    })
    .join(" ");
}