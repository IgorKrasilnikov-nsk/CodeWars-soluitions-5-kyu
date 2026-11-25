/*
It's 9 time!
I want to count from 1 to n. How many times will I use a '9'?
9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc
Note: n will always be a positive integer.

Examples (input -> output)
8  -> 0
9  -> 1
10 -> 1
98 -> 18
100 -> 20
*/

function number9(n) {
  let count = 0;
  let place = 1;

  while (place <= n) {
    const higher = Math.floor(n / (place * 10));
    const current = Math.floor(n / place) % 10;
    const lower = n % place;

    if (current < 9) {
      count += higher * place;
    } else {
      count += higher * place + lower + 1;
    }
    
    place *= 10;
  }

  return count;
}

console.log(number9(1)) // 0
console.log(number9(9)) // 1
console.log(number9(100)) // 20
console.log(number9(565754)) // 275645
console.log(number9(10000000000)) // 10000000000
