var urlChuck = "http://api.icndb.com/jokes/random";


//Nivell 1 i 2

/*$(document).ready(function () {
    $('#jokes').click(function (e) { 
        e.preventDefault();
       $.ajax({
           type:'post',
           url:urlChuck,
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

*/

//Nivell 3

$(document).ready(function () {
  $('#jokes').click(function (e) {
    e.preventDefault();

    fetch(urlChuck)
      .then((response) => response.json())
      .then((data) => {
        $('#joke-text').html(data.value.joke);
      })

      .catch((err) => console.log(err));
  });
});
