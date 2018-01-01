$(document).ready(function () {
    var $codeverification=$('#code').text().substr(-3);

// Sign up
function generatecode(){
  
    code = "";
    for (x=0; x < 3; x++)
    {
    rand = Math.floor(Math.random()*10);
    code += "0123456789".substr(rand, 1);
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
      $('#code').append("LAB-"+generatecode());
      event.preventDefault();
        localStorage.code = code;
  
    });
    $("#accept").on('click', function(event) {  
        
        window.location.href = 'verify.html';
  
    });

});

