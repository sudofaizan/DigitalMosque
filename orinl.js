let currentAudio = null;
let azhanAudio = new Audio('azhan.mp3');
let fajrAudio = new Audio('1.mp3');
let dhuhrAudio = new Audio('2.mp3');
let asarAudio = new Audio('3.mp3');
let magreebAudio = new Audio('4.mp3');
let ishaAudio = new Audio('5.mp3');
const imagesToPreload = [
  'src/steps/0.png', 'src/steps/1.png', 'src/steps/2.png', 'src/steps/3.png',
  'src/steps/4.png', 'src/steps/5.png', 'src/steps/6.png', 'src/steps/7.png'
];

imagesToPreload.forEach(src => {
  const img = new Image();
  img.src = src;
});

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
if (prayer = " " )
{
  prayer = 'NO TIME';
      document.getElementById('toggleButton').style.display = 'none';
      document.getElementById('toggleButton').style.display = 'none';

      F = "0"; //fard sunnah
      BFS = "0"; //before fard sunnah
      AFS = "0" //after fard sunnah
      AFN = "0"; //after fard nafal
      AFW = "0" //after fard wajib

}
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
document.getElementById('stepname').textContent = `Current Step Name is: Qiyaam`;
    image.style.display ='inline-block';
    // document.getElementById('prayerTime').style.display ="none";
    document.getElementById('BFS').style.display ="none";
    document.getElementById('F').style.display ="none";
    document.getElementById('AFS').style.display ="none";
    document.getElementById('AFN').style.display ="none";
    document.getElementById('AFW').style.display ="none";
    document.getElementById('stepname').style.display ='none'; // hide inline block

    
    setInterval(() => {
   

    var cur_time = currentAudio.currentTime;
if ( prayer = 'Isha' )
{/// start of isha 4 rakah
  document.getElementById('stepname').style.display ='inline-block'; // popup inline block
  // image.style.display ='none';

  if (cur_time > 5)
    {
      image.src = "src/steps/0.png";
document.getElementById('stepname').textContent = `Current Step Name is: Takbeer`;
      

    }
    if (cur_time > 7)
      {
        image.src = "src/steps/1.png";
document.getElementById('stepname').textContent = `Current Step Name is: AL-Qiyaam`;

      }
      if (cur_time > 50)
        {
          image.src = "src/steps/2.png";
document.getElementById('stepname').textContent = `Current Step Name is: Ruku`;

        }
        if (cur_time > 58)
          {
            image.src = "src/steps/3.png";
document.getElementById('stepname').textContent = `Current Step Name is: Qiyaam`;
          }
          if (cur_time > 64)
            {
              image.src = "src/steps/5.png";
document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;
            }
            if (cur_time > 70)
              {
                image.src = "src/steps/4.png";
document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;
                }
              if (cur_time > 74)
                {
                  image.src = "src/steps/5.png";
document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;
                    }
                if (cur_time > 74)
                  {
                    image.src = "src/steps/5.png";
document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;
                        }
                  if (cur_time > 80)
                    {
                      image.src = "src/steps/1.png";
document.getElementById('stepname').textContent = `Current Step Name is: AL-Qiyaam`;

                            }
                    if (cur_time > 125)
                      {
                        image.src = "src/steps/2.png";
document.getElementById('stepname').textContent = `Current Step Name is: Ruku`;

                                }
                      if (cur_time > 132)
                        {
                          image.src = "src/steps/3.png";
document.getElementById('stepname').textContent = `Current Step Name is: Qiyaam`;
                                    }
                        if (cur_time > 136)
                          {
                            image.src = "src/steps/5.png";
document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;
                                        }
                          if (cur_time > 142)
                            {
                              image.src = "src/steps/4.png";
document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;
                                            }
                            if (cur_time > 152)
                              {
                                image.src = "src/steps/4.png";
document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;
                                                }
                              if (cur_time > 216)
                                {
                                  image.src = "src/steps/3.png";
document.getElementById('stepname').textContent = `Current Step Name is: Qiyaam`;
                                                    }
                                if (cur_time > 221)
                                  {
                                    image.src = "src/steps/5.png";
document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;
                                                        }
                                  if (cur_time > 227)
                                    {
                                      image.src = "src/steps/4.png";
document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;
                                                            }
                                    if (cur_time > 231)
                                      {
                                        image.src = "src/steps/5.png";
document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;
                                                                }
                                      if (cur_time > 238)
                                        {
                                          image.src = "src/steps/1.png";
document.getElementById('stepname').textContent = `Current Step Name is: AL-Qiyaam`;

                                                                    }
                                        if (cur_time > 272)
                                          {
                                            image.src = "src/steps/2.png";
document.getElementById('stepname').textContent = `Current Step Name is: Ruku`;

                                                                        }
                                          if (cur_time > 280)
                                            {
                                              image.src = "src/steps/3.png";
document.getElementById('stepname').textContent = `Current Step Name is: Qiyaam`;
                                                                            }
                                            if (cur_time > 284)
                                              {
                                                image.src = "src/steps/5.png";
document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;
                                                                                }
                                              if (cur_time > 290)
                                                {
                                                  image.src = "src/steps/4.png";
document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;
                                                                                    }
                                                if (cur_time > 295)
                                                  {
                                                    image.src = "src/steps/5.png";
document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;
                                                                                        }
                                                  if (cur_time > 301)
                                                    {
                                                      image.src = "src/steps/4.png";
document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;
                                                                                            }
                                                    if (cur_time > 349)
                                                      {
                                                        image.src = "src/steps/6.png";
document.getElementById('stepname').textContent = `Current Step Name is: Salam`;
                                                                                                }
                                                      if (cur_time > 352)
                                                        {
                                                          image.src = "src/steps/7.png";
                                                                                                    }
    }


else if ( prayer = "Dhuhr" )
{/// start of zoher 4 rakah
  document.getElementById('stepname').style.display ='inline-block'; // popup inline block
  

      if (cur_time > 7)
      {
        image.src = "src/steps/0.png";
document.getElementById('stepname').textContent = `Current Step Name is: Takbeer`;
        document.getElementById('stepname').textContent = `Current Step Name is: Takbeer`;
      }
      if (cur_time > 9)
        {
          image.src = "src/steps/1.png";

          document.getElementById('stepname').textContent = `Current Step Name is: AL-Qiyaam`;
        }
        if (cur_time > 67)
            {
              image.src = "src/steps/2.png";

              document.getElementById('stepname').textContent = `Current Step Name is: Ruku`;

            }
            if (cur_time > 76)
                {
                  image.src = "src/steps/3.png";
                  document.getElementById('stepname').textContent = `Current Step Name is: Qiyaam`;

                }
                if (cur_time > 82)
                    {
                      image.src = "src/steps/5.png";
                      document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;

                    }
                    if (cur_time > 91)
                      {
                        image.src = "src/steps/4.png";
                        document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;

                      }
                      if (cur_time > 97)
                        {
                          image.src = "src/steps/5.png";
                          document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;

                        }
                        if (cur_time > 106)
                          {
                            image.src = "src/steps/1.png";

                            document.getElementById('stepname').textContent = `Current Step Name is: AL-Qiyaam`;

                          }
                          if (cur_time > 162)
                            {
                              image.src = "src/steps/2.png";

                              document.getElementById('stepname').textContent = `Current Step Name is: Ruku`;

                            }
                            if (cur_time > 172)
                              {
                                image.src = "src/steps/3.png";
                                document.getElementById('stepname').textContent = `Current Step Name is: Qiyaam`;

                              }
                              if (cur_time > 177)
                                {
                                  image.src = "src/steps/5.png";
                                  document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;

                                }
                                if (cur_time > 185)
                                  {
                                    image.src = "src/steps/4.png";
                                    document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;

                                  }
                                  if (cur_time > 191)
                                    {
                                      image.src = "src/steps/5.png";
                                      document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;

                                    }
                                    if (cur_time > 199)
                                      {
                                        image.src = "src/steps/4.png";
                                        document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;

                                      }
                                      if (cur_time > 224)
                                        {
                                          image.src = "src/steps/1.png";
 
                                          document.getElementById('stepname').textContent = `Current Step Name is: AL-Qiyaam`;

                                        }
                                        if (cur_time > 270)
                                          {
                                            image.src = "src/steps/2.png";
 
                                            document.getElementById('stepname').textContent = `Current Step Name is: Ruku`;

                                          }
                                          if (cur_time > 280)
                                            {
                                              image.src = "src/steps/3.png";
                                              document.getElementById('stepname').textContent = `Current Step Name is: Qiyaam`;

                                            }
                                            if (cur_time > 287)
                                              {
                                                image.src = "src/steps/5.png";
                                                document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;

                                              }
                                              if (cur_time > 295)
                                                {
                                                  image.src = "src/steps/4.png";
                                                  document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;

                                                }
                                                if (cur_time > 300)
                                                  {
                                                    image.src = "src/steps/5.png";
                                                    document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;

                                                  }
                                                  if (cur_time > 308)
                                                    {
                                                      image.src = "src/steps/1.png";
 
                                                      document.getElementById('stepname').textContent = `Current Step Name is: AL-Qiyaam`;

                                                    }
                                                    if (cur_time > 353)
                                                      {
                                                        image.src = "src/steps/2.png";
 
                                                        document.getElementById('stepname').textContent = `Current Step Name is: Ruku`;

                                                      }
                                                      if (cur_time > 363)
                                                        {
                                                          image.src = "src/steps/3.png";
                                                          document.getElementById('stepname').textContent = `Current Step Name is: Qiyaam`;

                                                        }
                                                        if (cur_time > 368)
                                                          {
                                                            image.src = "src/steps/5.png";
                                                            document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;

                                                          }
                                                          if (cur_time > 376)
                                                            {
                                                              image.src = "src/steps/4.png";

                                                              document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;

                                                            }
                                                            if (cur_time > 383)
                                                              {
                                                                image.src = "src/steps/5.png";

                                                                document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;

                                                              }
                                                              if (cur_time > 391)
                                                                {
                                                                  image.src = "src/steps/4.png";

                                                                  document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;

                                                                }
                                                                if (cur_time > 452)
                                                                  {
                                                                    image.src = "src/steps/6.png";
                                                                    document.getElementById('stepname').textContent = `Current Step Name is: Salam`;

                                                                  }
                                                                  if (cur_time > 455)
                                                                    {
                                                                      image.src = "src/steps/7.png"; 
                                                                      document.getElementById('stepname').textContent = `Current Step Name is: Salam`;

                                                                    }  /// end of zoher 4 rakah


}

else if ( prayer = 'Asar' )
    {/// start of asar 4 rakah
      document.getElementById('stepname').style.display ='inline-block'; // popup inline block    
      document.getElementById('stepname').textContent = cur_time;  

          if (cur_time > 5)
          {
            image.src = "src/steps/0.png";
            document.getElementById('stepname').textContent = `Current Step Name is: Takbeer`;
            
          }

          if (cur_time > 7)
            {
              image.src = "src/steps/1.png";
              document.getElementById('stepname').textContent = `Current Step Name is: AL-Qiyaam`;

              
            }
            if (cur_time > 64)
                {
                  image.src = "src/steps/2.png";
                  document.getElementById('stepname').textContent = `Current Step Name is: Ruku`;

                  
                }
                if (cur_time > 75)
                    {
                      image.src = "src/steps/3.png";
                      document.getElementById('stepname').textContent = `Current Step Name is: Qiyaam`;
                      
                    }
                    if (cur_time > 80)
                        {
                          image.src = "src/steps/5.png";
                          document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;
                          
                        }
                        if (cur_time > 89)
                            {
                              image.src = "src/steps/4.png";
                              document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;
                              
                            }
                            if (cur_time > 95)
                                {
                                  image.src = "src/steps/5.png";
                                  document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;
                                  
                                }
                                if (cur_time > 102)
                                    {
                                      image.src = "src/steps/1.png";
                                      document.getElementById('stepname').textContent = `Current Step Name is: AL-Qiyaam`;

                                      
                                    }
                                    if (cur_time > 107 )
                                      {
                                        image.src = "src/steps/1.png";
                                        document.getElementById('stepname').textContent = `Current Step Name is: AL-Qiyaam`;

                                        
                                      }
                                      if (cur_time > 160 )
                                        {
                                          image.src = "src/steps/2.png";
                                          document.getElementById('stepname').textContent = `Current Step Name is: Ruku`;

                                          
                                        }
                                        if (cur_time > 170 )
                                          {
                                            image.src = "src/steps/3.png";
                                            document.getElementById('stepname').textContent = `Current Step Name is: Qiyaam`;
                                            
                                          }
                                          if (cur_time > 176 )
                                            {
                                              image.src = "src/steps/5.png";
                                              document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;
                                              
                                            }
                                            if (cur_time > 183 )
                                              {
                                                image.src = "src/steps/4.png";
                                                document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;
                                                
                                              }
                                              if (cur_time > 189 )
                                                {
                                                  image.src = "src/steps/5.png";
                                                  document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;
                                                  
                                                }
                                                if (cur_time > 197 )
                                                  {
                                                    image.src = "src/steps/4.png";
                                                    document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;
                                                    
                                                  }
                                                  if (cur_time > 223 )
                                                    {
                                                      image.src = "src/steps/1.png";
                                                      document.getElementById('stepname').textContent = `Current Step Name is: AL-Qiyaam`;

                                                      
                                                    }
                                                    if (cur_time > 269 )
                                                      {
                                                        image.src = "src/steps/2.png";
                                                        document.getElementById('stepname').textContent = `Current Step Name is: Ruku`;

                                                        
                                                      }
                                                      if (cur_time > 278 )
                                                        {
                                                          image.src = "src/steps/3.png";
                                                          document.getElementById('stepname').textContent = `Current Step Name is: Qiyaam`;
                                                          
                                                        }
                                                        if (cur_time > 285 )
                                                          {
                                                            image.src = "src/steps/5.png";
                                                            document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;
                                                            
                                                          }
                                                          if (cur_time > 292)
                                                            {
                                                              image.src = "src/steps/4.png";
                                                              document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;
                                                              
                                                            }
                                                            if (cur_time > 298 )
                                                              {
                                                                image.src = "src/steps/5.png";
                                                                document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;
                                                                
                                                              }
                                                              if (cur_time > 306 )
                                                                {
                                                                  image.src = "src/steps/1.png";
                                                                  document.getElementById('stepname').textContent = `Current Step Name is: AL-Qiyaam`;

                                                                  
                                                                }
                                                                if (cur_time > 350 )
                                                                  {
                                                                    image.src = "src/steps/2.png";
                                                                    document.getElementById('stepname').textContent = `Current Step Name is: Ruku`;

                                                                    
                                                                  }
                                                                  if (cur_time > 361 )
                                                                    {
                                                                      image.src = "src/steps/3.png";
                                                                      document.getElementById('stepname').textContent = `Current Step Name is: Qiyaam`;
                                                                      
                                                                    }
                                                                    if (cur_time > 367 )
                                                                      {
                                                                        image.src = "src/steps/5.png";
                                                                        document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;
                                                                        
                                                                      }
                                                                      if (cur_time > 374 )
                                                                        {
                                                                          image.src = "src/steps/4.png";
                                                                          document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;
                                                                          
                                                                        }
                                                                        if (cur_time > 380 )
                                                                          {
                                                                            image.src = "src/steps/5.png";
                                                                            document.getElementById('stepname').textContent = `Current Step Name is: Sajjadh`;
                                                                            
                                                                          }
                                                                          if (cur_time > 388 )
                                                                            {
                                                                              image.src = "src/steps/4.png";
                                                                              document.getElementById('stepname').textContent = `Current Step Name is: Tashahhud`;
                                                                              
                                                                            }
                                                                            if (cur_time > 450 )
                                                                              {
                                                                                image.src = "src/steps/6.png";
                                                                                document.getElementById('stepname').textContent = `Current Step Name is: Salam`;
                                                                                
                                                                              }
                                                                              if (cur_time > 453 )
                                                                                {
                                                                                  image.src = "src/steps/7.png";
                                                                                  
                                                                                }
        }//asar end



    }, 20); // Update every second

}
function imgupdstp(){
    const image = document.getElementById('NamazImage');
    image.src = "src/steps/0.png";
document.getElementById('stepname').textContent = `Current Step Name is: Takbeer`;
    image.style.display ='none'; 
    document.getElementById('prayerTime').style.display ='block';
    document.getElementById('BFS').style.display ='block';
    document.getElementById('F').style.display ='block';
    document.getElementById('AFS').style.display ='block';
    document.getElementById('AFN').style.display='block';
    document.getElementById('AFW').style.display ='block';
    document.getElementById('stepname').style.display ='none'; // hide inline block
    document.getElementById('stepname').textContent = ` `;

}
function togglePrayer() {
    const button = document.getElementById('toggleButton');
    if (currentAudio && currentAudio.paused) {
        currentAudio.play();
        imgupdstrt();
        button.textContent = 'Stop';
        document.getElementById('stepname').style.display ='none'; // hide inline block


    } else if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        button.textContent = 'Start';
        imgupdstp();
        document.getElementById('stepname').style.display ='none'; // hide inline block

        
        
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