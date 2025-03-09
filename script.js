function getWeather() {
    const location = document.getElementById("locationInput").value;
    const apiKey = "de1d80b9d217401fb9450905250903"; 
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weatherResult").innerHTML = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Condition: ${data.current.condition.text}</p>
                <img src="${data.current.condition.icon}" alt="Weather icon">
            `;
        })
        .catch(() => {
            document.getElementById("weatherResult").innerHTML = "<p>Invalid location. Try again!</p>";
        });
}
