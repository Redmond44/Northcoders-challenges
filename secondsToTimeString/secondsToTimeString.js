// function secondsToTimeString(seconds) {

//   let minutes = Math.floor(seconds / 60);
//   let hours = Math.floor(minutes / 60);
//   let days = Math.floor(hours / 24);
//   let years = Math.floor(days / 365);
//   days = days % 365;
//   hours = hours % 24;
//   minutes = minutes % 60;
//   seconds = seconds % 60;

//   let elementsArr = [];

//   if (years === 1) elementsArr.push(`${years} year`);
//   else if (years) elementsArr.push(`${years} years`);

//   if (days === 1) elementsArr.push(`${days} day`);
//   else if (days) elementsArr.push(`${days} days`);

//   if (hours === 1) elementsArr.push(`${hours} hour`);
//   else if (hours) elementsArr.push(`${hours} hours`);

//   if (minutes === 1) elementsArr.push(`${minutes} minute`);
//   else if (minutes) elementsArr.push(`${minutes} minutes`);


//   if (seconds === 1) elementsArr.push(`${seconds} second`);
//   else if (seconds) elementsArr.push(`${seconds} seconds`);

//   if (!elementsArr.length) return `${seconds} seconds`;
//   let finalStr =  elementsArr.join(', ');

//   return finalStr.replace(/,(?=[^,]*$)/, ' and');
// }

function secondsToTimeString(seconds) {  
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let years = Math.floor(days / 365);
    days = days % 365;
    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;
  
    const reference = {0: 'second', 1: 'minute', 2: 'hour', 3: 'day', 4: 'year'};
    const elementsArr = [seconds, minutes, hours, days, years];

    const finalArr = elementsArr.reduce((acc, element, index) => {
      if (element === 0) return acc;
      
      let newElement = `${element} ${reference[index]}`;
      if (element !== 1) newElement += 's';
      acc.push(newElement);
      return acc;
    }, []);
  
    if (!finalArr.length) return '0 seconds';
    let finalStr =  finalArr.reverse().join(', ');
  
    return finalStr.replace(/,(?=[^,]*$)/, ' and');
  }

if (typeof module !== 'undefined') {
  module.exports = { secondsToTimeString };
}
