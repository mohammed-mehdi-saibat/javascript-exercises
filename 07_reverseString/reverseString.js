const reverseString = function (string) {
  let array = string.split("");
  let reversedString = [];
  for (let i = 0; i < array.length; i++) {
    reversedString.unshift(array[i]);
  }

  return reversedString.join("");
};

// LOOPING THROUGH STRING:

// const reverseString = function(string) {
//     let reversedString = [];
//     for(let i = 0; i < string.length; i++) {
//         reversedString.unshift(string.charAt(i));
//     }

//     return reversedString.join("");
// };

// Do not edit below this line
module.exports = reverseString;
