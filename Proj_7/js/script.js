$(document).ready(function(){

  $('#btn').on('click', function(){
    $('#btn').addClass('shake');

    setTimeout(function(){
      var dice1 = makeDiceFace('#d1');
      var dice2 = makeDiceFace('#d2');
      var t = dice1 + dice2;
      $("#total").text(t);
      $('#btn').removeClass('shake');
    }, 1000);

  });

  /*
  dice = [1,  , 5,
          2, 4, 6,
          3,  , 7,]
  */
  function makeDiceFace(diceIndex){
     var dice = Math.floor(Math.random()*6) + 1;
     var all = diceIndex + ' .p';
     var p1 = diceIndex + '_pic1';
     var p2 = diceIndex + '_pic2';
     var p3 = diceIndex + '_pic3';
     var p4 = diceIndex + '_pic4';
     var p5 = diceIndex + '_pic5';
     var p6 = diceIndex + '_pic6';
     var p7 = diceIndex + '_pic7';

     if (dice == 1){
       $(all).hide();
       $(p4).show();
     }
     if (dice == 2){
       $(all).hide();
       $(p1).show();
       $(p7).show();
     }
     if (dice == 3){
       $(all).hide();
       $(p1).show();
       $(p4).show();
       $(p7).show();
     }
     if (dice == 4){
       $(all).hide();
       $(p5).show();
       $(p1).show();
       $(p3).show();
       $(p7).show();
     }
     if (dice == 5){
       $(all).hide();
       $(p4).show();
       $(p5).show();
       $(p1).show();
       $(p3).show();
       $(p7).show();
     }
     if (dice == 6){
       $(all).hide();
       $(p6).show();
       $(p5).show();
       $(p1).show();
       $(p3).show();
       $(p2).show();
       $(p7).show();
     }
     return dice;
  }


});
