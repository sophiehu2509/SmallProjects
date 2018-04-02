$(document).ready(function(){
  /*$("a").on("click", function(){
    $(".pic").addClass("flip");
    setTimeout(function(){
      $(".pic").removeClass("flip");
    }, 1500);
  });*/

  $('a').on('click', function(){
    $('.pic, a').toggleClass('active');
    return false;
  });
});
