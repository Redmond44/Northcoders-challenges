## Vowel Shift

Given a string of any length and a number n, shift every vowel in the string n vowel positions to the right. The final vowel in the string wraps round and goes back to the beginning of the string. For example, in the string 'hello child', if each vowel was shifted 1 vowel position to the right, the e would move to the o's position, the o would move to the i's position, and the i would wrap back round and fill the e's position, giving:

'hille chold'

##### examples


You can use these examples to start building up your test suite

```javascript

vowelShift('foo', 0);
  --> 'foo'

```

```javascript

vowelShift('hello', 1);
  --> 'holle'

```

```javascript

vowelShift('hello child', 1);
  --> 'hille chold'

```

```javascript

vowelShift('star nosed mole', 2);
  --> 'stor nesad mole'

```

```javascript

vowelShift('funnily enough', 4);
  --> 'finnely onuugh'

```
