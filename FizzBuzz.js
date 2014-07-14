// Game of FizzBuzz
// you count from 1 to a given number 100
// For each number if it’s not divisible by 3 or 5, you simply say the number.
//  If it’s divisible by 3, instead of the number you say “fizz”. If it’s divisible by 5, you say “buzz”. And finally if it’s divisible by both 3 and 5, you say “fizz buzz”.
$(document).ready(function() {
  var count = 0;
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      $("#body").append("FizzBuzz" + "<br>");
    }
    else if (i % 3 == 0) {
      $("#body").append("Fizz" + "<br>");
    }
    else if  (i % 5 == 0) {
      $("#body").append("Buzz" + "<br>");
    }
    else {
      count = i;
      $("#body").append(count + "<br>");
    }
  };
});


