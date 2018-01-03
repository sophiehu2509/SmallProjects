$(document).ready(function(){

var cur = rock;
var num2;
$('.btn').on("click", function(){
   num2 = this.id;
   result();
});
$('.button').off('click');

function result(){
$('.player').addClass('shake');
  var i = 3;

  count();
  function count(){
    $('.title h1').text(i);

      if (i == 0){
        display();
      }else{
        i --;
        setTimeout(count, 500);
      }
  }
}

  function display(){
    $('.left').hide();
    $('.left.'+ num2).show();
    var num1 = randomChoice();

    setTimeout(function(){
      compare(num1, num2);
      console.log(num2);
      $('.player').removeClass('shake');
  },600);
  }

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
