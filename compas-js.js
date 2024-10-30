const arrow = document.getElementById('arrow');
const locationInfo = document.getElementById('location-info');
const errorMessage = document.getElementById('error-message');
let qiblaDirection = null;

// Get user location and calculate Qibla direction
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    locationInfo.innerText = 'Geolocation is not supported by your browser.';
}

function success(position) {
    const { latitude, longitude } = position.coords;
    locationInfo.innerText = `Your location: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
    
    // Calculate Qibla direction
    qiblaDirection = calculateQibla(latitude, longitude);
}

function error() {
    locationInfo.innerText = 'Unable to retrieve your location.';
}

// Calculate Qibla direction (using a rough calculation)
function calculateQibla(lat, lng) {
    const makkahLat = 21.4225;
    const makkahLng = 39.8262;

    const phiK = toRadians(makkahLat);
    const lambdaK = toRadians(makkahLng);
    const phiL = toRadians(lat);
    const lambdaL = toRadians(lng);

    const qibla = Math.atan2(Math.sin(lambdaK - lambdaL), Math.cos(phiL) * Math.tan(phiK) - Math.sin(phiL) * Math.cos(lambdaK - lambdaL));
    return toDegrees(qibla);
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

// Device orientation event listener
window.addEventListener('deviceorientation', (event) => {
    if (qiblaDirection === null) {
        errorMessage.innerText = 'Waiting for location data...';
        return;
    }

    let compassHeading;
    
    // On iOS devices, use webkitCompassHeading if available
    if (event.webkitCompassHeading !== undefined) {
        compassHeading = event.webkitCompassHeading;
    } else {
        compassHeading = 360 - event.alpha; // On most devices, alpha is 0 = north
    }
    
    // Calculate rotation to point towards Qibla
    const rotation = qiblaDirection - compassHeading;
    
    // Rotate the arrow to point to the Qibla
    arrow.style.transform = `rotate(${rotation}deg)`;
});