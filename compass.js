const qiblaDirection = 281; // Replace with the actual Qibla direction for your location
const needle = document.getElementById("needle");
const qiblaDirectionText = document.getElementById("qiblaDirectionText");

// Update Qibla direction text
qiblaDirectionText.textContent = `Qibla Direction: ${qiblaDirection}°`;

// Function to update the compass needle
function updateCompass(event) {
  if (event.alpha !== null) {
    const deviceHeading = event.alpha; // Get the device heading
    const adjustedHeading = (qiblaDirection - deviceHeading + 360) % 360; // Calculate relative Qibla heading

    // Update needle rotation
    needle.style.transform = `translate(-50%, -100%) rotate(${adjustedHeading}deg)`;
  } else {
    console.error("Device orientation data unavailable.");
  }
}

// Request permission and add event listener
if (typeof DeviceOrientationEvent.requestPermission === "function") {
  DeviceOrientationEvent.requestPermission()
    .then((state) => {
      if (state === "granted") {
        window.addEventListener("deviceorientation", updateCompass);
      } else {
        alert("Permission to access device orientation denied.");
      }
    })
    .catch((error) => {
      console.error("Error requesting device orientation permission:", error);
    });
} else {
  // For non-iOS devices
  window.addEventListener("deviceorientation", updateCompass);
}