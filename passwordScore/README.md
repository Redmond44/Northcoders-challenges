## Password scores

The challenge is to explore regular expressions and write a program which marks passwords out of 10 using the scores table below. It should always return a number. Invalid inputs should return 0.

##### examples

You can use these examples to start building up your test suite

```javascript
    passwordScore('bob');
    // -> 1
```

```javascript
    passwordScore('bobbybob');
    // -> 2
```

##### Extra credit

Run your code in a browser with a password field and show the user a password score on each key up

##### Password score criteria

Special characters: ! @ £ # $ % ^ & *

<table>
    <tbody>
    <tr>
        <td><strong>Score</strong></td>
        <td><strong>Criteria</strong></td>
        <td><strong>Example</strong></td>
        </tr>
    <tr>
        <td>1</td>
        <td>Less than four characters</td>
        <td>bob</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Less than nine characters</td>
        <td>bobbybob</td>
    </tr>
    <tr>
        <td>3</td>
        <td>More than eight characters and all letters</td>
        <td>bobbobbob</td>
    </tr>
    <tr>
        <td>4</td>
        <td>More than eight characters includes a number</td>
        <td>bobbobbob1</td>
    </tr>
    <tr>
        <td>5</td>
        <td>More than eight characters includes a number and special character</td>
        <td>bobbob1#2$</td>
    </tr>
    <tr>
        <td>6</td>
        <td>More than twelve characters includes a number</td>
        <td>bobbobbobbob123</td>
    </tr>
    <tr>
        <td>7</td>
        <td>More than eight characters includes a number and special character</td>
        <td>bobbobbob1!2@3#</td>
    </tr>
    </tbody>
</table>
