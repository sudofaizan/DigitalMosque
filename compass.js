document.addEventListener('DOMContentLoaded', () => {
    const needle = document.getElementById('needle');
    const headingText = document.getElementById('heading');
  
    // Check if DeviceOrientationEvent is supported
    if (window.DeviceOrientationEvent) {
      console.log('DeviceOrientationEvent is supported.');
  
      // For iOS 13+ or devices requiring permission
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
                window.addEventListener('deviceorientation', updateCompass);
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
        window.addEventListener('deviceorientation', updateCompass);
      }
    } else {
      alert('Device Orientation is not supported on this device/browser.');
    }
  
    // Function to update the compass needle
    function updateCompass(event) {
      if (event.alpha !== null) {
        const heading = Math.round(event.alpha); // Use the alpha value for the heading
        needle.style.transform = `translate(-50%, -100%) rotate(${heading}deg)`;
        headingText.textContent = `Heading: ${heading}°`;
      } else {
        alert('Device orientation data is unavailable.');
      }
    }
  });