/*
Consider the following expansion:

"3(ab)"     expands to "ababab"    -- because "ab" repeats 3 times
"2(a3(b))"  expands to "abbbabbb"  -- "a3(b)" expands to "abbb" and that repeats twice
Given a string, return the expansion of that string.

Rules:

The input is guaranteed to be well-formed and balanced.
Multipliers are single digits in the range 1–9, and are optional.
Every multiplier is immediately followed by a parenthesised group.
After a group is fully expanded, nothing appears beyond the final closing parenthesis.
Lowercase letters and digits are the only characters that appear.
*/

function solve(str) {
  if (!str.includes('(')) return str;
    
  let result = '';
  let i = 0;
    
  while (i < str.length) {
    const char = str[i];
        
    if (char >= 'a' && char <= 'z') {
      result += char;
      i++;
    } else if (char >= '1' && char <= '9') {
      const multiplier = Number(char);
      i += 2;
            
      let depth = 0;
      let start = i;
            
      while (i < str.length) {
        if (str[i] === '(') depth++;
        if (str[i] === ')') {
          if (depth === 0) break;
          depth--;
        }
        i++;
      }
            
      const group = str.slice(start, i);
      const expanded = solve(group);
      result += expanded.repeat(multiplier);
      i++;
    } else {
      i++;
    }
  }
    
  return result;
}
    
console.log(solve("3(ab)")); // "ababab"
console.log(solve("2(a3(b))")); // "abbbabbb"
console.log(solve("3(b(2(c)))")); // "bccbccbcc"
console.log(solve("k(a3(b(a2(c))))")); // "kabaccbaccbacc"
