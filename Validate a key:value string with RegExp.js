/*
Write a regexp to validate a key-value string in the format:
name:xxx,age:111,skill:xxx

Rules
1. name/age/skill may be in any order, example:
'name:xxx,age:111,skill:xxx'
'skill:xxx,name:xxx,age:111'
'name:xxx,skill:xxx,age:111'

2. name/skill have to be made up of letters ([A-Za-z]+)
3. age has to be a number (0 is valid) ([0-9]+)
4. there can be no leading or trailing commas ,
5. name/age/skill must be present exactly once each
*/

const reg = /^(?=.*\bname:[A-Za-z]+\b)(?=.*\bage:\d+\b)(?=.*\bskill:[A-Za-z]+\b)(?:(?:name:[A-Za-z]+|age:\d+|skill:[A-Za-z]+),){2}(?:name:[A-Za-z]+|age:\d+|skill:[A-Za-z]+)$/;

console.log(reg.test('name:Tomek,age:31,skill:JavaScript')); // true
console.log(reg.test('name:xxx,age:111,skill:xxx')); // true
console.log(reg.test('name:xxx,skill:xxx,age:111')); // true
console.log(reg.test('name:Adam,age:60')); // false
console.log(reg.test('name:Tomek,age:30,skill:PHP,')); // false
