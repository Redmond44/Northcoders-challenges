// Please do not change the name of this function
var getTweetData = function (tweet) {

  let tweetData = {};

  tweetData.length = tweet.length;  

  tweetData.tagCount = 0;

  tweetData.tags = tweet.split(' ').reduce((acc, word) => {
    if (word[0] === '#') {
      tweetData.tagCount += 1;
      acc.push(word);
    }
    return acc;
  }, []);

  // tweetData.mentionCount = 0;
  // tweetData.mentions = tweet.split(' ').reduce((acc, word) => {
  //   if (word[0] === '@') {
  //     tweetData.tagCount += 1;
  //     return acc.push(word);git sta
  //   }
  //   return acc;
  // }, []);
  // console.log(tweetData);
  return tweetData;

};

if (typeof module !== 'undefined') {
  module.exports = { getTweetData };
}
