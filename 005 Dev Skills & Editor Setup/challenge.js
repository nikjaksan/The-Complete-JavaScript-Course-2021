// const arry = [17, 21, 23];
const arry = [12, 5, -5, 0, 4];
let string = '';

const printForecast = function (temps) {
    for (let i = 0; i < temps.length; i++) {
        string = string + '... ' + temps[i] + '°C in ' + (i + 1) + ' day(s)'
    }
    console.log(string);
}
const printedForecast = printForecast(arry);
console.log(printedForecast);
