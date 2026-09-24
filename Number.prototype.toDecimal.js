/*
Numbers in JavaScript can be turned into strings. For example, (123.456).toString() gives you the string "123.456". 
But sometimes, numbers are so large or so small that the string returned is in a strange format called "scientific notation".

Here are some examples of scientific notation, as seen in JavaScript:

100 == 1e+2
0.01 == 1e-2
12.34 == 1.234e+1
0.000456 == 4.56e-4
The basic idea is that the "coefficient", to the left of "e" has its decimal place moved a number of places equal to the "exponent", to the right of "e". So:

4.56e-4
=======
    4.56
     ^
 v moved left 4
0.000456

1.234e+1
========
1.234
 ^
  v moved right 1
12.34
That's all there is to it, really. But the problem is, JavaScript loves this scientific notation, even to the point that it can use it even when the number is in a manageable size. 
And there is no way of getting the original, full number as a string with any native method. And your job is to write one.

Write a method that can be called on any number that returns the number in all it's full, long-winded, memory-intensive string glory. ^^
*/

Number.prototype.toDecimal = function toDecimal() {
  const str = this.toString();
  if (!/e/i.test(str)) return str;
    
  const [coeff, expStr] = str.toLowerCase().split('e');
  const exp = +expStr;
  const [int, frac = ''] = coeff.replace('-', '').split('.');
  const digits = int + frac;
  const pos = int.length + exp;
  const sign = coeff[0] === '-' ? '-' : '';
    
  if (pos <= 0) return sign + '0.' + '0'.repeat(-pos) + digits;
  if (pos >= digits.length) return sign + digits + '0'.repeat(pos - digits.length);
  return sign + digits.slice(0, pos) + '.' + digits.slice(pos);
};

console.log((100).toDecimal()) //"100"
console.log((1e-7).toDecimal()) // "0.0000001"
console.log((1.23e+5).toDecimal()) //"123000"
console.log((12.34).toDecimal()) // "12.34"
console.log((-1.5e-3).toDecimal()) // "-0.0015"
console.log((-42).toDecimal()) //"-42"
console.log((0).toDecimal()) //"0"
