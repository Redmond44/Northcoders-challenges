// Please do not change the name of this function
var getTweetData = function (tweet) {
  let tweetData = {};
  tweetData.length = tweet.length;  
  tweetData.tags = [];  
  tweetData.mentions = [];

  tweet.split(' ').forEach((word) => {
    if (word[0] === '#' && !tweetData.tags.includes(word)) {
      tweetData.tags.push(word);
    }
    if (word[0] === '@' && !tweetData.mentions.includes(word)) {
      tweetData.mentions.push(word);
    }
  });
  tweetData.tagCount = tweetData.tags.length;
  tweetData.mentionCount = tweetData.mentions.length;

  return tweetData;
};

if (typeof module !== 'undefined') {
  module.exports = { getTweetData };
}
