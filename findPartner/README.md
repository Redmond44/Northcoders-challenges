# Find Partner

The challenge is to traverse an array by following some given directions.

The function takes 2 arguments:
  1. An array containing arrays of students
  2. An array of directions.

You need to return an array of all of the students you have hovered over.

For example. Our student dataset shows the current seating plan on one set of the desks.

```
const students = [
  ['Steve', 'Dave', 'Mike', 'Lisa', 'Stacey'],
  ['Emma', 'Martin', 'Susan', 'Rich', 'Luke']
];
```

Rules:

1. This array allows you to rotate horizontally but not vertically. i.e. if you are at the leftmost item and go left again it will take you to the rightmost item in the same array. However, if you at the top of the array and try to go up, you will stay where you are.

2. You can assume you always start at position ```[0, 0]``` and that you don't need to add the starting person to the results.

3. Directions will be either;
```up, down, left, right```

4. If you go up/down and you cannot move, then do not add that person on to the list again.


You can use these examples to start building up your test suite:

```
traverseStudents(students, ['right'])
  // -> ['Dave']
```

```
traverseStudents(students, ['left'])
  // -> ['Stacey']
```

```
traverseStudents(students, ['right', 'right', 'right'])
  // -> ['Dave', 'Mike', 'Lisa']
```

```
traverseStudents(students, ['right', 'up', 'up'])
  // -> ['Dave']
```
