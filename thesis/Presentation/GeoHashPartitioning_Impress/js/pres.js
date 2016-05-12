$(document).ready(function(){
  $(document).mousemove(function(e){
     TweenLite.to($('body'), 
        .5, 
        { css: 
            {
                backgroundPosition: ""+ parseInt(event.pageX/8) + "px "+parseInt(event.pageY/'12')+"px, "+parseInt(event.pageX/'15')+"px "+parseInt(event.pageY/'15')+"px, "+parseInt(event.pageX/'30')+"px "+parseInt(event.pageY/'30')+"px"
            }
        });
  });
});

function launch(){

    var pwd = $("#password").val();

    var url = "https://raw.githubusercontent.com/Hariharan-Gandhi/Master-Thesis/master/"+pwd+"?token=https://raw.githubusercontent.com/Hariharan-Gandhi/Master-Thesis/master/"+pass+"?token=AJMsgPX952mTtHkzKw-Ma-je0Svc1NYlks5XPh0vwA%3D%3D" ;

    $.get(url, function(data) {
    	
    	var res = data.trim();
    	res ="index.html"
    	
    	  sessionStorage.setItem('key', pwd);
        window.open(res,"_self")

        

    }).fail(function() {
        $("#myModal").modal('show');
      });

    return false
            
}

$('#retry-btn').click(function(){
    var passField = $("#password");
    passField.val("");

    setTimeout(function(){
        passField.focus();
    }, 0)
});

