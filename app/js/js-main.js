  $(document).ready(function(){

    $(".menu-trigger").click(function () {
      $(".ul-trigger").slideToggle();
      $(".menu-trigger").toggleClass('menu_state_open');
    });
    $(window).resize(function(){
      if ($(window).width() > 1024) {
        $('.ul-trigger').removeAttr('style');
      };
    });
  });