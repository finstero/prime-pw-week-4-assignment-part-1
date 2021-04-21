console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, for example 'Hello, Jo!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
console.log('testing hello name function', helloName('Olivia'));
// Remember to call the function to test

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let sum2 = firstNumber + secondNumber;
  return sum2;
  // return firstNumber + secondNumber;
}


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
let mult3 = num1 * num2 * num3;
return mult3;
}


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

function getLast( array ) {
  if (array.length == 0){
    return 'undefined';
  }
  else {
    return array[array.length - 1];
  }
}

let cats = ['cute', 'soft', 'silly', 'rude', 'chaotic'];
let dogs = [];

console.log('should say chaotic:', getLast(cats));
console.log('should say undefined:', getLast(dogs));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
console.log('--- Question 7 ---')

function findOf( value, array ){
  for (item of array){
    if (item == value){
      return true;
    }
  }
  return false;
}

function find( value, array ){
  for (let i=0; i<array.length; i++){
    if (array[i] == value){
      return true;
    }
  }
  return false;
}

function findWhile(value, array){
  let i = 0;
  while (i<array.length){
    if (array[i] == value){
      return true;
    }
    i++;
  }
  return false;
}

let first = [2, 33, 43, 22.3, 1243];

console.log('should say true:', find(33, first));
console.log('should say false:', find(342, first));
console.log('trying with while return. should be false:', findWhile (22, first));
console.log('trying with while return. should be true:', findWhile (1243, first));
console.log('trying with for of. Should be true:', findOf(43, first));
console.log('trying with for of. Should be false:', findOf(45, first));
console.log('trying with for of. Should be true:', findOf(22.3, first));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
console.log('--- Stretch Goals ---');
console.log('--- Question 8 ---')

function isFirstLetter2(letter, string) { //changed function name from question
  let letterUp = letter.toUpperCase(); //ensures letter is capitalized
  let stringUp = string.toUpperCase(); // ensures whole string is capitalized
  let check = stringUp.indexOf(letterUp); //checks if letter is in string, and outputs index (numbered position starting at 0)
  console.log('check is:', check); //logs numbered position of letter. outputs -1 if letter not in string
  if (check == 0){ // if letter is in first position (index of 0), will return true
    return true;
  }
  if (check != 0){
    return false;
  }
}

console.log( 'accounting for case. isFirstLetter - should say true', isFirstLetter2('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter2('z', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter2('p', 'apple') );
console.log( 'isFirstLetter - should say true if accounts for capital letters', isFirstLetter2('A', 'apple') );
console.log( 'isFirstLetter - should say true if accounts for capital letters', isFirstLetter2('a', 'Apple') );

//this function does not account for letter case
function isFirstLetter(letter, string) {
  let check = string.indexOf(letter); //checks if letter is in string, and outputs index (numbered position starting at 0)
  console.log('check is:', check); //logs numbered position of letter. outputs -1 if letter not in string
  if (check == 0){ // if letter is in first position (index of 0), will return true
    return true;
  }
  if (check != 0){
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('p', 'apple') );
console.log( 'isFirstLetter - should say false if does not account for case', isFirstLetter('A', 'apple') );

//feel free to ignore. testing different functions so I understand them! Leaving in for myself.
console.log('messing around');

let explore = 'explore'
let attempt = explore.indexOf('e');
console.log('should be zero:', attempt);
let uppercase = explore.toUpperCase();
console.log('which will be uppercase?', uppercase);

// 9. Function to return the sum of all numbers in an array
console.log('--- Question 9 ---');

function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
