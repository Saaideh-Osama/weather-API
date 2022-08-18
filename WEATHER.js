
                 // API key //
var APIKey = "96a76e81a5d9dd067bbf02bfb0127a67";

document.getElementById("country").addEventListener('change',function(){
               //  fetch Api//
               var city=document.querySelector("#country").value;
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96a76e81a5d9dd067bbf02bfb0127a67&units=metric`
)

  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);


   const d = new Date();

document.querySelector('.wind .value').textContent=(data.wind.speed)
document.querySelector('.humidity .value').textContent=(data.main.humidity+"%");
document.querySelector('.pressure .value').textContent=(data.main.pressure+"%") ;
document.querySelector('.weather-temp').textContent=(data.main.temp.toFixed(0)+"°C");
document.querySelector('.location').textContent=city
document.querySelector('.date-container .date-dayname').textContent=d.toLocaleString("en-us", { weekday: "long" });
document.querySelector('.date-container .date-day').textContent=d.toLocaleDateString();
document.querySelector('.weather-desc').textContent=data.weather[0].main 

})})