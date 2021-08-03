'use strict'

// define 

const arr1 = ["a", "b", "c", 'd'];

// append ------------- 0(1)
arr1.push("e");
console.log(arr1);

// pop or delete------- O(1)
arr1.pop();
console.log(arr1)

//insert at start------ 0(n)
arr1.unshift("0");
console.log(arr1);

///delete at index i -----0(n)
arr1.splice(0, 1);
console.log(arr1);

//insert at index i ---- 0(n)
arr1.splice(2, 0, "middle");
console.log(arr1);