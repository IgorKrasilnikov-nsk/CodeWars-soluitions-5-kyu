/*
Create a function that transforms any positive number to a string representing the number in words. The function should work for all numbers between 0 and 999999.

Examples:
number2words(0)  ==>  "zero"
number2words(1)  ==>  "one"
number2words(9)  ==>  "nine"
number2words(10)  ==>  "ten"
number2words(17)  ==>  "seventeen"
number2words(20)  ==>  "twenty"
number2words(21)  ==>  "twenty-one"
number2words(45)  ==>  "forty-five"
number2words(80)  ==>  "eighty"
number2words(99)  ==>  "ninety-nine"
number2words(100)  ==>  "one hundred"
number2words(301)  ==>  "three hundred one"
number2words(799)  ==>  "seven hundred ninety-nine"
number2words(800)  ==>  "eight hundred"
number2words(950)  ==>  "nine hundred fifty"
number2words(1000)  ==>  "one thousand"
number2words(1002)  ==>  "one thousand two"
number2words(3051)  ==>  "three thousand fifty-one"
number2words(7200)  ==>  "seven thousand two hundred"
number2words(7219)  ==>  "seven thousand two hundred nineteen"
number2words(8330)  ==>  "eight thousand three hundred thirty"
number2words(99999)  ==>  "ninety-nine thousand nine hundred ninety-nine"
number2words(888888)  ==>  "eight hundred eighty-eight thousand eight hundred eighty-eight"
*/

function number2words(n) {
  if (n === 0) return 'zero';
    
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  function convert(num) {
    if (num < 10) return ones[num];
    if (num < 20) return teens[num - 10];
    if (num < 100) {
      const ten = Math.floor(num / 10);
      const one = num % 10;
      return tens[ten] + (one > 0 ? '-' + ones[one] : '');
    }
    if (num < 1000) {
      const hundred = Math.floor(num / 100);
      const rest = num % 100;
      return ones[hundred] + ' hundred' + (rest > 0 ? ' ' + convert(rest) : '');
    }
    if (num < 1000000) {
      const thousands = Math.floor(num / 1000);
      const rest = num % 1000;
      return convert(thousands) + ' thousand' + (rest > 0 ? ' ' + convert(rest) : '');
    }
    
    return '';
  }
  
  return convert(n); 
}

console.log(number2words(0)); // "zero"
console.log(number2words(1)); // "one"
console.log(number2words(8)); // "eight"
console.log(number2words(10)); // "ten"
console.log(number2words(19)); // "nineteen"
console.log(number2words(20)); // "twenty"
console.log(number2words(22)); // "twenty-two"
console.log(number2words(54)); // "fifty-four"
console.log(number2words(80)); // "eighty"
console.log(number2words(98)); //  "ninety-eight"
console.log(number2words(100)); // "one hundred"
console.log(number2words(301)); // "three hundred one"
console.log(number2words(793)); // "seven hundred ninety-three"
console.log(number2words(800)); // "eight hundred"
console.log(number2words(650)); // "six hundred fifty"
console.log(number2words(1000)); // "one thousand"
console.log(number2words(1003)); // "one thousand three"
