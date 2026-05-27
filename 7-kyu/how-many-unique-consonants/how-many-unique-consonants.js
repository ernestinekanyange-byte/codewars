function countConsonants(str) {
  const vowels = "aeiou";
  const consonants = new Set();
​
  for (const char of str.toLowerCase()) {
    if (/[a-z]/.test(char) && !vowels.includes(char)) {
      consonants.add(char);
    }
  }
​
  return consonants.size;
}