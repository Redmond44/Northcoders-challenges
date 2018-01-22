function wrongWayCow(str) {
  let test = [];
  let index = 0;
  let pasture;

  const arrOfPastures = str.split('\n');

  for (let j = 0; j < arrOfPastures.length; j++) {
    for (let i = 0; i < arrOfPastures[j].length; i += 3) {
      if (arrOfPastures[j][i] === '.') continue;
      if (!test.includes(arrOfPastures[j][i])) test.push(arrOfPastures[j][i]);
      else {
        if (arrOfPastures[j][i] === 'c') index = arrOfPastures[j].indexOf('woc');
        else if (arrOfPastures[j][i] === 'w') index = arrOfPastures[j].indexOf('cow');
        if (index > 0) {
          pasture = j;
          break;
        }
      }
    }
    if (pasture !== undefined) break;
  }
  
  if (index < 0) return [];
  return [pasture, index / 3];
}


module.exports = { wrongWayCow };