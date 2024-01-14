
import {key,url} from './key.js';

const apikey = key;
const apiurl = url;
const weatherIcon = document.querySelector("weather-icon");

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&apiid=${apikey}` );
    var data = await response.json();
}



document.querySelector(".city").innerHtml = data.name;
document.querySelector(".temp").innerHtml = Math.round(data.main.temp) + "c";
document.querySelector(".humidity").innerHtml = data.main.humidity + "%";
document.querySelector(".wind").innerHtml = data.main.wind + "km/h";

if(data.weather[0].main == "Clouds"){
    weatherIcon.src="images/clouds.png";
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src="images/clear.png";
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src="images/rain.png";
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src="images/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src="images/mist.png";
}


document.querySelector(".weather").computedStyleMap.dispaly="block";





searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})