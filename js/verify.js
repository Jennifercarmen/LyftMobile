$(document).ready(function () {

  $('.modal').modal();
  var validatecode = false;
  var $number = $('#input_code');
  var $buttonNext = $('#next');

  function activeButton() {

    if (validatecode) {

      $buttonNext.attr('disabled', false);

    }
  }
  function desactiveButton() {
    $buttonNext.attr('disabled', 'disabled');

  }
  function generatecode() {

    code = "";
    for (x = 0; x < 3; x++) {
      rand = Math.floor(Math.random() * 10);
      code += "0123456789".substr(rand, 1);
    }
    return code;
  }
  $("#resend_code").click(function () {
    $('#code').text("");
    $('#code').append("LAB-" + generatecode());
    event.preventDefault();
    localStorage.code = code;

  });

  $number.on('input', function (event) {
    if ($(this).val() === localStorage.code) {
      validatecode = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });
  $buttonNext.click(function () {
    window.location.href = 'register.html';
  });
});


