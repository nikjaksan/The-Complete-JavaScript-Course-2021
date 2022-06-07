const arry = [17, 21, 23];
const arry1 = [12, 5, -5, 0, 4];

let string = ''; //declaring an empty string
const printForecast = function (temps) {
  for (let i = 0; i < temps.length; i++) {
    string = string + '... ' + temps[i] + ' °C in ' + (i + 1) + ' days';
    //concatenation of the string
  }
  return console.log(string);
  //returning the result ()
};

// console.log(printForecast(arry));
console.log(printForecast(arry1));
