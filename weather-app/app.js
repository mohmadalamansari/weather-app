const apikey="5d410d8c7d0de1cfa0f9aeee4fd2c4c3";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const city = "city_name";

const searchbox = document.querySelector(".search input");
const searchbth = document.querySelector(".search button ");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response  = await fetch(apiurl+city+`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.floor(data.main.temp)  +"°C";
    // document.querySelector(".temp").innerHTML =data.main.temp  +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";


    if(data.weather[0].main == "clouds"){
        weathericon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "clear"){
        weathericon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzling"){
        weathericon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "mist"){
        weathericon.src = "images/mist.png"
    }
    else if(data.weather[0].main == "clouds"){
        weathericon.src = "images/clouds.png"
    }
} 
searchbtn =addEventListener("click",()=>{
    checkWeather(searchbox.value);
})
