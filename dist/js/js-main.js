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
  autoplay: true,
  autoplaySpeed: 4000,
  arrows : false,
  responsive: [
    {
      breakpoint: 1024,
      settings: "unslick"
    }
  ]
});

$('.multiple-items2').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows : false,
  responsive: [
      {
        breakpoint: 1165,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 865,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

function openLightBox(){
  var modal = $('.modal');
$('.show-modal').on('click', function() {
 modal.fadeIn();
});

$('.close-modal').on('click', function() {
 modal.fadeOut();
});
}
openLightBox();

function openLightBox2(){
  var modal2 = $('.modal2');
$('.show-modal2').on('click', function() {
 modal2.fadeIn();
});

$('.close-modal2').on('click', function() {
 modal2.fadeOut();
});
}
openLightBox2();


jQuery(function(){
  jQuery(".galleryLetters").lightBox();
});

$(function () { 
    $('.menu a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });
});