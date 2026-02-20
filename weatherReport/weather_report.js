function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value.trim();
    const apiKey = 'c12f7c6c0f387d6c915601d6176a46ee';

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found or API error");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('weatherInfo').innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML =
                `<p style="color:red">${error.message}</p>`;
        });
}

document.getElementById('weatherForm')
    .addEventListener('submit', showweatherDetails);