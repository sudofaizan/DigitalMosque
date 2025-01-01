document.querySelectorAll('.alphabet').forEach(alphabet => {
  alphabet.addEventListener('click', async () => {
    const sound = alphabet.getAttribute('data-sound');

    // Check if the sound is already cached in localStorage
    let cachedAudio = localStorage.getItem(sound);

    if (!cachedAudio) {
      console.log('Downloading audio...');
      try {
        // Fetch the audio file and convert it to a Base64 string
        const response = sound;
        const blob = await response.blob();
        cachedAudio = await new Promise(resolve => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob); // Convert blob to Base64
        });

        // Store the Base64 string in localStorage
        localStorage.setItem(sound, cachedAudio);
      } catch (error) {
        console.error('Error fetching the audio file:', error);
        return;
      }
    } else {
      console.log('Using cached audio...');
    }

    // Play the audio from localStorage
    const audio = new Audio(cachedAudio);
    audio.play();
  });
});