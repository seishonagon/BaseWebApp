// function showPicture(){
//   // use jQuery ($ is shorthand) to find the div on the page and then change the html
//   // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
//   $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
//   $("p").html("High five! You're building your first web app!");
// 
//   // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
//   
// }

$(document).ready(function() {
  getWeather("Paris");
  countUsers();
})

function getWeather(searchQuery) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchQuery + "&units=metric&appid=85b143711beff5ce8af1d98cca6078f5";
   // + apiKeyWeather;
  $(".oups").text("");
  $.ajax(url, {
    success: function(data) {
      console.log(data);
      $(".city").text(data.name);
      $(".temp").text(data.main.temp);
      $(".feels").text(data.main.feels_like);
    },
    error: function(data) {
      console.log(data);
      $(".oups").text("An Error Occurred");
    }
  })
}

function countUsers(){
  var url = "https://apihswebapp@apihswebapp.fr:Namiki01@expert.experconnect.test.demedicis.fr/api/users/count";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.setRequestHeader("accept", "application/json");
  xhr.setRequestHeader("apiKey", apiKey);
  xhr.setRequestHeader("token", token);
  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
       
        console.log(xhr.status);
        console.log(xhr.responseText);
        $(".users").text(data.name);
        
     }};
  xhr.send();
  
  
  
}

// function searchWeather() {
//   var searchQuery = $(".search").val();
//   getWeather(searchQuery)
// }
