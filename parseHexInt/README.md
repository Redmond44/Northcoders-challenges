# Parse Hexadecimal Integer

In this kata, you need to complete the function `parseHexInt` which takes a hexadecimal number, such as F8, and returns the same number expressed in the decimal numerical sytem.

To read more about the Hexadecimal numerical system, see some of the following links:

## Resources

[Understanding Hexadecimal in 60 seconds](https://www.youtube.com/watch?v=3nl5zmeBdbI)

[Comprehensive explanation of Binary, Decimal and Hex](https://www.youtube.com/watch?v=ZL-LhaaMTTE)

[Why do we use Hexadecimal numbers?](https://medium.com/@savas/why-do-we-use-hexadecimal-d6d80b56f026)

## Your task

You should complete the `parseHexInt` function **without** recourse to any of the native JavaScript number manipulation functions such as `parseInt`! Research how hex numbers work and how to manually convert between the hexadecimal and decimal systems. 

Your function should be case insensitive when it comes to the hexadecimal numbers, as is the native `parseInt`. If your function receives a non-valid hex number.


### Examples


```javascript
parseHexInt('ff')
// --> 255
```

```javascript
parseHexInt('f')
// --> 15
```

```javascript
parseHexInt('17f')
// --> 183
```

```javascript
parseHexInt('d4e89')
// --> 872073
```