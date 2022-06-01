'use strict';
/*
let markMass = 78;
let johnMass = 92;

let markHeight = 1.69;
let johnHeight = 1.95;

const bmiMark = markMass / (markHeight**2);
console.log(bmiMark);

const bmiJohn = johnMass / (johnHeight**2);
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

markMass = 95;
johnMass = 85;

markHeight = 1.88;
johnHeight = 1.76;

const bmiMark2 = markMass / (markHeight**2);
console.log(bmiMark2);

const bmiJohn2 = johnMass / (johnHeight**2);
console.log(bmiJohn2);

const markHigherBMI2 = bmiMark2 > bmiJohn2;
console.log(markHigherBMI2);

//  Challenge 2

let markMass = 78;
let johnMass = 92;

let markHeight = 1.69;
let johnHeight = 1.95;

const bmiMark = markMass / (markHeight**2);
console.log(bmiMark);

let roundedMark = bmiMark.toFixed(2);
console.log(typeof roundedMark);
console.log(roundedMark);

const bmiJohn = johnMass / (johnHeight**2);
console.log(bmiJohn);

let roundedJohn = bmiJohn.toFixed(2);
console.log(typeof roundedJohn);
console.log(roundedJohn);

if (roundedMark > roundedJohn) {
    console.log(`Mark's BMI (${roundedMark}) is higher than John's (${roundedJohn}).`)
} else {
    console.log(`John's BMI (${roundedJohn}) is higher than Mark's (${roundedMark}).`)
}

// Challenge 3

// Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

let scoreDolphins = (96 + 108 + 89)/3;;
console.log(typeof scoreDolphins, scoreDolphins);
let scoreKoalas = (88 + 91 + 110)/3; 
console.log(typeof scoreKoalas, scoreKoalas);

if(scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy.🏆")
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy.🏆")
} else {
    console.log("Both teams won a trophy.🏆")
}

// Bonus 1 : Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
scoreDolphins = (97 + 112 + 101)/43;
scoreKoalas = (109 + 95 + 123)/31;

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy.🏆")
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy.🏆")
} else {
    console.log("Both teams won a trophy.🏆")
}

// Bonus 2 : Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy.🏆")
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy.🏆")
} else if(scoreDolphins === scoreKoalas && 
    scoreDolphins >= 100 && 
    scoreKoalas >= 100) {
        console.log("There was a draw.")
    } else {
        console.log("No team won.")
}



let scoreKoalas = (88 + 91 + 110)/3;


if (scoreDolphins > scoreKoalas) {
    console.log("The Dolphins beat the Koalas.")
} else if (scoreDolphins < scoreKoalas) {
    console.log("The Koalas beat the Dolphins.")
} else {
    console.log("There was a draw.")
}

// Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
scoreDolphins = (97 + 112 + 101)/3;
scoreKoalas = (109 +  95 + 123)/3;
console.log(Number(scoreDolphins.toFixed(2)),Number(scoreKoalas.toFixed(2)));

if (scoreDolphins>scoreKoalas && scoreDolphins>=100) {
    console.log(`Dolphins won with ${scoreDolphins}.`)
} else if (scoreKoalas>scoreDolphins && scoreKoalas>=100) {
    console.log(`Koalas won with ${scoreKoalas}.`)
} else {
    console.log("Nobody won.")
}

//Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
scoreDolphins = (97 + 112 + 101)/3;
scoreKoalas = (109 + 95 + 106)/3;
console.log(scoreDolphins,scoreKoalas);

if (scoreDolphins === scoreKoalas, 
    scoreDolphins>100, 
    scoreKoalas>100) {
        console.log(`There was a draw with ${scoreDolphins.toFixed(2)} points.`)
} else {
    console.log("There was no draw.")
}

// Challenge 4

const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip} and the grand total was ${bill + tip}`)
*/