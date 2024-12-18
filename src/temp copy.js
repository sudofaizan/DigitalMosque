// Initialize variables
let lastPlayedSurah = JSON.parse(localStorage.getItem("lastPlayedSurah")) || null;

// Function to Play Surah and Save Progress
function playSurah(surah, baseURL) {
  audio.src = `${baseURL}${surah.id}.mp3`;
  currentSurah.textContent = surah.name;
  audio.currentTime = lastPlayedSurah && lastPlayedSurah.id === surah.id ? lastPlayedSurah.time : 0;

  // Update Playback Rate
  audio.playbackRate = parseFloat(playbackSpeed.value);
  
  // Save progress periodically
  audio.ontimeupdate = () => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = formatTime(audio.currentTime);

    // Save current time and Surah in localStorage
    localStorage.setItem("lastPlayedSurah", JSON.stringify({
      id: surah.id,
      name: surah.name,
      time: audio.currentTime,
      baseURL: baseURL
    }));
  };

  audio.play();
  isPlaying = true;
  playPauseButton.textContent = "⏸️";
}

// Resume Playback on Page Load
document.addEventListener("DOMContentLoaded", () => {
  if (lastPlayedSurah) {
    const resumeButton = document.createElement("button");
    resumeButton.textContent = `▶️ Resume ${lastPlayedSurah.name}`;
    resumeButton.style.margin = "10px";
    document.body.insertBefore(resumeButton, surahList);

    resumeButton.addEventListener("click", () => {
      playSurah({ id: lastPlayedSurah.id, name: lastPlayedSurah.name }, lastPlayedSurah.baseURL);
    });
  }
});

// Utility Function to Format Time
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}