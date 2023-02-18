function longestWord(sen) {
  let words = [];
  let word = '';
  let maxWord = '';

  sen += ' ';

  for (let i = 0, j = 0; i < sen.length; i++) {
    let char = sen[i];

    if (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z') {
      word += char;
    } else if (word) {
      words[j] = word;
      word = '';
      j++;
    }
  }

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];

    if (currentWord.length > maxWord.length) {
      maxWord = currentWord;
    }
  }

  return maxWord;
}

console.log(longestWord('fun&!! time'));
console.log(longestWord('I love dogs'));

module.exports = longestWord;