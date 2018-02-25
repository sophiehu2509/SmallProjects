$(document).ready(function(){

    $(".box").on("click",function(){
      var animations=["crawl", "flip","jump"];
      var box=this;
      var animation=animations[Math.floor(Math.random()*3)];
      //var animation = animations[n];
      $(box).addClass(animation);
      setTimeout(function(){
          $(box).removeClass(animation);
      }, 4000);

    });

});
