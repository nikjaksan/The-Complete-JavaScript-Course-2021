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
*/
// 041 Coding Challenge 2