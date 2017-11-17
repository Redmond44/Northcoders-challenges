// Please do not change the name of this function
var dnaPairs = function (dna) {
  const pairs = {A: ['A', 'T'], T: ['T', 'A'], C: ['C', 'G'], G: ['G', 'C']};
  let dnaPairs = [];
  
  dna.toUpperCase().split('').forEach((letter) => {
    dnaPairs.push(pairs[letter]);
  });
  return dnaPairs;
};

if (typeof module !== 'undefined') {
  module.exports = { dnaPairs };
}
