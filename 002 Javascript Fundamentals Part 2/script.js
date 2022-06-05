'use strict';
/*
// 033 Functions

// Functions allow us to create more easily maintainable code that is more efficient. D.R.Y. = Don't Repeat Yourself!
// function functionName(parameter 1, parameter 2, ...) {
//  >>logic or executable (eg. console.log("This is parameter 1 and this is parameter 2"))
// }
// Basic function without much use
function logger() {
    console.log("I am a function.");
}
logger();

// Function with arguments
// functionName(argument1, argument2);  >>Arguments plug into function parameters
function fruitProcessor(apples,oranges) { //parameters
    const juice = `This juice has ${apples} apples and ${oranges} oranges.`;
    return juice //output variable juice
}
const appleJuice = fruitProcessor(5,0); //calling function with arguments 5 and 0.
console.log(appleJuice);

const appleorangeJuice = fruitProcessor(3,3);
console.log(appleorangeJuice);

// The default values in JS are undefined.

function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`)
}
greet("Nick") // print: Hello Nick undefined   - since lastName had no argument it was therefore undefined.

greet("Nick", "Santiago"); //Both arguments are defined

// 034 Function Declarations vs. Expressions


// Function declaration:
function multiplyNumbers(num1, num2, num3) {
    return num1 * num2 * num3;
}
const myProduct = console.log(multiplyNumbers (2, 6, 5));

// Function declarations have 'hoisting' enabled. The function parameters can be defined before we set up the actual function. It is not good practice to do this but it is possible.
const age1 = console.log(calcAge1(1996));

function calcAge1(birthYear) { //this function will execute normally
    return 2022 - birthYear;
}


//  Function expression:
// Functions are essentially values, and values can be stored in variables. Remember expressions produce values.

const multiplyNumbers2 = function(num1, num2, num3) {//anonymous function is assigned to variable multiplyNumbers2
    return num1 * num2 * num3;
}
console.log(multiplyNumbers2(2, 6, 5));
// Cannot access 'multiplyNumbers2' before initialization if function parameters are defined before function is created. 'Hoisting' is not enabled

// example 2
const calcAge2 = function(birthYear) {
    return 2022 - birthYear
}
console.log(calcAge2(1996));

// example 3
const myAge = function(firstName, birthYear) {
    const year = new Date().getFullYear();
    return `${firstName} is ${ year - birthYear} year(s) old.`
}
const currentAge = console.log(myAge('Nick', 1996));
// currentAge could only be defined after the function was stored in a expression

// 0335 Arrow Functions

// store arrow function in a variable;

// square a number - function with 1 parameter and 1 line
const squareNumber = numVariable => (numVariable)**2;
console.log(squareNumber(2));
console.log(squareNumber(3));
console.log(squareNumber(4));
// Note: No () surround function parameter and no 'return'.
// This ONLY applies to arrow functions meeting this criteria

// square and cube a number (2 parameters)
const squareNumber2 = (num1, num2) => {
    const squareOne = num1**2;
    const squareTwo = num2**2;
    return squareOne - squareTwo
}
console.log(squareNumber2(5, 3));

// same function in a single line (more efficient)
const squareNumber3 = (num1, num2) => num1**2 - num2**2;
console.log(squareNumber3(5,4));

// Arrow functions with a Ternary Operation - parameters left empty
const month = new Date().getMonth();
const isMay = () => `${month !== 4 ? "No, it is not May" : "Yes, it is May."}`;
console.log(isMay())

const year = new Date().getFullYear();
const is2022 = () => `${year === 2022 ? "It is 2022" : "It is not 2023."}`;
console.log(is2022());

// Arrow function with 3 parameters (mulitiple lines)


const year = new Date().getFullYear();

const canVoteLong = (firstName, birthYear, year) => {
    const canVoteLong = (year - birthYear) >= 18;
    return `${firstName} ${canVoteLong ? "can vote" : "can't vote"}`
}
console.log(canVoteLong('Nick', 1996, year));


// Arrow function with 3 parameters (single line)

const canVoteQuick = (firstName, birthYear, year) => (year - birthYear) >= 18 ? `${firstName} can vote` : `${firstName} can't vote`;

console.log(canVoteQuick('Nick', 1996, year));
console.log(canVoteQuick('John', 2009, year));
console.log(canVoteQuick('Eunice', 1846, year));


const calcAge = (firstName, birthYear, year) => year - birthYear >= 18 ? `${firstName} is old enough to vote.` : `${firstName} isn't old enough to vote.`;
console.log(calcAge('Nick', 1996, year));


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = year - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years time.`
}
console.log(yearsUntilRetirement(1996, "Nick"));



const year = new Date().getFullYear();

const yearsUntilRetirementQuick = (birthYear, firstName) => year - birthYear >= 65 ? `${firstName} can retire.` : `${firstName} can't retire`;
console.log(yearsUntilRetirementQuick(1996, 'Nick'));

const year = new Date().getFullYear()
const ageCalc = (birthYear) => (year - birthYear);
const age = ageCalc(1996);
console.log(age);

const yearsUntilRetirementQuick = (age) => (65 - age);
console.log(`You have ${yearsUntilRetirementQuick(age)} years until retirement.`);



// 036 Functions calling other functions

// Function adding squared numbers (Function A)
function sumPowers (num1, num2, num3, num4) {
    const square1 = Math.pow(num1, 2);
    const square2 = Math.pow(num2, 2);
    const square3 = Math.pow(num3, 2);
    const square4 = Math.pow(num4, 2);
    return square1 + square2 + square3 + square4
}
console.log(sumPowers(2,3,4,5));
// What if we wanted to cube instead of square? We'd be required to go through the long process of changing each squareX variable from 2 >> 3
// This is where functions calling functions comes into play


// Function A calling function B

// Function B
function getPower (number) {
    return Math.pow(number, 2)
}

// Function A
function sumPowers (num1,num2,num3,num4) {
    //Exponential operation gets moved outside to Function B
    const square1 = getPower(num1);
    const square2 = getPower(num2);
    const square3 = getPower(num3);
    const square4 = getPower(num4);
    return square1 + square2 + square3 + square4;
}
console.log(sumPowers(2,3,4,5))//Argument >> Function A >> Function B

// Now, if we want to change from square >> cube, all we need to do is adjust function B (one line as opposed to 4)


// Function A calling function B (Same code but more efficient)

function getPower (number) { //function B
    return Math.pow(number, 3);
}

function sumPowers (num1,num2,num3,num4) {//function A
    return getPower(num1) + getPower(num2) + getPower(num3) + getPower(num4);
}

console.log(`The total is ${sumPowers(2,3,4,5)}.`);

// Function calling two other functions

function getTax(bill, taxRate) { //function A
    return bill * taxRate
}
function getTip(bill, service) { //function B
    return service === 'bad' ? bill * 0.15 : service === 'good' ? bill * 0.2 : bill * 0.25;
}
function calcTotal (bill, taxRate, service) { //function C
    return `Your bill for today is $${bill + getTax(bill, taxRate) + getTip(bill, service)}`;
}
console.log(calcTotal(100, .15, "good"));
console.log(calcTotal(100, .15, "bad"));
console.log(calcTotal(100, .15, "fantastic"))


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    return `We now have ${cutFruitPieces(apples)} apple pieces and ${cutFruitPieces(oranges)} orange pieces.`
}

console.log(fruitProcessor(3,4));



// 037 Reviewing Functions
// 038 Challenge 1

// 039 Introduction to Arrays
// Lame way of storing a lot of data
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

console.log(friend1, friend2, friend3);


// Array Format 1
const friends = [
    'Michael',
    'Steven',
    'Peter'
]
console.log(friends);

//Array Format 2
const friends1 = Array('Jan', 'Bichael', 'Vincent');
console.log(friends1);

//total number of values in the array
// arrayName.length
console.log(friends.length);

//position of the nth value
// arrayName.length - 1
console.log(friends.length - 1);

//replace an existing entry with another
const tempArray = Array('January', 'February', 'Marchi');
//replace typo
//call the array and input the index position as well as the replacement value.
tempArray[2] = 'March';
console.log(tempArray);
//** Arrays are not primitive values so they are able to mutate. Remember primitive values are 'Immutable'
// ** Arrays are 0 indexed (start at 0)

// We can use stored variables & even other arrays in our array
const nickFriend1 = 'Sasha';
const friendArray = ['Nico', 'Marek'];
const nickInfo = ['Age is ' + 26, "Friends are " + nickFriend1 + ", " + friendArray, "Lives in Johannesburg", "Likes to program"];
console.log(nickInfo);

// Function that utilises an array for values
function calcAge(birthYear) {
    const currentYear = new Date().getFullYear();
    const ageNow = currentYear - birthYear;
    return ageNow
}

const birthYearArray = [
    1990,
    2001,
    1989
]

const age1 = calcAge(birthYearArray[0]);
const age2 = calcAge(birthYearArray[1]);
const age3 = calcAge(birthYearArray[birthYearArray.length - 1]);

console.log(age1, age2, age3);


// 040 Basic Array Operations (Methods)
// Methods are like functions applied to Arrays. They are essentially Array Operations

// push method - adds element to end of array
const array1 = ['a','b','c'];
array1.push('d');
array1.push('e');
console.log(array1);
// the .push('element') returns the new length of the array.


// unshift method - adds element to beginning of array
array1.unshift('0'); //adds '0' to beginning
console.log(array1);
// .unshift('element') returns the array length

// pop method - removes the last element of the array
// arrayName.pop() >> no argument required to remove the last element
array1.pop();
console.log(array1);
// .pop returns the removed element
console.log(array1.pop()); //removed element
console.log(array1);

// .shift() method to remove the first element
// no argument required
array1.shift();
console.log(array1);
console.log(array1.shift()); //returns the removed element

console.log(array1);
// .indexOf returns the position of an element
console.log(array1.indexOf('c'));
console.log(array1.indexOf('b'));
// if indexOf can't find an element, it will return -1

// .includes('element') checks if element exists in array. If it does, returns TRUE. If it does NOT, it returns FALSE.
console.log(array1.includes('Nick')); //false since 'Nick' does not exist in the array.
console.log(array1.includes('b')); //true
// .includes() tests for STRICT EQUALITY
array1.unshift(('0')); //string '0'
console.log(array1); //array with '0'
console.log(array1.includes((0))) // number 0 >> FALSE since '0' is not === 0 (no type coercion)
// Using .includes() in an IF/ELSE statement
if (array1.includes('x')) {
    console.log('The array includes x')
} else {
    console.log("The array doesn't include x")
}
if (array1.includes('c')) {
    console.log('The array includes c')
} else {
    console.log("The array doesn't include c")
}

// 041 Coding Challenge 2

// 042 Introduction to Objects
const yearNow = new Date().getFullYear();
const birthYear = 1996;
// Array example
const nickArray = [
    'Nick',
    'Santiago',
    yearNow - birthYear,
    'Unemployed',
    ['Sasha', 'Nico', 'Marek']
]
// In arrays, order is very important(index)

// Object example
const nickObject = {
    name: "Nick",
    surname: "Santiago",
    age: yearNow - birthYear,
    status: 'unemployed',
    friends: ["Sasha", "Nico", "Marek"]
}
console.log(nickObject)
console.log(nickObject.name)
//object.propertyName >> value of property
//calling the object to produce value of property 'name'
// In Objects, the order does not matter. The object properties (keys) are used intead of the index system.

// 043 Dot vs. Bracket Notation
// Calling an object property (Dot method)
// objectName.propertyName
const nickObject = {
    firstName: 'Nick',
    lastName: 'Santiago',
    age: 26,
    status: 'unemployed',
    friends: ['Sasha', 'Nico', 'Marek']
}

console.log(nickObject.firstName);
// Dot notation requires us to use the full property name.


//property name must be in quotes when using the bracket notation
// objectName['propertyName'];
console.log(nickObject['lastName'])


// create common propertyName variable so we can call properties by combining the variable with the unique propertyKey
const nameKey = 'Name';
console.log(nickObject["first" + nameKey]); //obj name['unique key' + propertyName variable]
console.log(nickObject["last" + nameKey]);
// Only use bracket notation when we need to compute the object propertyName. Otherwise - just stick to the dot notation. (simpler)

const interestedIn = prompt(`What do you want to know about Nick? Choose between firstName, lastName, age, status or friends.`)
console.log(nickObject.interestedIn);
// undefined since nickObject does not have a property called 'interestedIn'
console.log(nickObject[interestedIn]);
//using bracket notation allows for interestedIn to be evaluated(input from the prompt) and then looked up in the object list
// using objects properties for boolean statements


if (objectName[objectProperty]) {
log objectProperty if it exists within objectName
} else {
log "Choose from list" or "Does not exist"
}


// if (nickObject[interestedIn]) {
//     console.log(nickObject[interestedIn]) // square brackets
// } else {
//     console.log("Choose one of the following: firstName, lastName, age, status or friends.")
// }

// adding new properties to an object - dot method
// objectName.newProperty = 'Property Value';
nickObject.location = 'Johannesburg'; //adding location: 'johannesburg' to the object
console.log(nickObject);

// adding new properties to an object - bracket method
// objectName['newProperty'] = 'Property Value'; -newProperty in quotes
nickObject['ethnicity'] = 'Caucasian';
console.log(nickObject);


console.log(`${nickObject.firstName} has ${nickObject.friends.length} friends and his best friend is ${nickObject.friends[0]}.`)


// 044 Object Methods
// inserting functions into objects is an object method since functions are essentially a value
//

const calcAge = function(birthYear) {
    return (new Date().getFullYear())  - birthYear;
}

const nickObject = {
    firstName: 'Nick',
    lastName: 'Santiago',
    age: 26,
    status: 'unemployed',
    friends: ['Sasha', 'Nico', 'Marek'],
    birthYear: 1996,
    // basically function expression with slightly different formatting.
    // propertyName === functionName
    //
    // functionName: function (parameters) {
        // return xyz ...
    // }
    calcAge: function (birthYear) {
        return (new Date().getFullYear())  - birthYear;
    }


    // You cannot utilise a function declaration within an object
    // eg. const calcAge=function(birthYear) { return xyz..}
}

// Utilise the dot notation to access calcAge method (object method)
// EASY
console.log(nickObject.calcAge(1996));
// Utilise the bracket notation to access calcAge method
// HARDER --- The brackets surrounds [functionName -- as a string!] with argument seperate
// objectName['functionName'](argument);
console.log(nickObject['calcAge'](1996));

// What if we want to utilise a property from the same Object in our function?
// Introducing 'this' keyword:
// this === object calling the method
//
// Inside Object:
// calcAge: function (birthYear) {
//     return (new Date().getFullYear())  - this.birthYear;
// }
// this basically refers to the object the method sits inside of.
// we could use objectName.property however we'd break the rule of          D.R.Y.(If the object name changes we would have to change all instances referring to it)

// Use method to calculate and store another property in the object

const nickObject = {
    firstName: 'Nick',
    lastName: 'Santiago',
    job: 'unemployed',
    friends: ['Sasha', 'Nico', 'Marek'],
    birthYear: 2021,
    age: 26,

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age
    },

    getSummary: function () {
        return `${this.firstName} ${this.lastName} was born in ${this.birthYear} and is ${this.age} years old. He has ${this.friends.length} friends, namely ${this.friends[0]}, ${this.friends[1]} and ${this.friends[2]}. He is currently ${this.job}. He has ${this.age >= 18 ? "a" : "no"} driver's license.`
    }
}

console.log(nickObject.getSummary());



// 046 Iteration_the forloop
// for(let varName = startingValue;varName conditional; 
// Loopincrement) {
// executable code
// }

for (let rep = 1; rep <=10; rep ++) {
    console.log(`This is repetition number ${rep}.`)
}


// 047 Looping Arrays (Breaking and Continuing)
const birthYear = 1996;
const nickArray = [
    'Nick',
    'Santiago',
    false,
    2022 - 1996,
    'Unemployed',
    ['Sasha', 'Nico', 'Marek']
]

console.log(typeof nickArray[2]);
const typeofArray = [];

for (let i = 0; i <= nickArray.length; i ++) {
    // console.log(nickArray[i])
    // populate typesArray with nickArray
    // store empty array in variable outside forloop
    typeofArray[i] = typeof nickArray[i];
}

const birthYears = [1991, 2007, 1969, 2020]
const ages = [];

for (let i = 0; i < birthYears.length; i ++) {
    // ages[i] = 2022 - birthYears[i];
    // console.log(ages[i]);
    // OR use the PUSH method
    ages.push(2022 - birthYears[i]) 
}
console.log(ages);

// Continue 
console.log("---ONLY STRINGS---")
for (let i = 0; i < nickArray.length; i++) {
    if (typeof nickArray[i] !== 'string') continue;
    console.log(nickArray[i], typeof nickArray[i]);
}

console.log("---BREAK WITH NUMBER---")
for (let i = 0; i < nickArray.length; i++) {
    if (typeof nickArray[i] === 'number') break;
    console.log(nickArray[i], typeof nickArray[i])
}

// Arrays with elements that have multiple pieces of information
const people = [['Jason', 1991], ['Megan', 2008], ['Raul', 2005], ['Ralph', 1965], ['Jessica' , 1940], ['Kelly', 2020]];
// Log only the names, which are indexed at 0.
for (let i = 0; i < people.length; i ++) {
    console.log(people[i][0]);
    // array[i][index position of element]
}


// are they old enough to drink? then print

const dateNow = new Date().getFullYear()
for (let i = 0; i < people.length; i ++) {
    const currentAge = dateNow - people[i][1]; 
    if (currentAge < 21) {
        continue;
    }
    console.log(`${people[i][0]} is ${currentAge} and can drink.`);
}

// are they too young to drink? 
for (let i = 0; i < people.length; i++) {
    const currentAge = dateNow - people[i][1];
    if (currentAge < 21) {
        console.log(`${people[i][0]} is currently ${currentAge} years old and is too young to drink.`)
    }
}


const lottery = [
    ['John', 1],
    ['Jamie', 2],
    ['Betty', 3],
    ['Jennifer', 4],
    ['Jessica', 5],
    ['Larry', 6]
]

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(Math.random());

const winningNumber = getRandomInteger(1, 6);

for (let i = 0; i < lottery.length; i++) {
    if (winningNumber === lottery[i][1]) {
        console.log(`${lottery[i][0]} won the lottery with number ${winningNumber}`)
        // break;
    } else {
        console.log(`${lottery[i][0]} lost the lottery. The winning number was ${winningNumber}`)
    }
}

// 048 Looping Backwards and Loops within Loops

// Looping Backwards
const yearNow = new Date().getFullYear();
const birthYear = 1996;

const nickArray = [
    'Nick',
    'Santiago',
    yearNow - birthYear,
    'Unemployed',
    ['Sasha', 'Nico', 'Marek'],
    false
]

for (let i = nickArray.length - 1; i > - 1; i--) {
    console.log(i, nickArray[i]);
}


for (let i = 10; i > -1; i --) {
    console.log(i);
}

const raceWinners = [
    ['Jamie', '1st'],
    ['Jessica', '2nd'],
    ['Mark', '3rd'],
    ['Steven', '4th'],
    ['Clyde', '5th']
]

for (let i = raceWinners.length - 1; i >= 0; i--) {
    // console.log(`${raceWinners[i][0]} is in position ${raceWinners[i][1]}.`);
    console.log(`${raceWinners[i]}`)
}

for (let i = 2; i > -1; i--) {
    console.log(`${raceWinners[i][0]} placed ${raceWinners[i][1]} in the race.`)
} 

//////////////////////////////////////

// How to generate a random number within a range

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandomInteger(1, 6));

// Generate a random number between 2.5 and 10.75, including both 2.5 and 10.75, and specifying 2 decimal places
function generateRandomDecimalInRangeFormatted(min, max, places) {
    let value = (Math.random() * (max - min + 1)) + min;
    return Number.parseFloat(value).toFixed(places);
}

let value7 = generateRandomDecimalInRangeFormatted(2.5, 10.75, 2);

console.log(value7);

//////////////////////////

// Nested Loops
// 3 exercises 5 repetitions each

const exercises = [
    'Curls',
    'Push-ups',
    'Sit-ups'
]

for (let i = 0; i <= exercises.length; i++) {
    if (i > 0) {
        console.log('-----------')
    }
    for (let j = 1; j <= 5; j++) {
        console.log(`${exercises[i]} repetition ${[j]}`)
    }
}


/*

for (let i = 0; i < 5; i++) {
    console.log(`The current value of i is ${i}`)
    for (let j = 0; j < 5; j++) {
        console.log(`j: ${j}`)
    }
    console.log("---------------")
}


// Math timestables using nested loops

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("--------------");
}

// Store Inventory Example

const storeInventory = [
    ["Item: Computer", "Price: $1500", "Inventory: 25"],
    ["Item: Speakers", "Price: $50", "Inventory: 100"],
    ["Item: Monitors", "Price: $200", "Inventory: 27"],
    ["Item: Headphones", "Price: $400", "Inventory: 7"],
    ["Item: Printers", "Price: $100", "Inventory: 90"],
    ["Item: USB Cable", "Price: $9", "Inventory: 500"],
    ["Item: Router", "Price: $350", "Inventory: 23"],
    ["Item: Wireless Keyboard", "Price: $20", "Inventory: 55"],
    ["Item: Fans", "Price: $35", "Inventory: 6"]
]
// console.log(storeInventory);

for (let i = 0; i < storeInventory.length; i++) {
    if (i > 0) {
        console.log("-----------------")
    }
    for (let j = 0; j < storeInventory[i].length; j++) {
        console.log(storeInventory[i][j]);
    }
}
// 049 The While Loop
// while (condition of variable) {
//      executable code
//      ++ for iteration
// }

let number = 0;
while (number < 5) {
    console.log(number);
    number++;
}



const films = [
    'Matrix',
    'Jaws',
    'Titanic',
    'Alien',
    'Aladdin',
    'Batman',
    'Inception',
    'Rocky',
    'Scarface'
]
let i = 0;
while (i < films.length) {
    console.log(films[i]);
    i++; //increment
}


// using a while() loop inside a function

function calcAverage(scores) {
    let i = 0; let sumScores = 0;
    while (i < scores.length) {
        sumScores += scores[i];
        i++;
    }
    return sumScores / scores.length;
}

const myAverage = calcAverage([99, 75, 83, 93, 100]);
const myAverage2 = calcAverage([55, 33, 54, 95, 84]);


console.log(myAverage, myAverage2);

const tvShows = [
    'Bridgerton',
    'Fate',
    'Alone',
    'Lupin',
    'Spycraft',
    '3%',
    'The Society',
    'The Rain',
    'You'
]

let myList = '', i = 0;
while (i < tvShows.length - 1) {
    myList += tvShows[i] + ", ";
    i++
} //this while loop will list shows and seperate them by a comma
myList += `and ${tvShows[tvShows.length - 1]}.` //for the last entry
console.log(myList);
*/

