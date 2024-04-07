document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '92faeb65301b2a4bf2c269c76838a193';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const location = 'Lagos';

    fetch(`${apiUrl}?q=${location}&appid=${apiKey}&units=metric`) // Fetch weather data
        .then(response => response.json()) // Convert response to JSON
        .then(data => { // Handle JSON data
            const locationElement = document.querySelector('.location'); // Get location element
            const temperatureElement = document.querySelector('.temperature'); // Get temperature element
            const descriptionElement = document.querySelector('.description'); // Get description element

            locationElement.textContent = `Location: ${data.name}`; // Set location text
            temperatureElement.textContent = `Temperature: ${data.main.temp}Â°C`; // Set temperature text
            descriptionElement.textContent = `Description: ${data.weather[0].description}`; // Set description text
        })
        .catch(error => { // Handle errors
            console.error('Error fetching weather data:', error); // Log error to console
        });
});