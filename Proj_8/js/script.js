$(document).ready(function(){

var cur = rock;

$('.btn').on("click", function(){
  $('.left.right').addClass('shake');

  var num2 = this.id;
  setTimeout(function(){
    var num1 = randomChoice();
    $('.left').hide();
    $('.left.'+ num2).show();
    compare(num1, num2);
    console.log(num2);

    $('.left.right').removeClass('shake');
},500);

});

  function compare(n1, n2){
    if ((n1 == 1 && n2=='paper') ||(n1 == 2 && n2=='rock')||(n1 == 3 && n2=='scissors')){
      $('.title h1').text('You Win!');
    }
    if ((n1 == 1 && n2=='scissors') ||(n1 == 2 && n2=='paper')||(n1 == 3 && n2=='rock')){
      $('.title h1').text('You Lose!');
    }
    if ((n1 == 1 && n2=='rock') ||(n1 == 2 && n2=='scissors')||(n1 == 3 && n2=='paper')){
      $('.title h1').text('Tie!');
    }
  }

  function randomChoice(){
    var ran = Math.floor(Math.random()*3) + 1;
    if (ran == 1){
      $('.paper.right').hide();
      $('.scissors.right').hide();
      $('.rock.right').show();
      return ran;
    }
    if (ran == 2){
      $('.paper.right').hide();
      $('.scissors.right').show();
      $('.rock.right').hide();
      return ran;
    }
    if (ran == 3){
      $('.paper.right').show();
      $('.scissors.right').hide();
      $('.rock.right').hide();
      return ran;
    }
  }



});
