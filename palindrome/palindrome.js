var palindrome = function (str) {
  // const newStr = str.replace(/\s/g, '').toLowerCase();
  // return newStr === newStr.split('').reverse().join('');

  // recursive solution
  const newStr = str.replace(/\s/g, '');

  if (newStr.length < 2) return true;
  if (newStr[0].toLowerCase() !== newStr[newStr.length - 1].toLowerCase())
     return false;    
  return palindrome(newStr.slice(1, -1));
};

if (typeof module !== 'undefined') {
  module.exports = { palindrome };
}