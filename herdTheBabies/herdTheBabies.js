function herdTheBabies(str) {
  let arrOfParentsWithBabies = [];

  str.split('').sort().forEach((letter) => {
    if (letter.toUpperCase() === letter) arrOfParentsWithBabies.push([letter]);
    else {
      arrOfParentsWithBabies.forEach((capitalLetter) => {
        if (letter.toUpperCase() === capitalLetter[0]) capitalLetter.push(letter);
      });
    }
  });
  return arrOfParentsWithBabies.reduce((acc, pair) => {
    return acc.concat(pair);
  }, []).join('');
}

module.exports = { herdTheBabies };