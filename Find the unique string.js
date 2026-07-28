/*
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.
It’s guaranteed that array contains more than 2 strings.
*/

function findUniq(arr) {
  const normalize = str => {
    const chars = str.toLowerCase().replace(/\s/g, '');
    return [...new Set(chars)].sort().join('');
  };
    
  const countMap = new Map();
  for (const word of arr) {
    const pattern = normalize(word);
    countMap.set(pattern, (countMap.get(pattern) || 0) + 1);
  }
    
  let uniquePattern;
  for (const [pattern, count] of countMap) {
    if (count === 1) {
      uniquePattern = pattern;
      break;
    }
  }
    
  for (const word of arr) {
    if (normalize(word) === uniquePattern) {
      return word;
    }
  }
}

console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])); // 'BbBb'
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])); // 'foo'
console.log(findUniq([ 'silvia', 'vasili', 'victor' ])); // 'victor'
console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ])); // 'Harry Potter'
console.log(findUniq([ '    ', 'a', ' ' ])); // 'a'
