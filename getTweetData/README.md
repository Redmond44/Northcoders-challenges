## Get certain data from a tweet

The challenge is to implement which returns us an object containing data from a tweet

We want easy access to the following data

* The length of the tweet
* The amount of hash tags ( #awesomeNorthcoders ) in the tweet as well as an array of them
* The amount of mentions ( @northcoders ) in the tweet as well as an array of them
* We only want to return unique hash tags and handles mentioned

##### examples

You can use these examples to start building up your test suite

```javascript
    getTweetData("My awesome tweet");
    // -> { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 }
```

```javascript
    getTweetData("My awesome tweet to @northcoders");
    // -> { tags: [], mentions: ["@northcoders"], tagCount: 0, mentionCount: 1, length: 32 }
```

```javascript
    getTweetData("My awesome tweet about #coding");
    // -> { tags: [#coding], mentions: [], tagCount: 1, mentionCount: 0, length: 30 }
```

```javascript
    getTweetData("My awesome tweet about #coding to @northcoders");
    // -> { tags: [#coding], mentions: [@northcoders], tagCount: 1, mentionCount: 1, length: 46 }
```

```javascript
    getTweetData("I am #coding with @northcoders I love #coding and @northcoders");
    // -> { tags: [#coding], mentions: [@northcoders], tagCount: 1, mentionCount: 1, length: 62 }
```

## Extra Tasks

* The amount of valid URLS shared in the tweet
* The amount of valid email addresses in the tweet
* Twitter shrinks all urls by 50%. Take this into account when you return the tweets length
