
$(document).ready(function () {
    $('#jokes').click(function (e) { 
        e.preventDefault();
       $.ajax({
           type:'post',
           url:'http://api.icndb.com/jokes/random',
           dataType:'json',
           success: function (data) {
               $('#joke-text').html(data.value.joke);
               
           },
           error:function(xhr, status,error){
               console.log(xhr);
               console.log(status);
               console.log(error);
           }
       });
       
        
    });
});