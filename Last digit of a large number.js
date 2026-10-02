/*
Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!
For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6. 
Also, please take 0^0 to be 1.
You may assume that the input will always be valid.

Examples:
lastDigit(4n, 1n)            // returns 4n
lastDigit(4n, 2n)            // returns 6n
lastDigit(9n, 7n)            // returns 9n  
lastDigit(10n,10000000000n)  // returns 0n
*/
function lastDigit(n, m) {
  if (m === 0n) return 1n;
  
  let base = Number(n % 10n);
  const seen = [];
  let current = base;
  
  do {
    seen.push(current);
    current = (current * base) % 10;
  } while (current !== base && seen.length < 5);
        
  const idx = Number((m - 1n) % BigInt(seen.length));
  return BigInt(seen[idx]);
}

console.log(lastDigit(4n, 1n)); // 4n
console.log(lastDigit(4n, 2n)); // 6n
console.log(lastDigit(9n, 7n)); // 9n
console.log(lastDigit(10n, 10000000000n)); // 0n
