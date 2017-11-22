## Rotate Array

The challenge is to implement a function which rotates the elements of an array x number of positions

The function takes two arguments, an array and a number, and always returns an array.


##### Examples

Here are some examples to help you build out your test suite:

* If the number is zero return the array unchanged

```javascript
    rotateArray([1,2,3], 0);
    // -> [1,2,3]
```

* If the number is positive return the array rotated x times to the right

```javascript
    rotateArray([1,2,3], 1);
    // -> [3,1,2]
```

```javascript
    rotateArray([1,2,3,4,5], 3);
    // -> [3,4,5,1,2]
```

* If the number is negative return the array rotated x times to the left

```javascript
    rotateArray([1,2,3], -1);
    // -> [2,3,1]
```

```javascript
    rotateArray([1,2,3,4,5], -3);
    // -> [4,5,1,2,3]
```
