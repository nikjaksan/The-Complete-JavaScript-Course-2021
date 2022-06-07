'use strict';

// 059 Using Google, Stackoverflow, MDN
// A smart home company wants to calculate the range of recorded temperatures given an array.
// 1) Understand the problem:
//      -What is meant by temperature range? The difference between the max and min values
//      -How can we compute the max/min values?
//      -What is a sensor error and what should happen with that data-type?

// 2) Breaking the larger problem into smaller, more manageble sub-problems:
//      -How do we ignore the errors?
//      -How do we find the max value in the array?
//      -How do we find the min value in the array?
//      -How do we calculate the range between the min and max? Subtract min from max (range)
// Using one array
const tempArray = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempRange = function (temps) {
  let max = tempArray[0],
    min = tempArray[0];

  // find the max/min of the tempArray
  for (let i = 0; i < tempArray.length; i++) {
    let currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;

    if (currTemp > max) max = currTemp;
    if (min > currTemp) min = currTemp;
  }
  console.log(min, max);
  //   calculate the range of tempArray;
  return max - min;
};

const tempRange = calcTempRange(tempArray);
console.log(tempRange);

// The company wants to use two arrays.
//  1) Understanding the problem
//      - With two arrays, should the function be used twice?
//          No - it won't be necessary
//      - What should happen to the arrays, since we only need to pass them through a         single function?
//          We need to merge the two arrays into a single array then pass through as normal
//  2) Break the problem down
//      - We need to merge the two arrays, how can this be achieved?
//          If we concatenate the second array onto the first and store this in a variable
