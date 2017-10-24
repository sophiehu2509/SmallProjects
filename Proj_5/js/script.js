$(document).ready(function(){
  var con = ["Good Job!","Nice Job!"];

  var levels = 1;
  $("#ball").on("click",function(){

    if (levels < 3){
      speedChange(this);
      showMessage();
    }else{
      $("#congra").text("You are winner!");
      $("#ball").hide();
      $("#level").hide();
      $(".message").show();
    }
  });

  function speedChange (elm){
    var speed = $(elm).css('animation-duration');
    var newSpeed = (speed.split('s'))[0] -1;
    $(elm).css('animation-duration', newSpeed + 's');
  }

  function showMessage(){

    levels += 1;
    $("#l").text(levels);

    $("#ball").hide();
    $(".message").show();

    setTimeout(function(){
      $("#ball").show();
      $(".message").hide();
    }, 1000);
  }
});
