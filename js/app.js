$(document).ready(function () {
    setTimeout(function () {
        $(".splash").hide();
        $(".home").show();
    }, 3000);
    $(".signUp").click(function () {
        window.location.href = 'views/signup.html';

    });
// Sign up
function generatecode(chars, lengthc){
  code = "LAB-";
  for (x=0; x < lengthc; x++)
  {
  rand = Math.floor(Math.random()*chars.length);
  code += chars.substr(rand, 1);
  }
  return code;
  }


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

$("#signup").click(function () {

    
    caracteres = "0123456789";
    longitud = 3;
    
    alert(generatecode(caracteres, longitud));});
});

