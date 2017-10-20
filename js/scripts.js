// Business logic or function goes here

var add = function (question1, question2, question3, question4, question5) {
  return question1 + question2 + question3 + question4 + question5;
};

// Interface or UI logic goes here

$(document).ready(function() {
  $("form#trackform").submit(function(event) {
    event.preventDefault();

    var question1 = parseInt($("#best").val());
    var question2 = parseInt($("#company").val());
    var question3 = parseInt($("#value").val());
    var question4 = parseInt($("#interests").val());
    var question5 = parseInt($("#phone").val());

    var codetrack = add(question1, question2, question3, question4, question5);

//First round of logic without adding dropdown question: Choose your answer below. //

    // if (codetrack >= 5 && codetrack <= 8) {
    //   $("#ruby").show();
    // }
    //   else if (codetrack >= 9 && codetrack <= 12) {
    //   $("#design").show();
    // }
    //   else {
    //   $("#java").show();
    // }

// Because I added a value of zero for the dropdown header, changed logic to include an alert if user accidentally selects this column header. //

    if (codetrack >= 5 && codetrack <= 8) {
      $("#ruby").show();
    }
      else if (codetrack >= 9 && codetrack <= 12) {
      $("#design").show();
    }
      else if (codetrack >= 13 && codetrack <= 15) {
      $("#java").show();
    }
      else {
        alert("Oops! A selection was skipped. Please make all selections and hit submit.");
    }
  });
});
