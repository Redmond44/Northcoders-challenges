function uniqueAndOrdered (seq) {

  if (typeof seq === 'string') seq = seq.split('');

  return seq.reduce((acc, element) => {
    if (element !== acc[acc.length - 1]) acc.push(element);
    return acc;
  }, []);


}

module.exports = {uniqueAndOrdered};
