// Please do not change the name of this function
var validateAndFormatPhone = function (number) {
  if(!number){
    return new Error('Invalid phone number');
  }
};

if ( typeof module !== 'undefined' ) {
  module.exports = {validateAndFormatPhone};
}
