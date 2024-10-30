let currentAudio = null;
let azhanAudio = new Audio('azhan.mp3');
let fajrAudio = new Audio('1.mp3');
let dhuhrAudio = new Audio('2.mp3');
let asarAudio = new Audio('3.mp3');
let magreebAudio = new Audio('4.mp3');
let ishaAudio = new Audio('5.mp3');

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
        F = "2"; //fard sunnah
        BFS = "2"; //before fard sunnah
        AFS = "0" //after fard sunnah
        AFN = "0"; //after fard nafal
        AFW = "0" //after fard wajib
        currentAudio = fajrAudio;
        toggleButton.style.display = 'inline-block';
    } else if (audioEnabled && hours === 12 && minutes === 45 && !azhanPlaying && !azhanStoppedManually) {
        playAzhan();
    } else if (hours >= 12 && hours < 16) {
        prayer = 'Dhuhr';
        F = "4"; //fard sunnah
        BFS = "4"; //before fard sunnah
        AFS = "2" //after fard sunnah
        AFN = "2"; //after fard nafal
        AFW = "0" //after fard wajib
        currentAudio = dhuhrAudio;
        toggleButton.style.display = 'inline-block';
    } else if (audioEnabled && hours === 16 && minutes === 45 && !azhanPlaying && !azhanStoppedManually) {
        playAzhan();
    } else if (hours >= 16 && hours < 18) {
        prayer = 'Asar';
        F = "4"; //fard sunnah
        BFS = "4"; //before fard sunnah
        AFS = "0" //after fard sunnah
        AFN = "0"; //after fard nafal
        AFW = "0" //after fard wajib
        currentAudio = asarAudio;
        toggleButton.style.display = 'inline-block';
    } else if (audioEnabled && hours === 18 && minutes === 45 && !azhanPlaying && !azhanStoppedManually) {
        playAzhan();
    } else if (hours >= 18 && hours < 20) {
        prayer = 'Maghrib';
        Sunnat = "2";
        Nafal = "2";
        Farad = "3";
        F = "3"; //fard sunnah
        BFS = "0"; //before fard sunnah
        AFS = "2" //after fard sunnah
        AFN = "0"; //after fard nafal
        AFW = "0" //after fard wajib
        currentAudio = magreebAudio;
        toggleButton.style.display = 'inline-block';
    } else if (audioEnabled && hours === 20 && minutes === 45 && !azhanPlaying && !azhanStoppedManually) {
        playAzhan();
    } else if (hours >= 20 && hours < 24) {
        prayer = 'Isha';
        Sunnat = "4";
        Nafal = "4";
        Farad = "4";
        currentAudio = ishaAudio;
        toggleButton.style.display = 'inline-block';
    } else if (hours >= 0 && hours < 4) {
        prayer = 'No Prayer Time you can pray TahaJudh';
        toggleButton.style.display = 'none';
    }

    document.getElementById('prayerTime').textContent = `Current Prayer: ${prayer}`;
    document.getElementById('BFS').textContent = `Before Fard Sunnah (Rakah) is :${BFS}`;
    document.getElementById('F').textContent = `Fard (Rakah) is :${F}`;
    document.getElementById('AFS').textContent = `After Fard Sunnah (Rakah) is :${AFS}`;
    document.getElementById('AFN').textContent = `After Fard Nafal is :${AFN}`;
    document.getElementById('AFW').textContent = `After Fard Wajib is :${AFW}`;
}

function updateCurrentTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent = `Current Time: ${now.toLocaleTimeString()}`;
}
function imgupdstrt(){
    const image = document.getElementById('NamazImage');
    image.src = "src/steps/3.png";
    image.style.display ='inline-block';
    // document.getElementById('prayerTime').style.display ="none";
    document.getElementById('BFS').style.display ="none";
    document.getElementById('F').style.display ="none";
    document.getElementById('AFS').style.display ="none";
    document.getElementById('AFN').style.display ="none";
    document.getElementById('AFW').style.display ="none";
    
    setInterval(() => {
   

    var cur_time = currentAudio.currentTime;

if (prayer = "Dhuhr")
{
      if (cur_time > 6)
      {
        image.src = "src/steps/0.png";
      }
      if (cur_time > 9)
        {
          image.src = "src/steps/1.png";
        }
        if (cur_time > 66)
            {
              image.src = "src/steps/2.png";
            }
            if (cur_time > 76)
                {
                  image.src = "src/steps/3.png";
                }
                if (cur_time > 82)
                    {
                      image.src = "src/steps/5.png";
                    }
    
}
if (prayer = "Asar")
    {
          if (cur_time > 5)
          {
            image.src = "src/steps/0.png";
          }
          if (cur_time > 7)
            {
              image.src = "src/steps/1.png";
            }
            if (cur_time > 65)
                {
                  image.src = "src/steps/2.png";
                }
                if (cur_time > 74)
                    {
                      image.src = "src/steps/3.png";
                    }
                    if (cur_time > 80)
                        {
                          image.src = "src/steps/5.png";
                        }
                        if (cur_time > 89)
                            {
                              image.src = "src/steps/4.png";
                            }
                            if (cur_time > 96)
                                {
                                  image.src = "src/steps/5.png";
                                }
                                if (cur_time > 102)
                                    {
                                      image.src = "src/steps/1.png";
                                    }
                                    if (cur_time > 160)
                                        {
                                          image.src = "src/steps/2.png";
                                        }
                                        if (cur_time > 170)
                                            {
                                              image.src = "src/steps/3.png";
                                            }
                                            if (cur_time > 170)
                                                {
                                                  image.src = "src/steps/3.png";
                                                }
                                                if (cur_time > 176)
                                                    {
                                                      image.src = "src/steps/5.png";
                                                    }
                                                    if (cur_time > 180)
                                                        {
                                                          image.src = "src/steps/4.png";
                                                        }
                                                        if (cur_time > 189)
                                                            {
                                                              image.src = "src/steps/5.png";
                                                            }
                                                            if (cur_time > 198)
                                                                {
                                                                  image.src = "src/steps/4.png";
                                                                }
                                                                if (cur_time > 223)
                                                                    {
                                                                      image.src = "src/steps/1.png";
                                                                    }
                                                                    if (cur_time > 268)
                                                                        {
                                                                          image.src = "src/steps/2.png";
                                                                        }
                                                                        if (cur_time > 278)
                                                                            {
                                                                              image.src = "src/steps/3.png";
                                                                            }
                                                                            if (cur_time > 284)
                                                                                {
                                                                                  image.src = "src/steps/5.png";
                                                                                }
                                                                                if (cur_time > 292)
                                                                                    {
                                                                                      image.src = "src/steps/4.png";
                                                                                    }
                                                                                    if (cur_time > 298)
                                                                                        {
                                                                                          image.src = "src/steps/5.png";
                                                                                        }
                                                                                        if (cur_time > 306)
                                                                                            {
                                                                                              image.src = "src/steps/1.png";
                                                                                            }
                                                                                            if (cur_time > 350)
                                                                                                {
                                                                                                  image.src = "src/steps/2.png";
                                                                                                }
                                                                                                if (cur_time > 360)
                                                                                                    {
                                                                                                      image.src = "src/steps/3.png";
                                                                                                    }
                                                                                                    if (cur_time > 367)
                                                                                                        {
                                                                                                          image.src = "src/steps/5.png";
                                                                                                        }
                                                                                                        if (cur_time > 374)
                                                                                                            {
                                                                                                              image.src = "src/steps/4.png";
                                                                                                            }
                                                                                                            if (cur_time > 380)
                                                                                                                {
                                                                                                                  image.src = "src/steps/5.png";
                                                                                                                }
                                                                                                                if (cur_time > 388)
                                                                                                                    {
                                                                                                                      image.src = "src/steps/4.png";
                                                                                                                    }
                                                                                                                    if (cur_time > 450)
                                                                                                                        {
                                                                                                                          image.src = "src/steps/6.png";
                                                                                                                        }
                                                                                                                        if (cur_time > 453)
                                                                                                                            {
                                                                                                                              image.src = "src/steps/4.png";
                                                                                                                            }
                                                                                                                            if (cur_time > 454)
                                                                                                                                {
                                                                                                                                  image.src = "src/steps/7.png";
                                                                                                                                }
                                                                                                                                if (cur_time > 456)
                                                                                                                                    {
                                                                                                                                      image.src = "none";
                                                                                                                                      imgupdstp();
                                                                                                                                    }
                                                                                                                                
    }

    }, 20); // Update every second

}
function imgupdstp(){
    const image = document.getElementById('NamazImage');
    image.src = "src/steps/0.png";
    image.style.display ='none'; 
    
    document.getElementById('prayerTime').style.display ='block';
    document.getElementById('BFS').style.display ='block';
    document.getElementById('F').style.display ='block';
    document.getElementById('AFS').style.display ='block';
    document.getElementById('AFN').style.display='block';
    document.getElementById('AFW').style.display ='block';
    
}
function togglePrayer() {
    const button = document.getElementById('toggleButton');
    
    if (currentAudio && currentAudio.paused) {
        currentAudio.play();
        imgupdstrt();
        button.textContent = 'Stop';
    } else if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        button.textContent = 'Start';
        imgupdstp();
        
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