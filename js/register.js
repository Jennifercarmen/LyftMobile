$(document).ready(function() {
  var $email = $('#inputEmail');
  var $first_name = $('#first_name');
  var $last_name = $('#last_name');

  var $checked = $('input[type="checkbox"]');
  
  var validateEmail = false;
  var validatefirst_name = false; 
  var validatelast_name = false; 
  var validateChecked = false;  

  // Aqui indicar que se puede implementar la función como variable
  function activeButton() {
    if (validateEmail && validatefirst_name && validateChecked && validatelast_name) {
      $('form > button').attr('disabled', false);
    }
  }

  function desactiveButton() {
    $('form > button').attr('disabled', 'disabled');
  } 


  $email.on('input', function(event) {
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton(); 
    } else {
      desactiveButton();
    }
  });
 
  $first_name.on('input', function() {
    if ($(this).val().length >= 3) {
      validatefirst_name = true;
      activeButton(); 
    } else {
      desactiveButton(); 
    }
  });
  $last_name.on('input', function() {
    if ($(this).val().length >= 3) {
      validatelast_name = true;
      activeButton(); 
    } else {
      desactiveButton(); 
    }
  });
  $checked.on('click', function(event) {
    if (event.target.checked) {
      validateChecked = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });
 
  $('form > button').on('click', function(event) {
    window.location.href = '../views/close.html';
  });
});