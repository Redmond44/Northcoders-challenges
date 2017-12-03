var morseDecode = function (str, toMorse) {

  const reference = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0'
  };

  const refCode = Object.keys(reference);
  const refChar = Object.values(reference);

  if (toMorse) {
    return str.split(' ').map((word) => {
      return word.split('').map((char) => {
        const charIndex = refChar.indexOf(char);
        return refCode[charIndex];
      }).join(' ');
    }).join('    ');
  }

  return str.split('    ').map((word) => {
    return word.split(' ').map((char) => reference[char]).join('');
  }).join(' ');
};

if (typeof module !== 'undefined') {
  module.exports = { morseDecode };
}
