## Find the most repeated value

Create a function that looks through a flat array and returns an object that describes the most repeated element or elements in the array. The object will be in the format:

```javascript
{
  elements: ['foo'],
  repeats: 3
}
```

If the array is empty or there are no repeated elements, return:

```javascript
{
  elements: [],
  repeats: null
}
```

##### examples


You can use these examples to start building up your test suite

```javascript
findMostRepeated([]);
  --> {elements: [], repeats: null}
```

```javascript
findMostRepeated(['foo', 'bar', 'hello', 'world']);
  --> {elements: [], repeats: null}
```

```javascript
findMostRepeated(['foo', 'foo', 'bar', 'hello', 'world']);
  --> {elements: ['foo'], repeats: 2}
```

```javascript
findMostRepeated(['foo', 'foo', 1, 2, 3, 'bar', 2, 3, 4, 'bar', 'bar', 'foo']);
  --> {elements: ['foo', 'bar'], repeats: 3}
```
