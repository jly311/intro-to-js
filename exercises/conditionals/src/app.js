// Write a function called 'higherNumber' that takes two numbers and returns the higher number
var x;
var y;
function higherNumber (x,y){
if (x>y)
  return x;
  else
  return y;
}


/* Write an function "inRelationToThree" that takes one parameter
 - If the number is greater than 3, return "greater than three".
 - If the number is less than or equal to 3 and greater than or equal to 0, return "greater than zero and less than or equal to three"
  -If it is anything else, return "is less than zero".
*/

var num;
function inRelationToThree (num) {
if (num>3){
  return "greater than three";
}
else if (num>=0 && num<=3) {
    return "greater than zero and less than or equal to three";
}  
else
  return "is less than zero";    
}


// Write a function called "fizzBuzz" which pushes the integers from 1 to 15 into an array that will be returned when it is done. For multiples of three push "Fizz" instead of the number and for the multiples of five push "Buzz". For numbers which are multiples of both three and five push "FizzBuzz".
var arr = [];
function fizzBuzz() {
  for (var i=1; i<=15; i++){
    if (i%3===0 && i%5===0){
      arr.push("FizzBuzz");
    } else if (i%5===0){
      arr.push("Buzz");
    }else if (i%3===0){
      arr.push("Fizz");
    }else{
      arr.push(i);
    }
  }
  return arr;
 }

  

// Write a function called "sleepings", it should accept one parameter, an integer called "hours". Write a conditional statement inside of the function. If the number of hours is greater than or equal to 8, return "Enough". If it is less than that, return "Not Enough".
function sleepings(hours) {
  if (hours >= 8) {
    return "Enough"
  } else
    return "Not Enough"
  }

