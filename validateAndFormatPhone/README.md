## Validate and format UK phone number

The challenge is to implement a function which takes a string which should be a UK phone number

* If the phone number is not valid in any format you should throw an error
* The error message should be "Invalid phone number"
* The phone number can be "valid" in many formats: +4407, 004402, 07, 01, 02
* Our application only accepts private phone numbers (07, 01, 02)
* we are using [Twilio](https://www.twilio.com/) to text our customers when they place an order
* Twilio required numbers to be sent to their API in +447... format
* Once a number has been validated it must be changed to the format Twilio requires

##### examples

You can use these examples to start building up your test suite

```javascript
    validateAndFormatPhone("08559912983");
    // -> Error: Invalid phone number
```

```javascript
    validateAndFormatPhone("Not a Number");
    // -> Error: Invalid phone number
```

```javascript
    validateAndFormatPhone("+2082394891246");
    // -> Error: Invalid phone number
```

```javascript
    validateAndFormatPhone("01616603202");
    // -> "+441616603202"
```

```javascript
    validateAndFormatPhone("00441616603202");
    // -> "+441616603202"
```

```javascript
    validateAndFormatPhone("07540706000");
    // -> "+447540706000"
```

```javascript
    validateAndFormatPhone("+447540706000");
    // -> "+447540706000"
```
