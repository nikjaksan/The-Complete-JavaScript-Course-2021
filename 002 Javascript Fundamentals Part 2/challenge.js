'use strict'
// Coding Challenge 1
/*
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
    one average score per team).
    A team only wins if it has at least double the average score of the other team. 
    Otherwise, no team wins!
    Your tasks:
    1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
    2. Use the function to calculate the average for both teams
    3. Create a function 'checkWinner' that takes the average score of each team 
    as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
    to the console, together with the victory points, according to the rule above. 
    Example: "Koalas win (30 vs. 13)"
    4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
    Data 2
    5. Ignore draws this time
    Test data:
    § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
    § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// FIRST ATTEMPT
    const calcAverage = (numD1,numD2,numD3) => (numD1 + numD2 + numD3)/3;

    let avgDolphins = calcAverage(44,23,71);
    let avgKoalas = calcAverage(65,54,49);
    
    console.log(avgDolphins,avgKoalas);

    const checkWinner = (avgDolphins,avgKoalas) => avgDolphins > avgKoalas && avgDolphins > 2*avgKoalas ? `The Dolphins win.(${avgDolphins} vs. ${avgKoalas})` : avgKoalas > avgDolphins && avgKoalas ? `The Koalas win.(${avgKoalas} vs. ${avgDolphins})`: "Nobody won.";

    console.log(checkWinner());

    // Data 2

    let avgDolphins = calcAverage(85,54,41);
    let avgKoalas = calcAverage(23,34,27);

    console.log(avgDolphins,avgKoalas);

   
    const checkWinner2 = (avgDolphins,avgKoalas) => avgDolphins > avgKoalas && avgDolphins >= (2*avgKoalas) ? `The Dolphins win.(${avgDolphins} vs. ${avgKoalas})` : avgKoalas > avgDolphins && avgKoalas >= (2*avgDolphins) ? `The Koalas win.(${avgKoalas} vs. ${avgDolphins})`: "Nobody won.";

    // console.log(checkWinner2());

    function checkWinner2(avgDolphins,avgKoalas) {
        if (
        avgDolphins >= (2*avgKoalas)) {console.log(" Blah")
    } else if (avgKoalas >= (2*avgDolphins)) {
        console.log(" Bleh")
    } else {
        console.log(" Nobody won.")
    }
    }
    console.log(checkWinner2(avgDolphins,avgKoalas));
    // SECOND ATTEMPT
    const calcAverage = (numD1,numD2,numD3) => (numD1 + numD2 + numD3)/3;
    
    const scoreDolphins = calcAverage(85, 54, 41);
    const scoreKoalas = calcAverage(23, 34, 27);
    
    console.log(scoreDolphins,scoreKoalas);
    
    function checkWinner (avgDolphins, avgKoalas) {
        if (avgDolphins >= (2*avgKoalas)) {
        console.log(`The Dolphins won.(${avgDolphins} vs. ${avgKoalas})` )
    } else if (avgKoalas >= (2*avgDolphins)) {
        console.log(`The Koalas won.(${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log(`Nobody won.`)
    }
}

console.log(checkWinner(scoreDolphins,scoreKoalas));



// Coding Challenge 2

Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
// Write a function 'calcTip' that takes any bill value as an 
// input and returns the corresponding tip
const calcTip = (bill) => bill >= 50 && bill <= 300 ? `${Number(bill * 0.15)}` : `${Number(bill * 0.2)}`;

const bills = [
    125,
    555,
    44
]

const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills.length - 1)
]

console.log(tips);

const billTip = [
    Number(tips[0]) + bills[0],
    Number(tips[1]) + bills[1],
    Number(tips[2]) + bills[2]
]
console.log(billTip);
// Doesn't work, tips is coerced into being a string.
const totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]
console.log(totals);

// Coding Challenge 3

// full name, mass, and 
// height (Mark Miller and John Smith

const markInfo = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmiMark = this.mass / (this.height ** 2)
        return this.bmiMark;
    }
}
console.log(markInfo.calcBMI().toFixed(2));

const johnInfo = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmiJohn = this.mass / (this.height ** 2)
        return this.bmiJohn;
    }
}
console.log(johnInfo.calcBMI().toFixed(2));
if (markInfo.bmiMark > johnInfo.bmiJohn) {
    console.log(`${markInfo.firstName} ${markInfo.lastName}'s BMI (${markInfo.bmiMark}) is greater than ${johnInfo.firstName} ${johnInfo.lastName}'s BMI (${johnInfo.bmiJohn})`)
} else {
    console.log(`${johnInfo.firstName} ${johnInfo.lastName}'s BMI (${johnInfo.bmiJohn}) is greater than ${markInfo.firstName} ${markInfo.lastName}'s BMI (${markInfo.bmiMark})`)
};

*/