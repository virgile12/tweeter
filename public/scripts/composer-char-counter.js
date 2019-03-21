$(document).ready(function() {
    $("main form textarea").on("input", function(event) {
       const maxCharLength = 140;
       const currentCharLength = $(this).val().length;
       $("main form span").text(maxCharLength - currentCharLength)
        if (currentCharLength > maxCharLength) {
            $("main form span").addClass("max-char-error")
        } else {
            $("main form span").removeClass("max-char-error")
        }
    });
  });
