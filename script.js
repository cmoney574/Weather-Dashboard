var userCity = document.querySelector('#search-input')
var submitButton = document.querySelector('#search-button')
var weatherToday = document.querySelector('#today')
var weatherForecast = document.querySelector('#forecast')
var weatherForecast2 = document.querySelector('#forecast2')
var weatherForecast3 = document.querySelector('#forecast3')
var weatherForecast4 = document.querySelector('#forecast4')
var weatherForecast5 = document.querySelector('#forecast5')
var start = true

function retrieveAtlantaWeather(){

var requestUrl = new URL('https://api.openweathermap.org/data/2.5/weather?');
  x = "q"
  y = "Atlanta"
  requestUrl.searchParams.append(x, y);
  a = "appid"
  b = "f229c031e5ffdd97acd36ae1365477cb"
  requestUrl.searchParams.append(a, b);
  console.log(requestUrl)
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
      console.log(data);
      console.log(data.name)
      console.log(data.main.temp)
      var Kelvin = data.main.temp
      var Farhen = Math.round((Kelvin - 273.15)*1.8 +32)
      console.log(Farhen)
});
}
retrieveAtlantaWeather();

function handleWeather(event){
  event.preventDefault();
  retrieveCityWeather();
  forecastWeather();
}

function retrieveCityWeather(){
  var requestUrl = new URL('https://api.openweathermap.org/data/2.5/weather?');
    x = "q"
    y = userCity.value
    console.log("usercity")
    console.log(userCity.value)
    requestUrl.searchParams.append(x, y);
    a = "appid"
    b = "f229c031e5ffdd97acd36ae1365477cb"
    requestUrl.searchParams.append(a, b);
    console.log(requestUrl)
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.name)
        if(start){
          // today
         var resultName = weatherToday.appendChild(document.createElement('ul'))
         resultName.setAttribute("id", "usercity");
         var resultTemp = weatherToday.appendChild(document.createElement('ul'))
         resultTemp.setAttribute("id", "usertemp");
         var resultHum = weatherToday.appendChild(document.createElement('ul'))
         resultHum.setAttribute("id", "userhum");
        //  tommorow
         var d1Name = weatherForecast.appendChild(document.createElement('ul'))
         d1Name.setAttribute("id", "d1Name");
         var d1Date = weatherForecast.appendChild(document.createElement('ul'))
         d1Date.setAttribute("id", "d1Date");
         var d1Temp = weatherForecast.appendChild(document.createElement('ul'))
         d1Temp.setAttribute("id", "d1Temp");
         var d1Hum = weatherForecast.appendChild(document.createElement('ul'))
         d1Hum.setAttribute("id", "d1Hum");
        //  day two
         var d2Name = weatherForecast2.appendChild(document.createElement('ul'))
         d2Name.setAttribute("id", "d2Name");
         var d2Date = weatherForecast2.appendChild(document.createElement('ul'))
         d2Date.setAttribute("id", "d2Date");
         var d2Temp = weatherForecast2.appendChild(document.createElement('ul'))
         d2Temp.setAttribute("id", "d2Temp");
         var d2Hum = weatherForecast2.appendChild(document.createElement('ul'))
         d2Hum.setAttribute("id", "d2Hum");
        //  day three
        var d3Name = weatherForecast3.appendChild(document.createElement('ul'))
         d3Name.setAttribute("id", "d3Name");
         var d3Date = weatherForecast3.appendChild(document.createElement('ul'))
         d3Date.setAttribute("id", "d3Date");
         var d3Temp = weatherForecast3.appendChild(document.createElement('ul'))
         d3Temp.setAttribute("id", "d3Temp");
         var d3Hum = weatherForecast3.appendChild(document.createElement('ul'))
         d3Hum.setAttribute("id", "d3Hum");
          //  day four
        var d4Name = weatherForecast4.appendChild(document.createElement('ul'))
        d4Name.setAttribute("id", "d4Name");
        var d4Date = weatherForecast4.appendChild(document.createElement('ul'))
        d4Date.setAttribute("id", "d4Date");
        var d4Temp = weatherForecast4.appendChild(document.createElement('ul'))
        d4Temp.setAttribute("id", "d4Temp");
        var d4Hum = weatherForecast4.appendChild(document.createElement('ul'))
        d4Hum.setAttribute("id", "d4Hum");
        //  day five
        var d5Name = weatherForecast5.appendChild(document.createElement('ul'))
        d5Name.setAttribute("id", "d5Name");
        var d5Date = weatherForecast5.appendChild(document.createElement('ul'))
        d5Date.setAttribute("id", "d5Date");
        var d5Temp = weatherForecast5.appendChild(document.createElement('ul'))
        d5Temp.setAttribute("id", "d5Temp");
        var d5Hum = weatherForecast5.appendChild(document.createElement('ul'))
        d5Hum.setAttribute("id", "d5Hum");
        }
        console.log(data.main.temp)
        var Kelvin = data.main.temp
        var Farhen = Math.round((Kelvin - 273.15)*1.8 +32)
        console.log(Farhen)
        document.querySelector('#usercity').textContent = data.name
        document.querySelector('#usertemp').textContent = "Tempature: " + Farhen + " F"
        document.querySelector('#userhum').textContent = "Humidity: " + data.main.humidity + "%"

        start = false
  });
  }

  function forecastWeather(){
    var requestUrl = new URL('https://api.openweathermap.org/data/2.5/forecast?');
    x = "q"
    y = userCity.value
    console.log("forecast")
    console.log(userCity.value)
    requestUrl.searchParams.append(x, y);
    a = "appid"
    b = "f229c031e5ffdd97acd36ae1365477cb"
    requestUrl.searchParams.append(a, b);
    console.log(requestUrl)
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log("list")
      console.log(data.list[0].main.temp)
      var K1 = data.list[0].main.temp
      var F1 = Math.round((K1 - 273.15)*1.8 +32)
      console.log(`Tommorow ${F1} F`)
      var K2 = data.list[8].main.temp
      var F2 = Math.round((K2 - 273.15)*1.8 +32)
      console.log(`2 days from now ${F2} F`)
      var K3 = data.list[16].main.temp
      var F3 = Math.round((K3 - 273.15)*1.8 +32)
      console.log(`3 days from now ${F3} F`)
      var K4 = data.list[24].main.temp
      var F4 = Math.round((K4 - 273.15)*1.8 +32)
      console.log(`4 days from now ${F4} F`)
      var K5 = data.list[32].main.temp
      var F5 = Math.round((K5 - 273.15)*1.8 +32)
      console.log(`5 days from now ${F5} F`)
      // Day One
      document.querySelector('#d1Name').textContent = data.city.name
      document.querySelector('#d1Date').textContent = data.list[0].dt_txt
      document.querySelector('#d1Temp').textContent = "Tempature: " + F1 + " F"
      document.querySelector('#d1Hum').textContent = "Humidity: " + data.list[0].main.humidity + "%"
      // Day two
      document.querySelector('#d2Name').textContent = data.city.name
      document.querySelector('#d2Date').textContent = data.list[8].dt_txt
      document.querySelector('#d2Temp').textContent = "Tempature: " + F2 + " F"
      document.querySelector('#d2Hum').textContent = "Humidity: " + data.list[8].main.humidity + "%"
       // Day three
       document.querySelector('#d3Name').textContent = data.city.name
       document.querySelector('#d3Date').textContent = data.list[16].dt_txt
       document.querySelector('#d3Temp').textContent = "Tempature: " + F3 + " F"
       document.querySelector('#d3Hum').textContent = "Humidity: " + data.list[16].main.humidity + "%"
       // Day four
       document.querySelector('#d4Name').textContent = data.city.name
       document.querySelector('#d4Date').textContent = data.list[24].dt_txt
       document.querySelector('#d4Temp').textContent = "Tempature: " + F4 + " F"
       document.querySelector('#d4Hum').textContent = "Humidity: " + data.list[24].main.humidity + "%"
       // Day five
       document.querySelector('#d5Name').textContent = data.city.name
       document.querySelector('#d5Date').textContent = data.list[32].dt_txt
       document.querySelector('#d5Temp').textContent = "Tempature: " + F5 + " F"
       document.querySelector('#d5Hum').textContent = "Humidity: " + data.list[32].main.humidity + "%"
    });
  }

submitButton.addEventListener("click",handleWeather)