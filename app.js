//-----------------------FUNCTIONS------------------------//

// Take an array of numbers and return the sum.

const sumNums = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

// Take an array of numbers and return the average.

const avgNums = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  const avg = sum / nums.length;
  return avg;
};

// Take an array of strings and return the longest string.
const longestStrings = (strings) => {
  let longestString = "";
  strings.forEach((string) => {
    if (string.length > longestString.length) {
      longestString = string;
    }
  });
  return longestString;
};

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
const findLongerStrings = (strings, num) => {
  let longerStrings = [];
  strings.forEach((string) => {
    if (string.length > num) {
      longerStrings.push(string);
    }
  });
  return longerStrings;
};

//-----------------------VARIABLES AND FUNCTION CALLS--------------------------//

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

// const printNums = (num) => {
//   for (let i = 0; i < nums; i++) {
//     console.log(i);
//   }
// };

// Also works, but less good of a solution:

// let count = 1;
// const printNumsWhile = (num) => {
//   while (count < num) {
//     console.log(count);
//     count++;
//   }
// };

// OOOPS just saw it said without using loops, lol ok. Umm... I am goign to need to think on that one, sorry.
