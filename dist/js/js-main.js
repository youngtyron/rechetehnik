var testMarks = 0;

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
 resetTest();
});
}
openLightBox2();

function openLightBox3(){
  var modal3 = $('.modal3');
$('.show-modal3').on('click', function() {
 cancelSteps();
 modal3.fadeIn();
});

$('.close-modal3').on('click', function() {
 modal3.fadeOut();
 resetTest();
});
}
openLightBox3();

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

function nextStep(){
  $('.step_opened input.input__btn').on('click', function(e) {
    var next = $(e.target).attr('data-next');
    if (next == 2) {
      $('.step_opened').removeClass('step_opened').addClass('step_closed');
      $('.step2').removeClass('step_closed').addClass('step_opened');
      document.body.scrollTo(0,0);
      nextStep();
      var testAnswers = $('.step2 .modal__radio input[type="checkbox"]');
      $(testAnswers).on('click', testAnswerClick);
    } else if (next == 3) {
      if (testIsComplete()) {
        $('.modal__notification').addClass('notification_closed');
        if (testMarks<6) {
          var result = $('.modal__final .red_mark').parent();
        } else if (testMarks<18) {
          var result = $('.modal__final .yellow_mark').parent();
        } else {
          var result = $('.modal__final .green_mark').parent();
        }
        $(result).removeClass('result_closed');
        $('.step_opened').removeClass('step_opened').addClass('step_closed');
        $('.step3').removeClass('step_closed').addClass('step_opened');
        document.body.scrollTo(0,0);
        nextStep();
      } else {
        pleaseCompleteTest();
      }
    } else if (next == 'end') {
      $('.modal3').fadeOut();
      document.body.scrollTo(0,0);
      resetTest();
    }
  });
}
nextStep();

function cancelSteps(){
  $('.step_opened').removeClass('step_opened').addClass('step_closed');
  $('.step1').removeClass('step_closed').addClass('step_opened');
  resetTest();
}

function testAnswerClick(e) {
  var mark = parseInt(e.target.value);
  if (e.target.checked) {
    testMarks += mark;
    var otherVariants = $(e.target).parent().siblings();
    $(otherVariants).each(function(){
      var checkbox = $(this).children('input')[0];
      if (checkbox.checked) {
        var otherMark = parseInt(checkbox.value);
        testMarks -= otherMark;
        checkbox.checked = '';
      }
    });
  } else {
    testMarks -= mark;
  }
}

function resetTest() {
  $('.modal__final').each(function(){
      $(this).addClass('result_closed');
  });
  var checkboxes = $('.modal__radio input');
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = '';
  };
  testMarks = 0;
  $('.step2 .modal__radio input[type="checkbox"]').unbind('click', testAnswerClick); 
  $('.modal__notification').addClass('notification_closed');
}

function testIsComplete() {
    var checkboxes = $('.modal__radio input');
    var answered = 0;
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        answered += 1;
      }
    }
    var answersCount = $('.modal__radio__block').length;
    if (answered<answersCount) {
      return false;
    }
    return true;
}

function pleaseCompleteTest() {
  $('.modal__notification').removeClass('notification_closed');
}