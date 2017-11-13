## Pig Latin

In this kata you will write a function that translates English strings into Pig Latin.

To translate to [Pig Latin](https://en.wikipedia.org/wiki/Pig_Latin) you take the first consonant (or consecutive consonants) of each word, move it to the end and also append 'ay'. If the word starts with a vowel, just append 'way' at the end.

##### Examples

You can use these examples to start building your test suite.

```javascript
    pigLatin('northcoders');
    // -> 'orthcodersnay'
```

```javascript
    sample('sheffield');
    // -> 'effieldshay'
```

```javascript
    sample('algorithm');
    // -> algorithmway
```

```javascript
    sample('keep on coding');
    // -> 'eepkay onway odingcay'
```
