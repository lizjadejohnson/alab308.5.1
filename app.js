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

//-----------------------VARIABLES AND FUNCTION CALLS--------------------------//

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
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
