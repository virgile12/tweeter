$(document).ready(function() {
    $("main form textarea").on("input", function(event) {
       const maxCharLength = 140;
       const currentCharLength = $(this).val().length;
       
       $("main form span").text(maxCharLength - currentCharLength)
        if (currentCharLength > maxCharLength) {
            $("main form span").addClass("max-char-error")
            $("main form input").attr("disabled", "disabled")
            $("div.error-box").addClass("error-message").text('Warning! Tweet input length exceeded.')
            
        }  else if ( $("main form textarea").val().trim() === '') {
            $("main form input").attr("disabled", "disabled")
            $("main form span").removeClass("max-char-error")
            $(".error-message").removeClass("error-message").text('')

        } else {
            $("main form span").removeClass("max-char-error")
            $("main form input").removeAttr("disabled")
            $(".error-message").removeClass("error-message").text('')
        }
    })

    $("nav button.btn-navbar").on("click", function() {
         $("div.compose-tweet").slideToggle( "slow" );
         $("textarea.textspot").select();
        
    });

});





