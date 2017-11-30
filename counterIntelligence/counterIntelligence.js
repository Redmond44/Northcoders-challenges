function counterIntelligence (str) {
  str = str.toUpperCase();
  const lastChar = str[str.length - 1];
  const move = lastChar.charCodeAt(0) - 'X'.charCodeAt(0);

  return str.split('').map((char) => {
    if (char.match(/[a-z]/i)) {
      const newCharCode = char.charCodeAt(0) - move;
      const newCharCodeLetter = (newCharCode - 65) % 26 + 65;
      const newChar = String.fromCharCode(newCharCodeLetter);
      // console.log(char, newChar);
      return newChar;
    }
    return char;
  }).join('');
}

module.exports = {counterIntelligence};