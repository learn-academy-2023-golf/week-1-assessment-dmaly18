// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// Create a code that will combine the two arrays
// Input: padres1984WorldSeriesRuns & padres1998WorldSeriesRuns
// Output: 9
// Merge the two arrays using .concat, and use .length to get the return of the length of the combined arrays  

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below. 

// Pseudo code:
// Create a code that will reverse a string
// Input: currentCohort
// Output: 3202 NRAEL
// Declare variable myReversedString, use .split to turn the string into an array, .reverse to reverse the array, and .join to turn the array back into a string 

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

const myReversedString = currentCohort.split("").reverse().join("")
console.log(myReversedString)

// Pseudo code:

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

// Pseudo code:
// create a function that returns only the odd numbers
// Input: stockExhcange
// Output: [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// parameter: newArray
// .fiter for iteration
// modulo to determine if the number is odd 

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

const onlyOddNumbers = (newArray) => {
    return newArray.filter(value => value % 2 !== 0)
}
console.log(onlyOddNumbers(stockExchange))
// Pseudo code:
