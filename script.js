$(document).ready(function() {
  var update = function() {
    var day = moment().format("MMM Do YY");
    $("#realTime").text(day);
    let time = moment().format("hh:mm:ss a");
    $("#time").text(time);
  };
  update();
  setInterval(update, 1000);

  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var x = position.coords.latitude;
      var y = position.coords.longitude;

      var weather, cities;

      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&units=imperial&appid=${APIKey}`
      )
        .then(function(response) {
          // Get a JSON object from the response
          // This is a weird quirk of Fetch
          return response.json();
        })
        .then(function(data) {
          var city = data.name;
          // Log the data to the console
          console.log(data);
          $(".city").text(city);
          $(".weather").text(data.weather[0].main);
          $(".wind").text(`Wind speed: ${data.wind.speed}`);
          $(".humidity").text(`Humidity: ${data.main.humidity}`);
          // Create CODE HERE to calculate the temperature (converted from Kelvin)
          //   const f = (data.main.temp - 273.15) * 1.8 + 32;
          // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
          $(".temp").text(data.main.temp + " F ");
          $(".mintemp").text(data.main.temp_min + " F ");
          $(".maxtemp").text(data.main.temp_max + " F ");
          // Cache the data to a variable
          // weather = data;
       
          // Make another API call and pass it into the stream
          return fetch(`https://api.teleport.org/api/cities/?`);
        })
        .then(function(response) {
          // Get a JSON object from the response
          return response.json();
        })
        .then(function(data) {
          // Log the data to the console
          let cities=[];
          for(let i =0; i<data._embedded.length;i++)
          cities.push($(".menu").text(data._embedded[i]))
          console.log(data);
         
          // Cache the data to a variable
          cities = data;

          // Now that you have both APIs back, you can do something with the data
        })
        .catch(function(error) {
          // if there's an error, log it
          console.log(error);
        });
    });
  }

  //          $.getJSON(`http://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&units=imperial&appid=${APIKey}`, function(data) {
  //            var city = data.name;
  //     // Create CODE HERE to log the resulting object
  //     // Create CODE HERE to transfer content to HTML
  //     $('.city').text(`${city}`);
  //     $(".weather").text(data.weather[0].main)
  //     $('.wind').text(`Wind speed: ${data.wind.speed}`);
  //     $('.humidity').text(`Humidity: ${data.main.humidity}`);
  //     // Create CODE HERE to calculate the temperature (converted from Kelvin)
  //   //   const f = (data.main.temp - 273.15) * 1.8 + 32;
  //     // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
  //     $('.temp').text(data.main.temp + " F ");
  //     $('.mintemp').text(data.main.temp_min + " F ");
  //     $('.maxtemp').text(data.main.temp_max + " F ");
  //     console.log(data);
  //   });

  //     // Create CODE HERE to dump the temperature content into HTML
  //   }) ;

  // };
});
