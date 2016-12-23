$(document).ready(function(){

// my key for weather api
// &APPID=c93d0e55bfcff12da858b54456ab5f3d


  $('#button').click(function(){
    console.log("you clicked search weather")
    console.log($('#input').val());
  //
  //
    if ($('#input').val()==="type city here" || $('#input').val().length === 0){
      console.log("you didn't enter a city");
    }
    // if ($('#input').val()==="type city here" || ('#input').val()== false){
    //   console.log("you didn't enter a city");
    // }
    $.get('http://api.openweathermap.org/data/2.5/weather?q='+$("#input").val()+'&APPID=c93d0e55bfcff12da858b54456ab5f3d',function(rem){
      console.log(rem);
      $('p').html("<p>Temperature: "+Math.floor(rem.main.temp*(9/5)-459.67)+"</p>");

    },'json');
  //
  //
  //   // $.get('http://api.openweathermap.org/data/2.5/weather?q='+$('input').attr('value')+'&APPID=c93d0e55bfcff12da858b54456ab5f3d',function(rem){
  //   //   console.log(rem);
  //   //   $('p').append(Math.floor(rem.main.temp*(9/5)-459.67));
  //   //
  //   // },'json');
  }); //end of button click
}); //end of document ready
