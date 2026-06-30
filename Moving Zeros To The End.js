/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
function moveZeros(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0 || arr[i] === false ) {
      res.push(arr[i]);
    }
  } 
  let n = arr.length - res.length
  res.push(...Array(n).fill(0));
  return res;
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // [false,1,1,2,1,3,"a",0,0]
