var APIKey = "166a433c57516f51dfab1f7edaed8413";
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Berkeley&units=imperial&appid=" + APIKey;
    // We then created an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      // Create CODE HERE to Log the queryURL
      console.log(queryURL);
      console.log(response);      
      // Create CODE HERE to log the resulting object
      // Create CODE HERE to transfer content to HTML
      $('.city').text(`${response.name} Weather details`);
      $('.wind').text(`Wind speed: ${response.wind.speed}`);
      $('.humidity').text(`Humidity: ${response.main.humidity}`);
      // Create CODE HERE to calculate the temperature (converted from Kelvin)
      const f = (response.main.temp - 273.15) * 1.8 + 32;
      // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
      $('.temp').text(`Temp in Fahrenheit: ${f.toFixed(2)}`);
      // Create CODE HERE to dump the temperature content into HTML
    });