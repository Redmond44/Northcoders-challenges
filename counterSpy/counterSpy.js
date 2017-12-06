function counterSpy(arr) {
  const regExp = /[spy]/i;
  return arr.filter(name => !regExp.test(name)).sort();
}

module.exports = { counterSpy };