$(document).ready(function(){

  $(".menu-trigger").click(function () {
    $(".ul-trigger").slideToggle();
    $(".menu-trigger").toggleClass('menu_state_open');
  });
  
  $('.menu-trigger').click(function(){
    if($(this).hasClass('menu_state_open')){
      $('body').css('overflow', 'hidden');
      }else{
        $('body').css('overflow', 'auto');
      }
  });

  $(window).resize(function(){
    if ($(window).width() > 1024) {
      $('.ul-trigger').removeAttr('style');
    };
  });
});

$('.multiple-items').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows : false,
  responsive: [
    {
      breakpoint: 1024,
      settings: "unslick"
    }
  ]
});