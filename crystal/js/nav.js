$(document).ready(function(){
  $('.nav__burger').click(function(event){
    $('.nav__burger, .nav__links').toggleClass('active')
    $('body').toggleClass('lock');
  });
});