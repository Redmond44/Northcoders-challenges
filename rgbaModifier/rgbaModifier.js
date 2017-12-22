var rgbaModifier = function (rgbaStr, percent, opacity) {
  let count = 0;
  rgbaStr = rgbaStr.replace(/([\d.])+/g, (element) => {
    count++;
    element = Number(element);    
    if (count < 4 && percent) {
      element += element * percent / 100;
      element = element.toFixed(0);
      if (element > 255) element = 255;
      if (element < 0) element = 0;
    }
    if (count === 4 && opacity) element = opacity;
    
    return element;
  });

  return rgbaStr;
};

if (typeof module !== 'undefined') {
  module.exports = { rgbaModifier };
}
