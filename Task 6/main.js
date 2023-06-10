//The forecast of today
const kelvin=293;
//converting today's forecast  from kelvin to celsius
const celsius = kelvin-273;
//converting today's forecast  from celsius to farenheit
let farenheit=celsius*(9/5)+32;
// rounding of farenheit to integer
farenheit = Math.floor(farenheit);

console.log(`\n The temperature is ${farenheit} degrees Fahrenheit.`)
let newton= celsius*(33/100);
newton=Math.floor(newton);
console.log(`\n The temperature is ${newton} degrees Fahrenheit.`);