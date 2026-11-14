const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=14.07&lon=120.63&units=metric&appid=7e0f3a4d152e232565cd31eec9eabd3f';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}
function displayResults(data) {
    console.log('weather')
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const desc = data.weather[0].description;
    const formattedDesc = desc.charAt(0).toUpperCase() + desc.slice(1);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', formattedDesc);
    weatherDesc.textContent = formattedDesc;
}

apiFetch();

const forecastContainer = document.querySelector('#three-day-forecast');
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=14.07&lon=120.63&units=metric&appid=7e0f3a4d152e232565cd31eec9eabd3f';

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (!response.ok) {
            throw new Error(`Forecast request failed: ${response.status}`);
        }

        const data = await response.json();
        const days = data.list
            .filter((item) => item.dt_txt.includes('03:00:00'))
            .slice(0, 3);
        
        days.forEach((item) => {
            const reading = document.createElement('p');
            reading.textContent =
                `${item.dt_txt.slice(0, 10)} — Forecast temperature: ` + 
                `${Math.round(item.main.temp) }°C`;
            forecastContainer.append(reading); 
        });
    } catch (error) {
        console.error(error);
    }
}

getForecast();