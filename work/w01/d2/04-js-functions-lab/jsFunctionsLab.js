// JS Functions Lab

/* 
    1. (_completed above_) Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression -  the Math.max method is not allowed.
 */
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
}
  
console.log(maxOfTwoNumbers(3, 9));

 /* 
    2. Define a function, as a function expression, `maxOfThree` that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
 */

let maxOfThree = function(a, b, c) {
    return a >= b ? a <= c ? a 
          : c 
          : b > c ? b 
          : c;
}
console.log(maxOfThree(13,15,18));

 /* 
    3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise. - Use a switch statement or Use planet ex
 */

function isCharAVowel(char) {
    let vowels = 'a e i o u';
    char = char.toLowerCase();
    return vowels.indexOf(char) > -1;
}
console.log(isCharAVowel('E'))

/*
    4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.
*/

// const array1 = [1, 2, 3, 4];
var sumOfArray = function(arr){
  return arr.reduce(function(a, b){
    return a + b;
  })
}
console.log(sumOfArray([1,2]))

/*
    5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.
*/

function multiplyArray(arr) {
    return arr.reduce (function(a,b){
      return a * b
    });
}
console.log(multiplyArray([3,2]));

/*
    6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
*/
var numArgs = function(...args){
    return args;
};
console.log(numArgs([1],[3], 'cars'));

/*
    7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".
*/
function reverseString(str) {
    return str.split("").reverse().join("");
};
    
console.log(reverseString('tom'));

/*
    8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
*/

const longestStringInArray = function(arr) {
    let longest = 0;
    // using forEach this time!
    arr.forEach(function(s) {
      if (s.length > longest) longest = s.length;
    });
    return longest;
};
  
console.log('ee','e','fdfa')