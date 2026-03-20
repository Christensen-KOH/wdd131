// Static weather values (will be replaced with API data in future lessons)
const temperature = 24; // °C
const windSpeed = 12; // km/h

/**
 * Calculates the wind chill factor using the Canadian formula
 * @param {number} temp - Temperature in Celsius
 * @param {number} speed - Wind speed in km/h
 * @returns {number} Wind chill factor in Celsius
 */
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

/**
 * Displays the wind chill factor if conditions are met
 */
function displayWindChill() {
    const windChillElement = document.getElementById('windChill');

    // Check if wind chill calculation is viable (Metric)
    // Temperature must be <= 10°C and wind speed must be > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = windChill.toFixed(1);
    } else {
        windChillElement.textContent = 'N/A';
    }
}

/**
 * Sets the current year in the footer
 */
function setYear() {
    const yearElement = document.getElementById('year');
    yearElement.textContent = new Date().getFullYear();
}

/**
 * Displays the last modified date of the document
 */
function setLastModified() {
    const lastModElement = document.getElementById('lastModified');
    const lastModDate = new Date(document.lastModified);
    lastModElement.textContent = lastModDate.toLocaleString();
}

// Run functions when page loads
document.addEventListener('DOMContentLoaded', function () {
    setYear();
    setLastModified();
    displayWindChill();
});
