$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('img.animate__animated').hover(
     function() {
      $(this).addClass('animate__heartBeat'); 
    },
     function() {
      $(this).removeClass('animate__heartBeat');
     }
    )})