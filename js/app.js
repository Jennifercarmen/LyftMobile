$(document).ready(function () {
    setTimeout(function () {
        $(".splash").hide();
        $(".home").show();
    }, 3000);
    $(".signUp").click(function () {
        window.location.href = 'views/signup.html';

    });
// Sign up
var $number = $('#inputNumber');

var validatenumber = false;

// Aqui indicar que se puede implementar la función como variable
function activeButton() {
  if (validatenumber) {
    $('form > button').attr('disabled', false);
  }
}

function desactiveButton() {
  $('form > button').attr('disabled', 'disabled');
} 


$number.on('input', function(event) {
    if ($(this).val().length === 10) {
        validatenumber = true;
        activeButton(); 
      } else {
        desactiveButton(); 
      }
});

});

