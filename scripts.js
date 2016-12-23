$(document).ready(function(){

// my key for weather api
// &APPID=c93d0e55bfcff12da858b54456ab5f3d

$('#input').submit(function(){
  return false;

});

  $('#button').click(function(){

    $.get('http://api.openweathermap.org/data/2.5/weather?q='+$("#input").val()+'&APPID=c93d0e55bfcff12da858b54456ab5f3d',function(rem){
      console.log(rem);
      $('p').html("<p>Temperature: "+Math.floor(rem.main.temp*(9/5)-459.67)+"</p>");

    },'json');
  }); //end of button click
}); //end of document ready
