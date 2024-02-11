const weatherForm=document.querySelector(".weatherForm");
const cityInput=document.querySelector(".cityInput");
const card=document.querySelector(".card");
const apikey="6475094b7db398a744930b12905f7d0e";

weatherForm.addEventListener("submit",async event=>{
    event.preventDefault();
    const city=cityInput.value;
    if(city){
        try{
            const weatherData= await getWeatherData(city);
            displayWeatherInfo(weatherData);

        }
        catch(error){
            console.error(error);
            displayError(error);
        }

    }
    else{
        displayError("Please enter a city")
    }

});
async function getWeatherData(city){
    const apiUrl='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}'
    const response= await fetch(apiUrl);
    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
    
}
function displayWeatherInfo(data){
    const {name: city,
         main:{temp, humidity},
         weather:[{description, id}]}=data;
    card.textContent="";
    card.style.display="flex";
}
function getWeatherInfo(weatherid){

}
function displayError(message){
    const errorDisplay=document.createElement("p");
    errorDisplay.textContent=message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent="";
    card.style.display="flex";
    card.appendChild(errorDisplay);

}