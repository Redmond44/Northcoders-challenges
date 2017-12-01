// function validTriangles(arr) {
//   let counter = 0;
//   arr.forEach((element) => {
//     const side1 = element[0];
//     const side2 = element[1];
//     const side3 = element[2];
//     if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) counter++;
//   });  
//   return counter;
// }

function validTriangles(arr) {
  let counter = 0;
  arr.forEach((element) => {
    const sortedArr = element.sort((a, b) => a - b);

    const allNumbers = sortedArr.every((side) => { 
      return typeof side === 'number';
    });

    if (allNumbers && sortedArr[0] + sortedArr[1] > sortedArr[2]) counter++;
  });
  return counter;
}

module.exports = { validTriangles };