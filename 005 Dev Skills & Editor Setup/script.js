'use strict';

// 059 Using Google, Stackoverflow, MDN

// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [8, 42, 13, -16, 7, 5, -1, 18, 33, -16, 'error', 17];
// // determine max value of array
// /*
// const calcTempAmplitude = function (temps) {
//     let max = temps[0], min = temps[0];

//     for (let i = 0; i < temperatures.length; i++) {
//         const currTemp = temps[i];

//         if (currTemp < min) min = currTemp;
//         if (currTemp > max) max = currTemp;
//     }
//     return max - min;
// }

// console.log('The temperature range is ' + calcTempAmplitude(temperatures));
// */

// const calcTempAmplitudeNew = function (temp1, temp2) {
//   const tempMerge = temp1.concat(temp2);
//   // concatenate temp2 on temp1 and store it as a new array called tempMerge
//   let max = tempMerge[0],
//     min = tempMerge[0];

//   for (let i = 0; i < tempMerge.length; i++) {
//     const currTemp = tempMerge[i];

//     if (currTemp < min) min = currTemp;
//     if (currTemp > max) max = currTemp;
//   }
//   return max - min;
// };
// console.log(
//   'The temperature range is ' +
//     calcTempAmplitudeNew(temperatures1, temperatures2)
// );
