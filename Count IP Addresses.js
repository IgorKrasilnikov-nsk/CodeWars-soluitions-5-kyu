/*
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).
All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples:
With input "10.0.0.0", "10.0.0.50"  => return   50 
With input "10.0.0.0", "10.0.1.0"   => return  256 
With input "20.0.0.10", "20.0.1.0"  => return  246
*/

function ipsBetween(start, end){
  const toNumber = ip => ip.split('.').reduce((acc, octet) => acc * 256 + Number(octet), 0);
  return toNumber(end) - toNumber(start);
}

console.log(ipsBetween("150.0.0.0", "150.0.0.1")); // 1
console.log(ipsBetween("10.0.0.0", "10.0.0.50")); // 50
console.log(ipsBetween("20.0.0.10", "20.0.1.0")); // 246
console.log(ipsBetween("10.11.12.13", "10.11.13.0")); // 243
console.log(ipsBetween("160.0.0.0", "160.0.1.0")); // 256
console.log(ipsBetween("170.0.0.0", "170.1.0.0")); // 65536
console.log(ipsBetween("50.0.0.0", "50.1.1.1")); // 65793
console.log(ipsBetween("180.0.0.0", "181.0.0.0")); // 16777216
console.log(ipsBetween("1.2.3.4", "5.6.7.8")); // 67372036
console.log(ipsBetween("0.0.0.0", "255.255.255.255")); // 4294967295
