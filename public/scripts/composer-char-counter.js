$(document).ready(function() {
    $("main form textarea").on("input", function(event) {
       const maxCharLenght = 140;
       const currentCharLength = $(this).val().length;
        if (currentCharLength > maxCharLenght) {
            console.log("Max characters execeeded")
        } else {
            $("main form span").text(maxCharLenght - currentCharLength)
        }
    });
  });

