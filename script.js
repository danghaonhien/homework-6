$(document).ready(function() {
  var update = function() {
    var day = moment().format("MMM Do YY");
    $("#realTime").text(day);
    let time = moment().format("hh:mm:ss a");
    $("#time").text(time);
  };
  update();
  setInterval(update, 1000);
  init();
let tomorrow=moment(new Date()).add(1,"days").format("dddd");
let day2=moment(new Date()).add(2,"days").format("dddd");
let day3=moment(new Date()).add(3,"days").format("dddd");
let day4=moment(new Date()).add(4,"days").format("dddd");
let day5=moment(new Date()).add(5,"days").format("dddd");
$(".tomorrow").text(tomorrow)
$(".day2").text(day2)
$(".day3").text(day3)
$(".day4").text(day4)
$(".day5").text(day5)
  $("#search").on("click", () => {
    let input = $(".cityList").val();
    $(".city").text(input);
    $("<input>").text("")
    APIKey = "166a433c57516f51dfab1f7edaed8413";
    var queryURL =
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=${input}&units=imperial&appid=${APIKey}`;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var city = response.city.name;
      // Log the response to the console
      console.log(response);
      $(".city").text(city);
      $(".weather").text(response.list[0].weather[0].main);
      $(".wind").text(`Wind speed: ${response.list[0].speed}`);
      $(".humidity").text(`Humidity: ${response.list[0].humidity}`);
      // Create CODE HERE to calculate the temperature (converted from Kelvin)
      //   const f = (response.main.temp - 273.15) * 1.8 + 32;
      // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
      $(".temp").text(response.list[0].temp.day + " F ");
      $(".mintemp").text(response.list[0].temp.min + " F ");
      $(".maxtemp").text(response.list[0].temp.max + " F ");
      localStorage.setItem("Custom Weather", JSON.stringify(response));
      $(".Fmin").text(response.list[1].temp.min + " F ");
      $(".Fmax").text(response.list[1].temp.max + " F ");
      $(".Fmin2").text(response.list[3].temp.min + " F ");
      $(".Fmax2").text(response.list[3].temp.max + " F ");
      $(".Fmin3").text(response.list[4].temp.min + " F ");
      $(".Fmax3").text(response.list[4].temp.max + " F ");
      $(".Fmin4").text(response.list[5].temp.min + " F ");
      $(".Fmax4").text(response.list[5].temp.max + " F ");
      $(".Fmin5").text(response.list[6].temp.min + " F ");
      $(".Fmax5").text(response.list[6].temp.max + " F ");
      // Cache the response to a variable
      // weather = response;
      localStorage.setItem("Current Weather", JSON.stringify(response));

    });
  });
function init(){
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var x = position.coords.latitude;
      var y = position.coords.longitude;

      fetch(
        `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${x}&lon=${y}&units=imperial&appid=${APIKey}`
      )
        .then(function(response) {
          // Get a JSON object from the response
          // This is a weird quirk of Fetch
          return response.json();
        })
        .then(function(data) {
          var city = data.city.name;
          // Log the data to the console
          console.log(data);
          $(".city").text(city);
          $(".weather").text(data.list[0].weather[0].main);
          $(".wind").text(`Wind speed: ${data.list[0].speed}`);
          $(".humidity").text(`Humidity: ${data.list[0].humidity}`);
          // Create CODE HERE to calculate the temperature (converted from Kelvin)
          //   const f = (data.main.temp - 273.15) * 1.8 + 32;
          // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
          $(".temp").text(data.list[0].temp.day + " F ");
          $(".mintemp").text(data.list[0].temp.min + " F ");
          $(".maxtemp").text(data.list[0].temp.max + " F ");
          // Cache the data to a variable
          // weather = data;
          localStorage.setItem("Current Weather", JSON.stringify(data));
          $(".Fmin").text(data.list[0].temp.min + " F ");
          $(".Fmax").text(data.list[0].temp.max + " F ");
          $(".Fmin2").text(data.list[2].temp.min + " F ");
          $(".Fmax2").text(data.list[2].temp.max + " F ");
          $(".Fmin3").text(data.list[3].temp.min + " F ");
          $(".Fmax3").text(data.list[3].temp.max + " F ");
          $(".Fmin4").text(data.list[4].temp.min + " F ");
          $(".Fmax4").text(data.list[4].temp.max + " F ");
          $(".Fmin5").text(data.list[5].temp.min + " F ");
          $(".Fmax5").text(data.list[5].temp.max + " F ");
          // Cache the data to a variable
          // weather = data;
          localStorage.setItem("Current Weather", JSON.stringify(data));
        })
        .catch(function(error) {
          // if there's an error, log it
          console.log(error);
        });
    });
  }}
});
