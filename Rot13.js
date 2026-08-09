/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, 
they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message){
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const rot13 =    'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    
  return message.replace(/[A-Za-z]/g, char => {
    return rot13[alphabet.indexOf(char)];
  });
}

console.log(rot13('Hello, World!')); // Uryyb, Jbeyq!
console.log(rot13("test")); // "grfg"
console.log(rot13('Test123!')); // Grfg123!
console.log(rot13('ABC')); // NOP
