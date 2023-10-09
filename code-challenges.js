// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
//const fruit1 = "apple"
//const fruit2 = "banana"
// Expected outcome: "banana"

// if(fruit1.length > fruit2.length){
//     console.log(fruit1) 
//  } else {
//     console.log(fruit2) 
// }

// Set two:
 const fruit1 = "cherry"
 const fruit2 = "kiwi"
// Expected outcome: "cherry"

// conditional statement comparing length of 2 strings
if(fruit1.length > fruit2.length){
    // if condition is true log fruit1
    console.log(fruit1)
    // if first condition is false
} else {
    //if condition is true log fruit2
    console.log(fruit2)
}

// Pseudo code:



// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

//Merged the two arrays using concat 
console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)

// Expected output: 9

// Pseudo code:

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

const myReversedString = currentCohort.split("").reverse().join("")
console.log(myReversedString)

// Pseudo code:

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
console.log('')
// Expected output: 13 5 -5 27

// Pseudo code:
