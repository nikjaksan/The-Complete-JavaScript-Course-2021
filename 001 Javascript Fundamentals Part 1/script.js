'use strict'
/*
010 Variables
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Nick");
console.log(23);

let firstName="Nicholas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonasMatilda="JM";
console.log(jonasMatilda);

012 Data Types

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof "Hello");
// console.log(typeof 3.14);
// console.log(typeof undefined);

javaScriptIsFun="Yes!";
console.log(javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year=1991; //Redefining the variable year from undefined to defined
console.log(year);

// 013 let, const and var

let age; //let allows for change of datatype or use undefined
age=25;
console.log(age);

const birthYear=1991;//const is used for CONSTant datatypes (unchanging or immutable)
// birthYear=1990; would yield a TypeError
// const; would yield an "Missing initialiser in const declaration" error since const =/= undefined
// 

// 014 Basic Operators

// Mathematical operations
// Minus Operator
const ageNick = 2022 - 1996;
const ageSarah = 2022 - 2018;
console.log(ageNick, ageSarah);
// 2022 is repeating, if it changes we would have to do more work.
const now = 2022; //single variable 'now'
const ageNick = now - 1996;
const ageSarah = now - 2018;
console.log(ageNick, ageSarah);
// Multiplication & Division
console.log(ageNick * 2, ageNick / 10);
// Exponentiation
console.log(ageNick ** 2); // ** x  raises to the x power
// Concatenation (Adding strings one after the other)
const firstName='Nick';
const lastName='Santiago';
console.log(firstName + ' ' + lastName);
let x = 10 + 5; //x=15 since '+' operator executed before '=' operator precedence
x += 10; // x = x + 10  reassign x by taking original value and adding 10
x *= 4; // x = x * 4 reassign x by multiplication
x ++; // x = x + 1
x --; // x = x - 1
x --; // x = x - 1
console.log(x);
// Comparison Operators
console.log(ageNick > ageSarah); //boolean operator
console.log(ageNick >= ageSarah); // greater-equal operator

// 015 Operator Precedence

const now = 2022; //single variable 'now'
const ageNick = now - 1996;
const ageSarah = now - 2018;

console.log(now - 1996 > now - 2018); //Why does '-' take precedence over '>'?
// The boolean operators have lower precedence than the mathematic operators
const averageAge = (ageNick + ageSarah) / 2; //Brackets have the highest precedence
console.log(ageNick,ageSarah,averageAge);
// 016 Challenge 1

// 017 Strings and Template Literals

const firstName = 'Nick';
const job = 'unemployed student';
const birthYear = 1996;
const yearNow = 2022;

const nick = "I'm " + 
firstName + 
", a " + 
(yearNow - birthYear) + 
" year old " + 
job + 
"."
console.log(nick);

const nickNew = `I'm ${firstName}, a ${yearNow - birthYear} year old ${job}.`;
console.log(nickNew);

// 018 Making Decisions (if/else statements)

const ageSarah = 18;
const yearsRemaining = 18 - ageSarah;

if(ageSarah>=18) {
    console.log(`Sarah is old enough to apply for her driver's license.`)
} else {
    console.log(`She will have to wait ${yearsRemaining} years until she can apply.`)
}

const birthYear = 1996;
let century;
if(birthYear<2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

// 019 Coding Challenge 2

// 020 Type Conversion and Coercion
// Type conversion using functions
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(typeof Number(inputYear), typeof inputYear);

// Some data, like names or words, can't be converted to numbers,
// so we yield the NaN (Not a Number)

console.log(Number('Nick'));
console.log(typeof NaN); 
//NaN is still a number, the operation just failed to yield a new number.

// Type coercion
console.log('I am ' + 25 + ' years old'); 
// As you can see, the number 25 gets converted to a string automatically.
console.log('23' - '10' - 3); // = 10
// JS converted the strings to numbers, and then performed the operation.
// The subtraction operators coerce the 'number' strings into floating point numbers.
console.log('23' + '10' + 3); // = 23103
// **JS converted the number into a string. The + is assosciated with the concatenation operation.
console.log('23' * '2','23' / '2' );
// Multiplication/Division operators coerce the strings into numbers.
console.log('23' > '18');
// Boolean operators convert strings to numbers.
// **Only the '+' operator converts numbers into strings.
let n = '1' + 1; //concatenates to 11
n = n - 1; // '-' is a mathematical operator, and 11 is a string
console.log(n);// Subtracting a number from a string, the - operator will coerce '11' into a number.
// result is 10
let m = 2 + 3 + 4 + '5';//Numbers added, and string is concatenated.
console.log(m);
let p = '10' - '4' - '3' - 2 + '5'; //10-4-3-2 = 1, 1 coerced into a string by '+' operator
console.log(p);//The strings with '-' operators are coerced into numbers
//The string with '+' is concatenated resulting in '15'

//021 Truthy and Falsy

//Falsy values: 0, '', undefined, null, NaN >> All get coerced into false boolean values
//Truthy values: any number that isn't 0, any string that isn't empty, empty objects '{}' >> These get coerced into true boolean values.

console.log(Boolean(0)) // False
console.log(Boolean(''))  // False
console.log(Boolean(undefined)) // False
console.log(Boolean(null)) // False
console.log(Boolean(NaN)) // False

console.log(Boolean(13)); //  True
console.log(Boolean('Nick')); //  True

//JS will coerce these values to a boolean, Boolean() is just a function for demonstration purposes.
//In practise, the conversion to boolean is always implicit (coerced). We rarely have to explicitly state this.

let money = 0; //0 is a falsy value
if (money) {
    console.log("Dont spend it all.")
} else {
    console.log("You should get a job") //This gets printed
}

money = 100; //A non-zero number will yield a truthy value
if (money) {
    console.log("Dont spend it all.")// This will print since 100 is a truthy value
} else {
    console.log("You should get a job")
}

let height; //Height is undefined
if (height) {
    console.log("Height is defined.")
} else {
    console.log("Height is not defined.")//Since height is undefined, a falsy value, the else block executes.
}

height = 1.85; //Height is now a non-zero (1.85)
if (height) {
    console.log("Height is defined.") // The height is defined
} else {
    console.log("Height is not defined.")
}

height = 0; //0 is a valid value for a true statement in this case
if (height) {
    console.log("Height is defined.")
} else {
    console.log("Height is not defined.")//However, 0 is a falsy value, which executes the else block
}
// This yields a bug (The condition is true, but yields a false result)

//022 The equality operators (== & ===)

//The loose equality operator (==) will coerce strings into numbers.
//The strict eqaulity operator (===) does not coerce values.
const age = 18;
if (age===18) console.log("The age is 18.") //True; number 18 strictly equal to number 18
if (age==='18') console.log("The age is 18.") //False since === is a strict equality, meaning '18' the string =/= 18 the number
if(age == 18) console.log("The age is 18.") //True; number 18 loosely equal to number 18
if(age=='18') console.log("The age is 18.") //True; '18' the string is loosely equal to 18 the number (type coercion)

//**create a prompt with the prompt() function
//**inputs into prompt are coerced into strings
const favouriteNumber = prompt("What's your favourite number?");
console.log(favouriteNumber);
console.log(typeof favouriteNumber);
//Loose equality coerces '23' the string into a number
if (favouriteNumber==23) {
    console.log("Your number is 23.")
} else {
    console.log("Your number is not 23.")
}

//Strict eqaulity does not allow for coerced values, thus '23' from the prompt
//will yield a false outcome, executing the else block.

if (favouriteNumber===23) {
    console.log("Your number is 23.")
} else {
    console.log("Your number is not 23.") //False block executed
}


//Always use the strict equality (===)
//The string outputted by the prompt should be converted into a number (explicitly)
//Do this by wrapping the number output in a Number() function, as follows:
const favouriteNumber = Number(prompt("What's your favourite number?"));
if (favouriteNumber===23) {
    console.log("Your number is 23.", "The datatype is a ",typeof favouriteNumber)
} else {
    console.log("Your number is not 23.") //False block executed
}

// We can extend the if/else conditional by adding an "else if"

const favouriteNumber = Number(prompt("What's your favourite number?"));
if (favouriteNumber===23) {
    console.log("Your number is 23.", "The datatype is a ",typeof favouriteNumber)
} else if (favouriteNumber===7){
    console.log("Your number is a 7.","The datatype is a ",typeof favouriteNumber) 
} else if (favouriteNumber===9) {
    console.log("Your number is a 9.","The datatype is a ",typeof favouriteNumber)
}
else {
    console.log("Your number is neither a 23, a 9 nor a 7.","The datatype is a ",typeof favouriteNumber)
}

//Not loosely/strictly equal

const favouriteNumber = Number(prompt("What is your favourite number?")) 
if (favouriteNumber!=19) { //If input is =/=19 then condition is true
    console.log("Your favourite number is not number 19")
} else {//If input ==19 then condition is false
    console.log("Your favourite number is 19")
}
const favouriteNumber = Number(prompt("What is your favourite number?"))
if (favouriteNumber!==19) { //If your favourite number isn't strictly the number 19, the condition is true
    console.log("Your favourite number isn't 19.")
} else { //If your number is 19, the conditional is false
    console.log("Your favourite number is 19.")
}

*/

// 023 Boolean Logic

/*

AND operator (&&) - only true if ALL are true
OR operator (||) - true if at leastt one operand is true
NOT operator basically inverts the value (TRUE >> FALSE, FALSE >> TRUE)
age = 16
A: Age >= 20  >>FALSE
B: Age < 30 >>TRUE
!A (false) >> TRUE
A(false) AND B(true) >> FALSE (Not all are true)
A(false) OR B(true) >> TRUE (At least one is true)
A! (true) AND B (true) >> TRUE (All conditions are true for AND to be true)


// 024 Logical Operators


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense&&hasGoodVision);
console.log(hasDriversLicense||hasGoodVision);
console.log(!hasGoodVision);

let shouldDrive = hasDriversLicense&&hasGoodVision;
if (shouldDrive) {
    console.log("Sarah can drive.")
} else {
    console.log("Sarah cannot drive.")
}

const isTired = false;
shouldDrive = hasDriversLicense&&hasGoodVision&&!isTired;

if (shouldDrive) {
    console.log("Sarah can drive.")
} else {
    console.log("Sarah cannot drive.")
}



// 026 The switch statement

let day = 'monday';

switch(day) {
    case 'monday':
        console.log("Plan course structure.")
        console.log("Go to coding meetup.")
        break;
        case 'tuesday':
            console.log("Prepare theory videos.")
            break;
            case 'wednesday':
                case 'thursday':
                    console.log("Write code examples.")
                    break;
    case 'friday':
        console.log("Record videos.")
        break
        case 'saturday':
            case 'sunday' :
                console.log("Enjoy the weekend.")
                break;
    default:
        console.log("Not a valid day.")
    }
    
    // day = 'tuesday';
    if (day === 'monday') {
        console.log("Plan course structure.")
        console.log("Go to coding meetup.")
    } else if (day === 'tuesday') {
        console.log("Prepare theory videos.")
    } else if (day === 'wednesday' || day === 'thursday') {
        console.log("Write code examples.")
    } else if (day === 'friday') {
        console.log("Record videos.")
    } else if (day === 'saturday' || day === 'sunday') {
        console.log("Enjoy the weekend.")
    } else {
        console.log("Not a valid day.")
    }
    
    
    // 027 Statements and Expressions
    // Javascript program consists of statements. 
    // They are executed one by one, in the same order as they are 
    // written. Statements can contain other constructions like 
    // expressions, keywords, operators and other stuff.
    // Expressions are parts of statements that return values. 
    // So expressions can be used whenever value is expected.
    
    // There is a difference between statements and expressions:
    // Statements do NOT produce a value (eg. const variable = 'This is a string';)
    // Expressions DO produce a value (eg. 211 - 1 = 210)
    // Expressions end with semi-colons ';'. 
    // Statement examples : If/Else statement, Switch Statement etc.
    
    
    // 028 Conditional (Ternary) Operators
    
    
    // Ternary Operator (Produces a value)
    const age = 17;
    age >= 18 ? console.log("Old enough to drive.") : console.log("Too young to drive.")
    

    // If/Else statement (Does not produce a value)


let drink2; // We have to declare variables outside of the block since variables declared inside will only be recognised inside. 
if (age>=18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);
// Ternary operators enable us to implement their output as a template literal (since they produce a value), where as if/else statement do not (since they are statements).
console.log(`I can drink ${age >= 18 ? 'wine🍷' : 'water💧'}.`)
//Directly inserting the value produced by the ternary

*/



    
 








