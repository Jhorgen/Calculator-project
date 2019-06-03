
// var // function (perameters)
var add = function(number1, number2) {

  // result of above in an equation
  return number1 / (number2 * number2) * 703;
};

//assigning your vars// turning strings into numbers (parseInt)/ string
var number1 = parseInt(prompt("Enter weight in pounds"));
var number2 = parseInt(prompt("Enter Height in inches:"));

//result // add created function
var result = add(number1, number2).toFixed(2);

//computer prompt
alert("Your BMI is" + " " + result);
