// my present age
let myAge=20;
// The first two years of a dog’s life count as 10.5 dog years each.
let earlyYears=2;
earlyYears=earlyYears*10.5;
// calculating thr later years 
let laterYears=myAge-2;
// calculating the dog years from laterYears 
laterYears=laterYears*4;
console.log(earlyYears);
console.log(laterYears);
// calculating total dog years 
let myAgeInDogYears=laterYears+earlyYears;
// writing name and converting my name to lowercase leeters
let myName="Shanmukha"
 myName=myName.toLowerCase();
 console.log(`\n My name is ${myName}. I am ${myAge} years old in human years which is DOG ${myAgeInDogYears} years old in dog years./n`)
