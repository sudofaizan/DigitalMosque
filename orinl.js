let currentAudio = null;
let azhanAudio = new Audio('azhan.mp3');
let fajrAudio = new Audio('fajr.mp3');
let dhuhrAudio = new Audio('zoher.mp3');
let asarAudio = new Audio('asr.mp3');
let magreebAudio = new Audio('mgreeb.mp3');
let ishaAudio = new Audio('isha.mp3');

let azhanPlaying = false;
let azhanStoppedManually = false;
let audioEnabled = false;

function enableAudio() {
    audioEnabled = true;
    document.getElementById('startButton').style.display = 'none';
}

function getCurrentPrayerTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    let prayer = '';
    const toggleButton = document.getElementById('toggleButton');

    if (audioEnabled && hours === 4 && minutes === 45 && !azhanPlaying && !azhanStoppedManually) {
        playAzhan();
    } else if (hours >= 5 && hours < 11) {
        prayer = 'Fajr';
        currentAudio = fajrAudio;
        toggleButton.style.display = 'inline-block';
    } else if (audioEnabled && hours === 12 && minutes === 45 && !azhanPlaying && !azhanStoppedManually) {
        playAzhan();
    } else if (hours >= 12 && hours < 15) {
        prayer = 'Dhuhr';
        currentAudio = dhuhrAudio;
        toggleButton.style.display = 'inline-block';
    } else if (audioEnabled && hours === 16 && minutes === 45 && !azhanPlaying && !azhanStoppedManually) {
        playAzhan();
    } else if (hours >= 16 && hours < 18) {
        prayer = 'Asar';
        currentAudio = asarAudio;
        toggleButton.style.display = 'inline-block';
    } else if (audioEnabled && hours === 18 && minutes === 45 && !azhanPlaying && !azhanStoppedManually) {
        playAzhan();
    } else if (hours >= 18 && hours < 20) {
        prayer = 'Maghrib';
        currentAudio = magreebAudio;
        toggleButton.style.display = 'inline-block';
    } else if (audioEnabled && hours === 20 && minutes === 45 && !azhanPlaying && !azhanStoppedManually) {
        playAzhan();
    } else if (hours >= 20 && hours < 24) {
        prayer = 'Isha';
        currentAudio = ishaAudio;
        toggleButton.style.display = 'inline-block';
    } else if (hours >= 0 && hours < 4) {
        prayer = 'No Prayer Time you can pray TahaJudh';
        toggleButton.style.display = 'none';
    }

    document.getElementById('prayerTime').textContent = `Current Prayer: ${prayer}`;
}

function updateCurrentTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent = `Current Time: ${now.toLocaleTimeString()}`;
}

function togglePrayer() {
    const button = document.getElementById('toggleButton');

    if (currentAudio && currentAudio.paused) {
        currentAudio.play();
        button.textContent = 'Stop';
    } else if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        button.textContent = 'Start';
    }
}

function playAzhan() {
    const stopAzhanButton = document.getElementById('stopAzhanButton');

    azhanPlaying = true;
    azhanStoppedManually = false;
    azhanAudio.play().catch(error => {
        console.log('Error playing audio:', error);
    });
    stopAzhanButton.style.display = 'inline-block'; // Show the Stop Azan button

    azhanAudio.addEventListener('ended', () => {
        azhanPlaying = false;
        stopAzhanButton.style.display = 'none'; // Hide the Stop Azan button when Azan ends
    });
}

function stopAzhan() {
    azhanAudio.pause();
    azhanAudio.currentTime = 0;
    azhanPlaying = false;
    azhanStoppedManually = true;
    document.getElementById('stopAzhanButton').style.display = 'none'; // Hide the Stop Azan button
}

function initialize() {
    updateCurrentTime();
    getCurrentPrayerTime();
    setInterval(() => {
        updateCurrentTime();
        getCurrentPrayerTime();  // Check for prayer times every second
    }, 1000); // Update every second
}

initialize();