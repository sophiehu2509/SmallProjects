requirejs.config({
  paths:{
    "jquery":[
      //"http://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate",
      "lib/jquery-1.10.0"
    ]
  }
});

require(["jquery", "lib/validation-plugin"], function($){
  var $form = $("#form"),
      $email = $("#email");

      $form.on("submit", function(e){
        e.preventDefault();
        require(["lib/validation-plugin"], function(){
          if($email.isValidEmail()){
            try{
              //$form.get(0).submit();
              //$form.submit();
              window.location='thank-you.html';
            }catch(e){
              console.log(e);
            }

          }else{
            $email.addClass("error").focus();
          }
        });

      });

      $email.on("keyup", function(){
        $email.removeClass("error");
      });
});
