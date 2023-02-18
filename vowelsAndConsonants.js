function vowelsAndConsonants(s) {
  let vowels = [];
  let consonants = [];

  for (let i = 0, v = 0, c = 0; i < s.length; i++) {
    if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
      vowels[v] = s[i];
      v++;
    } else {
      consonants[c] = s[i];
      c++;
    }
  }

  for (let i = 0; i < vowels.length; i++) {
    console.log(vowels[i]);
  }

  for (let i = 0; i < consonants.length; i++) {
    console.log(consonants[i]);
  }
}

vowelsAndConsonants('javascriptloops');

module.exports = vowelsAndConsonants;