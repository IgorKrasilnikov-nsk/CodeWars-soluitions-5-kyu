/*
You need to write regex that will validate a password to make sure it meets the following criteria:
-At least six characters long
-contains a lowercase letter
-contains an uppercase letter
-contains a digit
-only contains alphanumeric characters (note that '_' is not alphanumeric)
*/

const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

console.log(REGEXP.test('fjd3IR9')); //true
console.log(REGEXP.test('ghdfj32')); //false
console.log(REGEXP.test('DSJKHD23')); //false
console.log(REGEXP.test('dsF43')); //false
console.log(REGEXP.test('4fdg5Fj3')); //true
console.log(REGEXP.test('DHSJdhjsU')); //false
console.log(REGEXP.test('fjd3IR9.;')); //false
console.log(REGEXP.test('fjd3  IR9')); //false
console.log(REGEXP.test('djI38D55')); //true
console.log(REGEXP.test('djI3_8D55')); //false
console.log(REGEXP.test('djI38D55@@')); //false
