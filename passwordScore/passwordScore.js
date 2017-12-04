var passwordScore = function (password) {
  // Special characters: ! @ £ # $ % ^ & *
  if (typeof password === 'string') {
    if (password.length < 4) return 1;
    if (password.length < 9) return 2;
    if (/^[a-z]{9,}$/i.test(password)) return 3;      
    if (password.length > 12 && /\d/.test(password) && /[!@£#$%^&*]/.test(password)) return 7;
    if (password.length > 8 && /\d/.test(password) && /[!@£#$%^&*]/.test(password)) return 5;  
    if (/^[a-z\d]{13,}$/i.test(password)) return 6;
    if (/^[a-z\d]{9,}$/i.test(password)) return 4;
  }  
  return 0;
};

if (typeof module !== 'undefined') {
  module.exports = { passwordScore };
}
