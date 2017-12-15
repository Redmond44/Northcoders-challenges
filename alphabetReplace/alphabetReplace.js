function alphabetReplace(str) {
  const positionZero = 'a'.charCodeAt(0) - 1;
  str = str.replace(/ /g, '').toLowerCase();

  return str.split('').map(char => {
    return char.charCodeAt(0) - positionZero;
  }).join(' ');
}

module.exports = {alphabetReplace};
