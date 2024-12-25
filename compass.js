document.addEventListener('DOMContentLoaded', () => {
    const needle = document.getElementById('needle');
    const headingText = document.getElementById('heading');
  
    // Kaaba coordinates (latitude and longitude)
    const kaabaLat = 21.4225;
    const kaabaLng = 39.8262;
  
    // Function to calculate Qibla direction
    function calculateQiblaDirection(latitude, longitude) {
      const lat1 = (latitude * Math.PI) / 180; // Convert to radians
      const lon1 = (longitude * Math.PI) / 180;
      const lat2 = (kaabaLat * Math.PI) / 180;
      const lon2 = (kaabaLng * Math.PI) / 180;
  
      const deltaLon = lon2 - lon1;
      const x = Math.sin(deltaLon) * Math.cos(lat2);
      const y =
        Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLon);
  
      const qiblaBearing = (Math.atan2(x, y) * 180) / Math.PI; // Convert to degrees
      return (qiblaBearing + 360) % 360; // Normalize to 0-360
    }
  
    // Get user location and calculate Qibla direction
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          const qiblaDirection = calculateQiblaDirection(latitude, longitude);
          console.log(`Qibla Direction: ${qiblaDirection}°`);
  
          // Add device orientation event
          if (window.DeviceOrientationEvent) {
            if (typeof DeviceOrientationEvent.requestPermission === 'function') {
              const requestPermissionBtn = document.createElement('button');
              requestPermissionBtn.textContent = 'Enable Compass';
              requestPermissionBtn.style.cssText =
                'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 10px 20px; font-size: 16px;';
              document.body.appendChild(requestPermissionBtn);
  
              requestPermissionBtn.addEventListener('click', () => {
                DeviceOrientationEvent.requestPermission()
                  .then(permissionState => {
                    if (permissionState === 'granted') {
                      document.body.removeChild(requestPermissionBtn);
                      window.addEventListener('deviceorientation', event =>
                        updateCompass(event, qiblaDirection)
                      );
                    } else {
                      alert('Permission denied for accessing device orientation.');
                    }
                  })
                  .catch(error => {
                    console.error('Permission request error:', error);
                    alert('Unable to request permission for device orientation.');
                  });
              });
            } else {
              // For devices that don't require explicit permission
              window.addEventListener('deviceorientation', event =>
                updateCompass(event, qiblaDirection)
              );
            }
          } else {
            alert('Device Orientation is not supported on this device/browser.');
          }
        },
        error => {
          alert('Error getting location. Ensure location services are enabled.');
          console.error(error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  
    // Update compass needle to point to the Qibla direction
    function updateCompass(event, qiblaDirection) {
      if (event.alpha !== null) {
        const deviceHeading = 360 - event.alpha; // Convert to compass direction
        const qiblaHeading = (qiblaDirection - deviceHeading + 360) % 360; // Relative heading
  
        needle.style.transform = `translate(-50%, -100%) rotate(${qiblaHeading}deg)`;
        headingText.textContent = `Qibla Direction: ${Math.round(qiblaDirection)}°`;
      } else {
        alert('Device orientation data is unavailable.');
      }
    }
  });