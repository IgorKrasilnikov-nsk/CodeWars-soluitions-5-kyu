/*
We need prime numbers and we need them now!
Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.
For example,

11 => [2, 3, 5, 7, 11]
*/

function prime(num) {
  if (num < 2) return [];
    
  const isPrime = new Array(num + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
    
  for (let i = 2; i * i <= num; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const result = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime[i]) result.push(i);
  }
  
  return result;
}

console.log(prime(0)); // []
console.log(prime(1)); // []
console.log(prime(2)); // [2]
console.log(prime(23)); // [2, 3, 5, 7, 11, 13, 17, 19, 23]
