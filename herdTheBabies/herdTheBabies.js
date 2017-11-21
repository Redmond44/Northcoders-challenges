function herdTheBabies(str) {
  // let arrOfParentsWithBabies = [];

  // str.split('').sort().forEach((letter) => {
  //   if (letter.toUpperCase() === letter) arrOfParentsWithBabies.push([letter]);
  //   else {
  //     arrOfParentsWithBabies.forEach((capitalLetter) => {
  //       console.log(capitalLetter);
  //       if (letter.toUpperCase() === capitalLetter[0]) capitalLetter.push(letter);
  //     });
  //   }
  // });
  // return arrOfParentsWithBabies.reduce((acc, pair) => {
  //   return acc.concat(pair);
  // }, []).join('');
  const findUpperCases = /[A-Z]/g;
  const findLowerCases = /[a-z]/g;
  const upperCases = str.match(findUpperCases).sort();
  let lowerCases = str.match(findLowerCases);
  if (lowerCases === null) lowerCases = '';

  return upperCases.map((capitalLetter) => {
    for (let i = 0; i < lowerCases.length; i++) {
      if (lowerCases[i].toUpperCase() === capitalLetter[0])
        capitalLetter += lowerCases[i];
    }
    return capitalLetter;
  }).join('');
}

module.exports = { herdTheBabies };