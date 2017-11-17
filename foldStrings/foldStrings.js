// Please do not change the name of this function
function foldString(str) {
  if (typeof str !== 'string') return '';
  const arrOfWords = str.split(' ');
  return arrOfWords.map((word) => {
    let length = word.length;
    let middle = length / 2;
    let newWord = [];

    if (!(length % 2)) {
      newWord.push(word.slice(0, middle));
      newWord.push(word.slice(middle));
    } else {
      newWord.push(word.slice(0, Math.floor(middle)));
      newWord.push(word.slice(Math.floor(middle), Math.floor(middle) + 1));
      newWord.push(word.slice(Math.floor(middle) + 1));
    }
    return newWord.map((element) => element.split('').reverse().join(''))
    .join('');
  }).join(' ');  
}


module.exports = { foldString };
