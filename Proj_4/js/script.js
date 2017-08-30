function randomColor(){
  var r=Math.floor(Math.random()*255);
  var g=Math.floor(Math.random()*255);
  var b=Math.floor(Math.random()*255);
  var rgb='rgb('+r+','+g+','+b+')';
  //$(this).css({background-color: rgb});
  $(this).css('background-color', rgb);
  $(this).css('z-index', "1000");
  $(this).css('box-shadow', "0 0 8px white");
}

function end(){
  //$(this).css({background-color: rgb});

  $(this).css('z-index', "1");
  $(this).css('box-shadow', "none");
}

var color = document.getElementsByClassName('box');
for(var i = 0; i<color.length; i ++){
  color[i].addEventListener('mouseover', randomColor, false);
}
for(var i = 0; i<color.length; i ++){
  color[i].addEventListener('mouseleave', end, false);
}



/*$(document).ready(function () {

	function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};

	$(".box").on("mouseenter", function () {
		$(this).css('background-color', randomColor());
		$(this).css('box-shadow', "0 0 8px white");
		$(this).css('z-index', "100000");
	});

	$(".box").on("mouseleave", function () {
		$(this).css('box-shadow', "none");
		$(this).css('z-index', "1");
	});
});*/
