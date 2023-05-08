/*
Exercise 3: Finding a blog post using an ID

This exercise is similar to the last. We are going to find
a person using the '.find()' array method, however we will
need to check two separate values this time.

This time round there is a much larget set of data that
is over 1000 lines of code. You can have a quick look at the file,
'exercise-3-data.js', which is in the same diectory as this file.

You will need to find a todo that has the following properties:
  userId: 3,
  id: 43,

*/
import { todos } from "./exercise-3-data.js";

const foundTodo = todos.find(({ userId, id }) => userId === 3 && id === 43);

console.log(foundTodo);

// code wars solutions and test goes under here

//              write code that only adds the positive numbers
// const array = [1, -4, 7, 12];

// function positiveSum(arr) {
//   let total = 0;
//   arr.map((item) => {
//     if (item <= 0) {
//       item = 0;
//     }
//     total += item;
//   });
//   console.log(total);
//   return total;
// }

// positiveSum(array);
