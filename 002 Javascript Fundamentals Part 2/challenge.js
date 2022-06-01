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

*/

// Coding Challenge 2

