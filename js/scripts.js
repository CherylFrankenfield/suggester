// Business logic or function goes here

var add = function(_question1, _question2, _question3, question4, question5) {
  return _question1 + _question2 + _question3 + _question4 + _question5;
};

// Interface or UI logic goes here

$(document).ready(function() {
  $("form#trackform").submit(function() {
    event.preventDefault();

    var question1 = parseInt($("#best").val());
    var question2 = parseInt($("#company").val());
    var question3 = parseInt($("#value").val());
    var question4 = parseInt($("#interests").val());
    var question5 = parseInt($("#phone").val());

    var codetrack = add(question1, question2, question3, question4, question5);

    if (codetrack >= 5 <= 8) {
      $("#ruby").show();
    }
    else if (codetrack >= 9 <= 12) {
      $("#design").show();
    }
    else ()

  });
});
