var textInDiv = function (text, width) {
  if (width < 15) return 'INVALID INPUT';

  if (width >= text.length) return text.slice(0);

  for (let i = width; i >= 0; i--) {
    if (text[i] === ' ') return text.slice(0, i) + '\n' + textInDiv(text.slice(i + 1), width);    
  }
};

if (typeof module !== 'undefined') {
  module.exports = { textInDiv };
}
