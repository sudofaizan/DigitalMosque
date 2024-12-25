document.addEventListener('DOMContentLoaded', () => {
    const needle = document.getElementById('needle');
    const headingText = document.getElementById('heading');
  
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
                  updateCompass(event)
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
        window.addEventListener('deviceorientation', event => updateCompass(event));
      }
    } else {
      alert('Device Orientation is not supported on this device/browser.');
    }
  
    // Update compass needle to point to the correct direction
    function updateCompass(event) {
      if (event.alpha !== null) {
        const alpha = event.alpha; // Rotation around Z-axis (0° is North)
        const beta = event.beta; // Rotation around X-axis (tilt forward/backward)
        const gamma = event.gamma; // Rotation around Y-axis (tilt left/right)
  
        // Correct for screen orientation
        const screenOrientation = window.screen.orientation.angle || 0;
        const heading = (alpha + screenOrientation) % 360;
  
        // Rotate the needle
        needle.style.transform = `translate(-50%, -100%) rotate(${-heading}deg)`;
  
        // Update heading text
        headingText.textContent = `Heading: ${Math.round(heading)}°`;
      } else {
        alert('Device orientation data is unavailable.');
      }
    }
  });