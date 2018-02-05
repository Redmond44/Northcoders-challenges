const crypto = require('crypto');

function getDoorPassword(doorId) {
  let password = '';
  let i = 0;

  while (password.length < 8) {
    const id = `${doorId}${i}`;
    const hash = crypto.createHash('md5');
    hash.update(id);
    const hashedId = hash.digest('hex');
    if (/^0000/.test(hashedId)) {
      password += hashedId[4];
    }
    i++;
  }

  const result = {
    'id': 'md5Hashing',
    'input': [doorId],
    'solution': password
  };

  return result;
}

module.exports = { getDoorPassword };