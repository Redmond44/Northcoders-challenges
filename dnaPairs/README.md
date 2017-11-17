## DNA Pairs

Create a function that takes a string of DNA and matches each base with its pair, returning a nested array. In DNA, A pairs with T and C pairs with G.


##### Examples

Here are some examples to help you build out your test suite.


```javascript
    dnaPair("G");
    // -> [ ["G", "C"] ]
```

```javascript
    dnaPair("AG");
    // -> [ ["A", "T"], ["G", "C"] ]
```

```javascript
    dnaPair("ATAG");
    // -> [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ]
```
