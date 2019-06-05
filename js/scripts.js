var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};




// var // function (perameters)
// var add = function(number1, number2) {
//
//   // result of above in an equation
//   return number1 / (number2 * number2) * 703;
// };

//assigning your vars// turning strings into numbers (parseInt)/ string
// $(document).ready(function)() {
// var number1 = parseInt(prompt("Enter weight in pounds"));
// var number2 = parseInt(prompt("Enter Height in inches:"));


$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);

  });
    alert(add(number1, number2));
});



//result // add created function
// var result = add(number1, number2).toFixed(2);
//
// //computer prompt
// alert("Your BMI is" + " " + result);
