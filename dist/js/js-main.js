  $(document).ready(function(){

    $(".menu-trigger").click(function () {
      $(".ul-trigger").slideToggle();
    });
    $(window).resize(function(){
      if ($(window).width() > 1024) {
        $('.ul-trigger').removeAttr('style');
      };
    });
  });