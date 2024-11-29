const surahList = document.getElementById("surahList");
const currentSurah = document.getElementById("currentSurahName");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const playPauseButton = document.getElementById("playPauseButton");

let audio = new Audio();
let isPlaying = false;
const playbackSpeed = document.getElementById("playbackSpeed");

// Generate Surah List
const surahs = [
  { id: "001", name: "Al-Fatiha", duration: "00:33" },
  { id: "002", name: "Al-Baqarah", duration: "01:25:33" },
  { id: "003", name: "Aal-E-Imran", duration: "45:59" },
  { id: "004", name: "An-Nisa", duration: "53:45" },
  { id: "005", name: "Al-Ma-idah", duration: "39:19" },
  { id: "006", name: "Al-Anaam", duration: "42:45" },
  { id: "007", name: "Al-Araf", duration: "48:59" },
  { id: "008", name: "Al-Anfal", duration: "19:16" },
  { id: "009", name: "At-Tawba", duration: "33:25" },
  { id: "010", name: "Yunus", duration: "24:57" },
  { id: "011", name: "Hud", duration: "26:59" },
  { id: "012", name: "Yusuf", duration: "24:47" },
  { id: "013", name: "Ar-Rad", duration: "12:09" },
  { id: "014", name: "Ibrahim", duration: "11:33" },
  { id: "015", name: "Al-Hijr", duration: "09:40" },
  { id: "016", name: "An-Nahl", duration: "24:29" },
  { id: "017", name: "Al-Isra", duration: "18:21" },
  { id: "018", name: "Al-Kahf", duration: "20:42" },
  { id: "019", name: "Maryam", duration: "11:29" },
  { id: "020", name: "Ta-Ha", duration: "17:18" },
  { id: "021", name: "Al-Anbiya", duration: "17:49" },
  { id: "022", name: "Al-Hajj", duration: "17:39" },
  { id: "023", name: "Al-Muminoon", duration: "15:26" },
  { id: "024", name: "An-Noor", duration: "18:08" },
  { id: "025", name: "Al-Furqan", duration: "12:38" },
  { id: "026", name: "Ash-Shuara", duration: "17:22" },
  { id: "027", name: "An-Naml", duration: "16:20" },
  { id: "028", name: "Al-Qasas", duration: "18:33" },
  { id: "029", name: "Al-Ankaboot", duration: "13:14" },
  { id: "030", name: "Ar-Rum", duration: "10:33" },
  { id: "031", name: "Luqman", duration: "06:49" },
  { id: "032", name: "As-Sajda", duration: "05:04" },
  { id: "033", name: "Al-Ahzab", duration: "17:47" },
  { id: "034", name: "Saba", duration: "11:25" },
  { id: "035", name: "Fatir", duration: "09:07" },
  { id: "036", name: "Ya-Seen", duration: "09:12" },
  { id: "037", name: "As-Saaffat", duration: "11:11" },
  { id: "038", name: "Sad", duration: "09:12" },
  { id: "039", name: "Az-Zumar", duration: "14:14" },
  { id: "040", name: "Ghafir", duration: "17:10" },
  { id: "041", name: "Fussilat", duration: "11:00" },
  { id: "042", name: "Ash-Shura", duration: "11:00" },
  { id: "043", name: "Az-Zukhruf", duration: "10:44" },
  { id: "044", name: "Ad-Dukhan", duration: "04:17" },
  { id: "045", name: "Al-Jathiya", duration: "05:43" },
  { id: "046", name: "Al-Ahqaf", duration: "07:50" },
  { id: "047", name: "Muhammad", duration: "07:21" },
  { id: "048", name: "Al-Fath", duration: "07:11" },
  { id: "049", name: "Al-Hujraat", duration: "04:16" },
  { id: "050", name: "Qaf", duration: "05:21" },
  { id: "051", name: "Adh-Dhariyat", duration: "04:51" },
  { id: "052", name: "At-Tur", duration: "03:56" },
  { id: "053", name: "An-Najm", duration: "04:27" },
  { id: "054", name: "Al-Qamar", duration: "04:30" },
  { id: "055", name: "Ar-Rahman", duration: "05:10" },
  { id: "056", name: "Al-Waqia", duration: "04:39" },
  { id: "057", name: "Al-Hadid", duration: "07:33" },
  { id: "058", name: "Al-Mujadila", duration: "05:49" },
  { id: "059", name: "Al-Hashr", duration: "05:39" },
  { id: "060", name: "Al-Mumtahina", duration: "04:18" },
  { id: "061", name: "As-Saff", duration: "02:31" },
  { id: "062", name: "Al-Jumua", duration: "02:00" },
  { id: "063", name: "Al-Munafiqoon", duration: "02:27" },
  { id: "064", name: "At-Taghabun", duration: "03:18" },
  { id: "065", name: "At-Talaq", duration: "03:51" },
  { id: "066", name: "At-Tahrim", duration: "03:45" },
  { id: "067", name: "Al-Mulk", duration: "04:02" },
  { id: "068", name: "Al-Qalam", duration: "04:00" },
  { id: "069", name: "Al-Haaqqa", duration: "03:26" },
  { id: "070", name: "Al-Maarij", duration: "02:51" },
  { id: "071", name: "Nooh", duration: "02:37" },
  { id: "072", name: "Al-Jinn", duration: "03:19" },
  { id: "073", name: "Al-Muzzammil", duration: "02:30" },
  { id: "074", name: "Al-Muddaththir", duration: "03:21" },
  { id: "075", name: "Al-Qiyama", duration: "02:16" },
  { id: "076", name: "Al-Insan", duration: "03:06" },
  { id: "077", name: "Al-Mursalat", duration: "02:15" },
  { id: "078", name: "An-Naba", duration: "02:23" },
  { id: "079", name: "An-Naziat", duration: "02:34" },
  { id: "080", name: "Abasa", duration: "01:56" },
  { id: "081", name: "At-Takwir", duration: "01:37" },
  { id: "082", name: "Al-Infitar", duration: "01:09" },
  { id: "083", name: "Al-Mutaffifin", duration: "02:09" },
  { id: "084", name: "Al-Inshiqaq", duration: "01:38" },
  { id: "085", name: "Al-Burooj", duration: "01:32" },
  { id: "086", name: "At-Tariq", duration: "00:59" },
  { id: "087", name: "Al-Ala", duration: "01:10" },
  { id: "088", name: "Al-Ghashiya", duration: "01:19" },
  { id: "089", name: "Al-Fajr", duration: "02:10" },
  { id: "090", name: "Al-Balad", duration: "01:06" },
  { id: "091", name: "Ash-Shams", duration: "01:05" },
  { id: "092", name: "Al-Lail", duration: "01:13" },
  { id: "093", name: "Ad-Dhuha", duration: "00:47" },
  { id: "094", name: "Al-Inshirah", duration: "00:32" },
  { id: "095", name: "At-Tin", duration: "00:30" },
  { id: "096", name: "Al-Alaq", duration: "01:17" },
  { id: "097", name: "Al-Qadr", duration: "00:26" },
  { id: "098", name: "Al-Bayyina", duration: "01:06" },
  { id: "099", name: "Az-Zalzala", duration: "00:34" },
  { id: "100", name: "Al-Adiyat", duration: "00:41" },
  { id: "101", name: "Al-Qaria", duration: "00:36" },
  { id: "102", name: "At-Takathur", duration: "00:32" },
  { id: "103", name: "Al-Asr", duration: "00:17" },
  { id: "104", name: "Al-Humaza", duration: "00:32" },
  { id: "105", name: "Al-Fil", duration: "00:22" },
  { id: "106", name: "Quraish", duration: "00:20" },
  { id: "107", name: "Al-Maun", duration: "00:26" },
  { id: "108", name: "Al-Kauther", duration: "00:20" },
  { id: "109", name: "Al-Kafiroon", duration: "00:36" },
  { id: "110", name: "An-Nasr", duration: "00:22" },
  { id: "111", name: "Al-Masadd", duration: "00:23" },
  { id: "112", name: "Al-Ikhlas", duration: "00:19" },
  { id: "113", name: "Al-Falaq", duration: "00:24" },
  { id: "114", name: "An-Nas", duration: "00:28" },

];

