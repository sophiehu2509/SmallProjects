
$(document).ready(function(){
  $("#pic img").on("click", function(){
    var count = 10;
    var curr = $(this).css('box-shadow');
    var array = curr.split("px");

    var blur = parseInt(array[array.length - 3]) + 1;
    var speed = parseInt(array[array.length-2]) + 3;
    console.log(blur);

    if(blur > 20){
      $("h1").css('display', 'none');
      $("#tex").css('display', 'inline');
      $("#tex").css('z-index', '10000');

    }else{
      //pay attention for the form： no space between number and px, one space between each px
      $(this).css('box-shadow', '0px 0px '  + blur + 'px ' + speed + 'px ' + 'grey');
      $(this).css('z-index', '-1');

   }
  });
});
