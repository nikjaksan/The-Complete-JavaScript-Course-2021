'use strict';
// 033 Functions
/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital is ${capitalCity}.`
}
const southAfrica = describeCountry('South Africa', 56, "Pretoria");
const finland = describeCountry('Finland', 6, "Helsinki");
const portugal = describeCountry('Portugal', 11, 'Lisbon')

console.log(southAfrica, finland, portugal);

// 034 Function Declarations vs. Expressions


// Function Declaration
function percentageOfWorld(population) {
    return (population / 7900) * 100;
}
// Function Expression
const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
}

const chinaPercentage1 = percentageOfWorld(1440).toFixed(2);
const portugalPercentage1 = percentageOfWorld(10).toFixed(4);
const southAfricaPercentage1 = percentageOfWorld(56).toFixed(3);

console.log(chinaPercentage1,portugalPercentage1,southAfricaPercentage1)

const chinaPercentage2 = percentageOfWorld2(1440).toFixed(2);
const portugalPercentage2 = percentageOfWorld2(10).toFixed(4);
const southAfricaPercentage2 = percentageOfWorld2(56).toFixed(3);

console.log(chinaPercentage2,portugalPercentage2,southAfricaPercentage2);



// 035 Arrow Functions


const percentageOfWorld3 = population => (population / 7900) * 100;
const southAfricaPop = percentageOfWorld3(56).toFixed(2);
const chinaPop = percentageOfWorld3(1440).toFixed(2);
const portugalPop = percentageOfWorld3(10).toFixed(2);
console.log(southAfricaPop + "%", chinaPop + "%", portugalPop + "%");


// 036 Functions calling other Functions
const populationPercentage = popCountry => (popCountry/7900)*100;
console.log(populationPercentage(56));

function describePopulation (country, population) {
    return `${country} has a population of ${population} million people, which is ${populationPercentage(population).toFixed(2)}% of the global share.`
}

console.log(describePopulation('China', 1440));
console.log(describePopulation('South Africa', 56));
console.log(describePopulation('Portugal', 10));


//

// 039 Introduction to Arrays
const populations = [56, 1440, 10, 350];
if (populations.length === 4) {
    console.log("The array has 4 elements.")
} else {
    console.log("The array does not have 4 elements.")
}
console.log(populations.length);

function percentageOfWorld(population) {
    return ((population / 7900) * 100).toFixed(2);
}

const populationAsPercentage = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[populations.length - 1])]

console.log(populationAsPercentage);



// 040 Basic Array Operations (Methods)
// create array
const neighbours = [
    'Namibia',
    'Botswana',
    'Zimbabwe',
    'Mozambique'
]
console.log(neighbours);
//add element to end
neighbours.push('Utopia');
console.log(neighbours);
// remove end element
neighbours.pop();
console.log(neighbours);
// if/else using array method includes
if (neighbours.includes('Germany')) {
    console.log("Likely a Central European country.")
} else {
    console.log("Likely not a Central European country.")
}

// find and use index to replace element
console.log(neighbours);
neighbours[neighbours.indexOf('Mozambique')] = 'Republic of Mozambique';
console.log(neighbours);


// 042 Introduction to Objects

const myCountry = {
    country: 'South Africa',
    capital: 'Pretoria',
    langauge: 'English',
    population: 56,
    neighbours: ['Namibia', 'Botswana', 'Zimbabwe', 'Mozambique']
}

console.log(myCountry);


// 043 Dot vs. Bracket Object Notation

const myCountry = {
    country: 'South Africa',
    capital: 'Pretoria',
    langauge: 'English',
    population: 59,
    neighbours: ['Namibia', 'Botswana', 'Zimbabwe', 'Mozambique']
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.langauge} speakers. It also has ${myCountry.neighbours.length} neighbouring countries.`)

myCountry.population += 2;
console.log(myCountry);

myCountry['population'] -= 2;
console.log(myCountry);


// 044 Object Methods

const myCountry = {
    country: 'South Africa',
    capital: 'Pretoria',
    langauge: 'English',
    population: 59,
    neighbours: ['Namibia', 'Botswana', 'Zimbabwe', 'Mozambique'],
    describe: function () {
        return `${this.country} has ${this.population} million ${this.langauge} speakers. It also has ${this.neighbours.length} neighbouring countries.`
    },
    checkIsland: function () {
        // this.isIsland = this.neighbours.length === 0 ? true : false;
        this.isIsland = !Boolean(this.neighbours.length)
        // create property called isIsland
        // neigbours.length conv. boolean
        // if neigbours.length = 0
        // then boolean = false (falsy)
        // if neigbours.length > 0
        // then boolean = true
        // opposite false >> true
        // therefore isIsland = true
        return this.isIsland
    }
}

console.log(myCountry.describe());
console.log(myCountry.checkIsland());



// 046 Iteration_the forloop

for (let isVoting = 1; isVoting <= 50; isVoting ++) {
    console.log(`Voter number ${isVoting} is currently voting.`)
}


// 047 Looping Arrays (Contuining and Breaking)\

const populations = [56, 1440, 10, 350];

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2[i] = populations[i] / 7900;
    console.log(percentages2[i].toFixed(3)+ "%");
}

for (let i = 0; i < populations.length; i++) {
    if (populations[i] > 100) {
        continue;
    }
    console.log(populations[i]);
}
*/

