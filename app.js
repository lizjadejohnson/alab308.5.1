//-----------------------PART 1------------------------//

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

//-----------------------PART 2------------------------//

let exampleData = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// Sort the array by age.
exampleData.sort((a, b) => parseInt(a.age) - parseInt(b.age));
// Filter the array to remove entries with an age greater than 50.
const filteredData = exampleData.filter((item) => parseInt(item.age) <= 50);
// Map the array to change the “occupation” key to “job” and increment every age by 1.
const mappedData = filteredData.map((item) => ({
  ...item,
  job: item.occupation,
  age: (parseInt(item.age) + 1).toString(),
}));
// Use the reduce method to calculate the sum of the ages.
const sumOfAges = mappedData.reduce((acc, item) => acc + parseInt(item.age), 0);

// Then use the result to calculate the average age.
const averageAge = sumOfAges / mappedData.length;

console.log("Sorted and Filtered Data:", filteredData);
console.log("Mapped Data:", mappedData);
console.log("Sum of Ages:", sumOfAges);
console.log("Average Age:", averageAge);

//-----------------------PART 3------------------------//

function incrementAgeDirectly(obj) {
  // Check if 'age' field exists; if not, initialize to 0
  if (typeof obj.age !== "number") {
    obj.age = 0;
  }
  // Increment the 'age' field
  obj.age += 1;

  // Update or add 'updated_at' field with the current time
  obj.updated_at = new Date();
}

function incrementAgeOnCopy(obj) {
  // Create a shallow copy of the object
  const copy = { ...obj };
  // Check if 'age' field exists; if not, initialize to 0
  if (typeof copy.age !== "number") {
    copy.age = 0;
  }
  copy.age += 1;
  copy.updated_at = new Date();
  return copy;
}

//-----------------------PART 4------------------------//