surahs.forEach(surah => {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${surah.id} ${surah.name}</span>
    <div>
      <span>${surah.duration}</span>
      <button class="download-button">🔉</button>
    </div>`;
  li.addEventListener("click", () => playSurah(surah));
  surahList.appendChild(li);
});


  
// Play/Pause Functionality
function playSurah(surah) {
  audio.src = `https://podcasts.qurancentral.com/urdu-translation-only/${surah.id}.mp3`;
  currentSurah.textContent = surah.name;
//   audio.playbackRate = parseFloat(event.target.value);
// audio.playbackRate = 1;
console.log(audio.playbackRate.toString());
// console.log(playbackSpeed.value);
playbackSpeed.addEventListener("change", (event) => {
      audio.playbackRate = parseFloat(event.target.value);
    });
  audio.playbackRate = parseFloat(playbackSpeed.value); // Set the current speed
  progressBar.addEventListener("input", () => {
      const newTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = progressBar.value;
    });
// audio.currentTime = 20;
  audio.play();
  isPlaying = true;
  playPauseButton.textContent = "⏸️";
  audio.onloadedmetadata = () => {
    totalTime.textContent = formatTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
  };
  audio.ontimeupdate = () => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = formatTime(audio.currentTime);
  };
}
addEventListener("load", function() {
  window.scrollTo(1, 0);
}, false);
playPauseButton.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playPauseButton.textContent = "▶️";
  } else {
    audio.play();
    playPauseButton.textContent = "⏸️";
  }
  isPlaying = !isPlaying;
});
// Seek Audio on Progress Bar Click


// Format Time
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}