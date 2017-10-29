$(document).ready(function(){

  var t = new Date();
  var d = t.getDay();
  var msg = ['Sunday Funday!',
                  'Back to the Grind!',
                  'Oh, it is Tuesday',
                  'Boom, Get Tired?',
                  'Thursday, One Day left!',
                  'We should have a rest at night!',
                  'Paaaaaaarty!'];

  $('#' + d).attr('id','today');
  $('.message' ).text(msg[d]);

});
