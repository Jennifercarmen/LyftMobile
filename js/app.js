$(document).ready(function () {
  $(".home").show();

    setTimeout(function () {
        $(".splash").hide();
        $(".home").show();
    }, 3000);
    $(".signUp").click(function () {
        window.location.href = 'views/signup.html';

    });

});

